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
const logging_service_1 = require("../services/logging.service");
const addonManager_service_1 = __importDefault(require("../services/addonManager.service"));
const WebVue_1 = require("../panels/WebVue");
const config_1 = require("../config");
const localLogger = (0, logging_service_1.createChildLogger)("Get Remote Addons");
exports.default = (context) => __awaiter(void 0, void 0, void 0, function* () {
    WebVue_1.WebVue.setLoadingState(true);
    const installLocation = vscode.Uri.joinPath(context.globalStorageUri, "addonManager", config_1.ADDONS_DIRECTORY);
    if (addonManager_service_1.default.addons.size < 1) {
        yield addonManager_service_1.default.fetchAddons(installLocation);
    }
    WebVue_1.WebVue.sendMessage("addonStore", {
        property: "total",
        value: addonManager_service_1.default.addons.size,
    });
    if (addonManager_service_1.default.addons.size === 0) {
        WebVue_1.WebVue.setLoadingState(false);
        localLogger.verbose("No remote addons found");
        return;
    }
    /** Number of addons to load per chunk */
    const CHUNK_SIZE = 30;
    // Get list of addons and sort them alphabetically
    const addonList = Array.from(addonManager_service_1.default.addons.values());
    addonList.sort((a, b) => a.displayName.localeCompare(b.displayName));
    // Send addons to client in chunks
    for (let i = 0; i <= addonList.length / CHUNK_SIZE; i++) {
        const chunk = addonList.slice(i * CHUNK_SIZE, i * CHUNK_SIZE + CHUNK_SIZE);
        const addons = yield Promise.all(chunk.map((addon) => addon.toJSON()));
        yield WebVue_1.WebVue.sendMessage("addAddon", { addons });
    }
    WebVue_1.WebVue.setLoadingState(false);
});
//# sourceMappingURL=getAddons.js.map