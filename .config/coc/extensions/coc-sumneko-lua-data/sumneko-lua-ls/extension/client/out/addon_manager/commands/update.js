"use strict";
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
const addonManager_service_1 = __importDefault(require("../services/addonManager.service"));
const git_service_1 = require("../services/git.service");
const WebVue_1 = require("../panels/WebVue");
const webvue_1 = require("../types/webvue");
const logging_service_1 = require("../services/logging.service");
const localLogger = (0, logging_service_1.createChildLogger)("Update Addon");
exports.default = (context, message) => __awaiter(void 0, void 0, void 0, function* () {
    const addon = addonManager_service_1.default.addons.get(message.data.name);
    try {
        yield addon.update();
    }
    catch (e) {
        const message = `Failed to update ${addon.name}`;
        localLogger.error(message, { report: false });
        localLogger.error(e, { report: false });
        WebVue_1.WebVue.sendNotification({
            level: webvue_1.NotificationLevels.error,
            message,
        });
    }
    yield addon.setLock(false);
    const diff = yield git_service_1.git.diffSummary(["HEAD", "origin/main"]);
    addon.checkForUpdate(diff.files);
});
//# sourceMappingURL=update.js.map