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
const filesystem_service_1 = __importDefault(require("./filesystem.service"));
const logging_service_1 = require("./logging.service");
const addon_1 = require("../models/addon");
const git_service_1 = require("./git.service");
const WebVue_1 = require("../panels/WebVue");
const webvue_1 = require("../types/webvue");
const localLogger = (0, logging_service_1.createChildLogger)("Addon Manager");
class AddonManager {
    constructor() {
        this.addons = new Map();
    }
    fetchAddons(installLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield git_service_1.git.fetch();
                yield git_service_1.git.pull();
            }
            catch (e) {
                const message = "Failed to fetch addons! Please check your connection to GitHub.";
                localLogger.error(message, { report: false });
                localLogger.error(e, { report: false });
                WebVue_1.WebVue.sendNotification({
                    level: webvue_1.NotificationLevels.error,
                    message,
                });
            }
            const addons = yield filesystem_service_1.default.readDirectory(installLocation);
            for (const addon of addons) {
                this.addons.set(addon.name, new addon_1.Addon(addon.name, addon.uri));
                localLogger.verbose(`Found ${addon.name}`);
            }
            return yield this.checkUpdated();
        });
    }
    checkUpdated() {
        return __awaiter(this, void 0, void 0, function* () {
            const diff = yield git_service_1.git.diffSummary(["main", "origin/main"]);
            this.addons.forEach((addon) => {
                addon.checkForUpdate(diff.files);
            });
        });
    }
    unlockAddon(name) {
        const addon = this.addons.get(name);
        return addon.setLock(false);
    }
}
exports.default = new AddonManager();
//# sourceMappingURL=addonManager.service.js.map