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
const vscode = __importStar(require("vscode"));
const winston_transport_1 = __importDefault(require("winston-transport"));
const triple_beam_1 = require("triple-beam");
const fs = __importStar(require("fs"));
const string_service_1 = require("../string.service");
const dayjs_1 = __importDefault(require("dayjs"));
class VSCodeLogFileTransport extends winston_transport_1.default {
    constructor(logDir, opts) {
        super(opts);
        this.initialized = false;
        this.logDir = logDir;
    }
    /** Initialize transport instance by creating the needed directories and files. */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            // Ensure log directory exists
            yield vscode.workspace.fs.createDirectory(this.logDir);
            // Create subdirectory
            const addonLogsDir = vscode.Uri.joinPath(this.logDir, "addonManager");
            yield vscode.workspace.fs.createDirectory(addonLogsDir);
            // Create log file stream
            const logFileUri = vscode.Uri.joinPath(addonLogsDir, `${(0, dayjs_1.default)().format("HH")}.log`);
            VSCodeLogFileTransport.currentLogFile = logFileUri;
            this.stream = fs.createWriteStream(logFileUri.fsPath, {
                flags: "a",
            });
            this.initialized = true;
            return new vscode.Disposable(() => this.stream.close);
        });
    }
    /** Mark the start of the addon manager in the log */
    logStart() {
        return new Promise((resolve, reject) => {
            this.stream.write((0, string_service_1.stringToByteArray)("#### STARTUP ####\n"), (err) => {
                if (err)
                    reject(err);
                resolve(true);
            });
        });
    }
    log(info, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.initialized) {
                return;
            }
            setImmediate(() => {
                this.emit("logged", info);
            });
            this.stream.write((0, string_service_1.stringToByteArray)(info[triple_beam_1.MESSAGE] + "\n"));
            callback();
        });
    }
}
exports.default = VSCodeLogFileTransport;
//# sourceMappingURL=vsCodeLogFileTransport.js.map