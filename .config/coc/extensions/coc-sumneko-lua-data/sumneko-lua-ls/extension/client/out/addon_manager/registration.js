"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const WebVue_1 = require("./panels/WebVue");
const vsCodeLogFileTransport_1 = __importDefault(require("./services/logging/vsCodeLogFileTransport"));
const logging_service_1 = require("./services/logging.service");
const dayjs_1 = __importDefault(require("dayjs"));
const relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
const git_service_1 = require("./services/git.service");
const config_1 = require("./config");
const webvue_1 = require("./types/webvue");
const languageServer = __importStar(require("../languageserver"));
dayjs_1.default.extend(relativeTime_1.default);
const localLogger = (0, logging_service_1.createChildLogger)("Registration");
/** Set up the addon manager by registering its commands in VS Code */
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const globalConfig = vscode.workspace.getConfiguration("Lua.addonManager");
        const isEnabled = globalConfig.get("enable");
        if (!isEnabled) {
            // NOTE: Will only log to OUTPUT, not to log file
            localLogger.info("Addon manager is disabled");
            return;
        }
        const fileLogger = new vsCodeLogFileTransport_1.default(context.logUri, {
            level: "debug",
        });
        // Register command to open addon manager
        context.subscriptions.push(vscode.commands.registerCommand("lua.addon_manager.open", () => __awaiter(this, void 0, void 0, function* () {
            // Set up file logger
            if (!fileLogger.initialized) {
                const disposable = yield fileLogger.init();
                context.subscriptions.push(disposable);
                logging_service_1.logger.info(`This session's log file: ${vsCodeLogFileTransport_1.default.currentLogFile}`);
                logging_service_1.logger.add(fileLogger);
                yield fileLogger.logStart();
            }
            // Start language server if it is not already
            // We depend on it to apply config modifications
            if (!languageServer.defaultClient) {
                logging_service_1.logger.debug("Starting language server");
                yield languageServer.createClient(context);
                logging_service_1.logger.debug("Language server has started");
            }
            // Check if git is installed
            if (!(yield git_service_1.git.version()).installed) {
                logging_service_1.logger.error("Git does not appear to be installed!", {
                    report: false,
                });
                vscode.window
                    .showErrorMessage("Git does not appear to be installed. Please install Git to use the addon manager", "Disable Addon Manager", "Visit Git Website")
                    .then((result) => {
                    switch (result) {
                        case "Disable Addon Manager":
                            globalConfig.update("enable", false, vscode.ConfigurationTarget.Global);
                            break;
                        case "Visit Git Website":
                            vscode.env.openExternal(vscode.Uri.parse(config_1.GIT_DOWNLOAD_URL));
                            break;
                        default:
                            break;
                    }
                });
            }
            // Set up git repository for fetching addons
            try {
                (0, git_service_1.setupGit)(context);
            }
            catch (e) {
                const message = "Failed to set up Git repository. Please check your connection to GitHub.";
                logging_service_1.logger.error(message, { report: false });
                logging_service_1.logger.error(e, { report: false });
                WebVue_1.WebVue.sendNotification({
                    level: webvue_1.NotificationLevels.error,
                    message,
                });
            }
            WebVue_1.WebVue.render(context);
        })));
    });
}
exports.activate = activate;
//# sourceMappingURL=registration.js.map