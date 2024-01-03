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
const addonManager_service_1 = __importDefault(require("../services/addonManager.service"));
const logging_service_1 = require("../services/logging.service");
const languageserver_1 = require("../../languageserver");
const WebVue_1 = require("../panels/WebVue");
const webvue_1 = require("../types/webvue");
const localLogger = (0, logging_service_1.createChildLogger)("Enable Addon");
exports.default = (context, message) => __awaiter(void 0, void 0, void 0, function* () {
    const addon = addonManager_service_1.default.addons.get(message.data.name);
    const workspaceFolders = vscode.workspace.workspaceFolders;
    let selectedFolders;
    if (workspaceFolders && workspaceFolders.length === 1) {
        selectedFolders = [workspaceFolders[0]];
    }
    else {
        const folderOptions = yield addon.getQuickPickerOptions(false);
        const pickResult = yield vscode.window.showQuickPick(folderOptions, {
            canPickMany: true,
            ignoreFocusOut: true,
            title: `Enable ${addon.name} in which folders?`,
        });
        if (!pickResult) {
            localLogger.warn("User did not pick workspace folder");
            yield addon.setLock(false);
            return;
        }
        selectedFolders = pickResult.map((selection) => {
            return workspaceFolders.find((folder) => folder.name === selection.label);
        });
    }
    for (const folder of selectedFolders) {
        try {
            yield addon.enable(folder);
        }
        catch (e) {
            const message = `Failed to enable ${addon.name}!`;
            localLogger.error(message, { report: false });
            localLogger.error(e, { report: false });
            WebVue_1.WebVue.sendNotification({
                level: webvue_1.NotificationLevels.error,
                message,
            });
            continue;
        }
        yield (0, languageserver_1.setConfig)([
            {
                action: "set",
                key: "Lua.workspace.checkThirdParty",
                value: false,
                uri: folder.uri,
            },
        ]);
    }
    return addon.setLock(false);
});
//# sourceMappingURL=enable.js.map