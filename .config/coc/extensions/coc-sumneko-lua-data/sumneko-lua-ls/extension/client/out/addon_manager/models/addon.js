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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Addon_displayName, _Addon_processing, _Addon_enabled, _Addon_hasUpdate, _Addon_installed;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addon = void 0;
const vscode = __importStar(require("vscode"));
const logging_service_1 = require("../services/logging.service");
const config_1 = require("../config");
const WebVue_1 = require("../panels/WebVue");
const settings_service_1 = require("../services/settings.service");
const git_service_1 = require("../services/git.service");
const filesystem_service_1 = __importDefault(require("../services/filesystem.service"));
const languageserver_1 = require("../../languageserver");
const localLogger = (0, logging_service_1.createChildLogger)("Addon");
class Addon {
    constructor(name, path) {
        _Addon_displayName.set(this, void 0);
        /** Whether or not this addon is currently processing an operation. */
        _Addon_processing.set(this, void 0);
        /** The workspace folders that this addon is enabled in. */
        _Addon_enabled.set(this, void 0);
        /** Whether or not this addon has an update available from git. */
        _Addon_hasUpdate.set(this, void 0);
        /** Whether or not this addon is installed */
        _Addon_installed.set(this, void 0);
        this.name = name;
        this.uri = path;
        __classPrivateFieldSet(this, _Addon_enabled, [], "f");
        __classPrivateFieldSet(this, _Addon_hasUpdate, false, "f");
        __classPrivateFieldSet(this, _Addon_installed, false, "f");
    }
    get displayName() {
        var _a;
        return (_a = __classPrivateFieldGet(this, _Addon_displayName, "f")) !== null && _a !== void 0 ? _a : this.name;
    }
    /** Fetch addon info from `info.json` */
    fetchInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = vscode.Uri.joinPath(this.uri, config_1.INFO_FILENAME);
            const rawInfo = yield filesystem_service_1.default.readFile(path);
            const info = JSON.parse(rawInfo);
            __classPrivateFieldSet(this, _Addon_displayName, info.name, "f");
            return {
                name: info.name,
                description: info.description,
                size: info.size,
                hasPlugin: info.hasPlugin,
            };
        });
    }
    /** Get the `config.json` for this addon. */
    getConfigurationFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const configURI = vscode.Uri.joinPath(this.uri, "module", config_1.CONFIG_FILENAME);
            try {
                const rawConfig = yield filesystem_service_1.default.readFile(configURI);
                const config = JSON.parse(rawConfig);
                return config;
            }
            catch (e) {
                localLogger.error(`Failed to read config.json file for ${this.name} (${e})`);
                throw e;
            }
        });
    }
    /** Update this addon using git. */
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            return git_service_1.git
                .submoduleUpdate([this.uri.fsPath])
                .then((message) => localLogger.debug(message));
        });
    }
    /** Check whether this addon is enabled, given an array of enabled library paths.
     * @param libraryPaths An array of paths from the `Lua.workspace.library` setting.
     */
    checkIfEnabled(libraryPaths) {
        const regex = new RegExp(`[/\\\\]+sumneko.lua[/\\\\]+addonManager[/\\\\]+addons[/\\\\]+${this.name}`, "g");
        const index = libraryPaths.findIndex((path) => regex.test(path));
        return index !== -1;
    }
    /** Get the enabled state for this addon in all opened workspace folders */
    getEnabled() {
        return __awaiter(this, void 0, void 0, function* () {
            const folders = yield (0, settings_service_1.getLibraryPaths)();
            // Check all workspace folders for a path that matches this addon
            const folderStates = folders.map((entry) => {
                return {
                    folder: entry.folder,
                    enabled: this.checkIfEnabled(entry.paths),
                };
            });
            folderStates.forEach((entry) => (__classPrivateFieldGet(this, _Addon_enabled, "f")[entry.folder.index] = entry.enabled));
            const moduleURI = vscode.Uri.joinPath(this.uri, "module");
            __classPrivateFieldSet(this, _Addon_installed, (yield filesystem_service_1.default.exists(moduleURI)) &&
                (yield filesystem_service_1.default.readDirectory(moduleURI, { recursive: false }))
                    .length > 0, "f");
            return folderStates;
        });
    }
    enable(folder) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const librarySetting = ((_a = (yield (0, languageserver_1.getConfig)(config_1.LIBRARY_SETTING, folder.uri))) !== null && _a !== void 0 ? _a : []);
            const enabled = yield this.checkIfEnabled(librarySetting);
            if (enabled) {
                localLogger.warn(`${this.name} is already enabled`);
                __classPrivateFieldGet(this, _Addon_enabled, "f")[folder.index] = true;
                return;
            }
            // Init submodule
            try {
                yield git_service_1.git.submoduleInit([this.uri.fsPath]);
                localLogger.debug("Initialized submodule");
            }
            catch (e) {
                localLogger.warn(`Unable to initialize submodule for ${this.name}`);
                localLogger.warn(e);
                throw e;
            }
            try {
                yield git_service_1.git.submoduleUpdate([this.uri.fsPath]);
                localLogger.debug("Submodule up to date");
            }
            catch (e) {
                localLogger.warn(`Unable to update submodule for ${this.name}`);
                localLogger.warn(e);
                throw e;
            }
            // Apply addon settings
            const libraryUri = vscode.Uri.joinPath(this.uri, "module", "library");
            const configValues = yield this.getConfigurationFile();
            try {
                yield (0, languageserver_1.setConfig)([
                    {
                        action: "add",
                        key: config_1.LIBRARY_SETTING,
                        value: filesystem_service_1.default.unixifyPath(libraryUri),
                        uri: folder.uri,
                    },
                ]);
                if (configValues.settings) {
                    yield (0, settings_service_1.applyAddonSettings)(folder, configValues.settings);
                    localLogger.info(`Applied addon settings for ${this.name}`);
                }
            }
            catch (e) {
                localLogger.warn(`Failed to apply settings of "${this.name}"`);
                localLogger.warn(e);
                return;
            }
            __classPrivateFieldGet(this, _Addon_enabled, "f")[folder.index] = true;
            localLogger.info(`Enabled "${this.name}"`);
        });
    }
    disable(folder, silent = false) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const librarySetting = ((_a = (yield (0, languageserver_1.getConfig)(config_1.LIBRARY_SETTING, folder.uri))) !== null && _a !== void 0 ? _a : []);
            const regex = new RegExp(`[/\\\\]+sumneko.lua[/\\\\]+addonManager[/\\\\]+addons[/\\\\]+${this.name}`, "g");
            const index = librarySetting.findIndex((path) => regex.test(path));
            if (index === -1) {
                if (!silent)
                    localLogger.warn(`"${this.name}" is already disabled`);
                __classPrivateFieldGet(this, _Addon_enabled, "f")[folder.index] = false;
                return;
            }
            // Remove this addon from the library list
            librarySetting.splice(index, 1);
            const result = yield (0, languageserver_1.setConfig)([
                {
                    action: "set",
                    key: config_1.LIBRARY_SETTING,
                    value: librarySetting,
                    uri: folder.uri,
                },
            ]);
            if (!result) {
                localLogger.error(`Failed to update ${config_1.LIBRARY_SETTING} when disabling ${this.name}`);
                return;
            }
            // Remove addon settings if installed
            if (__classPrivateFieldGet(this, _Addon_installed, "f")) {
                const configValues = yield this.getConfigurationFile();
                try {
                    if (configValues.settings)
                        yield (0, settings_service_1.revokeAddonSettings)(folder, configValues.settings);
                }
                catch (e) {
                    localLogger.error(`Failed to revoke settings of "${this.name}"`);
                    return;
                }
            }
            __classPrivateFieldGet(this, _Addon_enabled, "f")[folder.index] = false;
            localLogger.info(`Disabled "${this.name}"`);
        });
    }
    uninstall() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const folder of vscode.workspace.workspaceFolders) {
                yield this.disable(folder, true);
            }
            const moduleURI = vscode.Uri.joinPath(this.uri, "module");
            yield filesystem_service_1.default.deleteFile(moduleURI, {
                recursive: true,
                useTrash: false,
            });
            localLogger.info(`Uninstalled ${this.name}`);
            __classPrivateFieldSet(this, _Addon_installed, false, "f");
            this.setLock(false);
        });
    }
    /** Convert this addon to an object ready for sending to WebVue. */
    toJSON() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getEnabled();
            const { name, description, size, hasPlugin } = yield this.fetchInfo();
            const enabled = __classPrivateFieldGet(this, _Addon_enabled, "f");
            const installTimestamp = (yield git_service_1.git.log()).latest.date;
            const hasUpdate = __classPrivateFieldGet(this, _Addon_hasUpdate, "f");
            return {
                name: this.name,
                displayName: name,
                description,
                enabled,
                hasPlugin,
                installTimestamp,
                size,
                hasUpdate,
                processing: __classPrivateFieldGet(this, _Addon_processing, "f"),
                installed: __classPrivateFieldGet(this, _Addon_installed, "f"),
            };
        });
    }
    checkForUpdate(modified) {
        __classPrivateFieldSet(this, _Addon_hasUpdate, false, "f");
        if (modified.findIndex((modifiedItem) => modifiedItem.file.includes(this.name)) !== -1) {
            localLogger.info(`Found update for "${this.name}"`);
            __classPrivateFieldSet(this, _Addon_hasUpdate, true, "f");
        }
        return __classPrivateFieldGet(this, _Addon_hasUpdate, "f");
    }
    /** Get a list of options for a quick picker that lists the workspace
     * folders that the addon is enabled/disabled in.
     * @param enabledState The state the addon must be in in a folder to be included.
     * `true` will only return the folders that the addon is **enabled** in.
     * `false` will only return the folders that the addon is **disabled** in
     */
    getQuickPickerOptions(enabledState) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getEnabled())
                .filter((entry) => entry.enabled === enabledState)
                .map((entry) => {
                return {
                    label: entry.folder.name,
                    detail: entry.folder.uri.path,
                };
            });
        });
    }
    setLock(state) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldSet(this, _Addon_processing, state, "f");
            return this.sendToWebVue();
        });
    }
    /** Send this addon to WebVue. */
    sendToWebVue() {
        return __awaiter(this, void 0, void 0, function* () {
            WebVue_1.WebVue.sendMessage("addAddon", { addons: yield this.toJSON() });
        });
    }
}
exports.Addon = Addon;
_Addon_displayName = new WeakMap(), _Addon_processing = new WeakMap(), _Addon_enabled = new WeakMap(), _Addon_hasUpdate = new WeakMap(), _Addon_installed = new WeakMap();
//# sourceMappingURL=addon.js.map