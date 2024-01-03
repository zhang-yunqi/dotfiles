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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.setConfig = exports.reportAPIDoc = exports.deactivate = exports.activate = exports.createClient = exports.defaultClient = void 0;
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const fs = __importStar(require("fs"));
const vscode = __importStar(require("vscode"));
const vscode_1 = require("vscode");
const node_1 = require("vscode-languageclient/node");
function registerCustomCommands(context) {
    context.subscriptions.push(vscode_1.commands.registerCommand('lua.config', (changes) => {
        const propMap = new Map();
        for (const data of changes) {
            const config = vscode_1.workspace.getConfiguration(undefined, vscode_1.Uri.parse(data.uri));
            if (data.action === 'add') {
                const value = config.get(data.key);
                if (!Array.isArray(value))
                    throw new Error(`${data.key} is not an Array!`);
                value.push(data.value);
                config.update(data.key, value, data.global);
                continue;
            }
            if (data.action === 'set') {
                config.update(data.key, data.value, data.global);
                continue;
            }
            if (data.action === 'prop') {
                if (!propMap[data.key]) {
                    propMap[data.key] = config.get(data.key);
                }
                propMap[data.key][data.prop] = data.value;
                config.update(data.key, propMap[data.key], data.global);
                continue;
            }
        }
    }));
    context.subscriptions.push(vscode_1.commands.registerCommand('lua.exportDocument', () => __awaiter(this, void 0, void 0, function* () {
        if (!exports.defaultClient) {
            return;
        }
        const outputs = yield vscode.window.showOpenDialog({
            defaultUri: vscode.Uri.joinPath(context.extensionUri, 'server', 'log'),
            openLabel: "Export to this folder",
            canSelectFiles: false,
            canSelectFolders: true,
            canSelectMany: false,
        });
        const output = outputs === null || outputs === void 0 ? void 0 : outputs[0];
        if (!output) {
            return;
        }
        exports.defaultClient.client.sendRequest(node_1.ExecuteCommandRequest.type, {
            command: 'lua.exportDocument',
            arguments: [output.toString()],
        });
    })));
    context.subscriptions.push(vscode_1.commands.registerCommand('lua.reloadFFIMeta', () => __awaiter(this, void 0, void 0, function* () {
        exports.defaultClient.client.sendRequest(node_1.ExecuteCommandRequest.type, {
            command: 'lua.reloadFFIMeta',
        });
    })));
}
/** Creates a new {@link LuaClient} and starts it. */
const createClient = (context) => {
    exports.defaultClient = new LuaClient(context, [{ language: 'lua' }]);
    exports.defaultClient.start();
};
exports.createClient = createClient;
class LuaClient extends vscode_1.Disposable {
    constructor(context, documentSelector) {
        super(() => this.dispose());
        this.context = context;
        this.documentSelector = documentSelector;
        this.disposables = new Array();
    }
    start() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // Options to control the language client
            const clientOptions = {
                // Register the server for plain text documents
                documentSelector: this.documentSelector,
                progressOnInitialization: true,
                markdown: {
                    isTrusted: true,
                    supportHtml: true,
                },
                initializationOptions: {
                    changeConfiguration: true,
                },
            };
            const config = vscode_1.workspace.getConfiguration(undefined, (_a = vscode.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a[0]);
            const commandParam = config.get("Lua.misc.parameters");
            const command = yield this.getCommand(config);
            if (!Array.isArray(commandParam))
                throw new Error("Lua.misc.parameters must be an Array!");
            const port = this.getPort(commandParam);
            const serverOptions = {
                command: command,
                transport: port
                    ? {
                        kind: node_1.TransportKind.socket,
                        port: port,
                    }
                    : undefined,
                args: commandParam,
            };
            this.client = new node_1.LanguageClient("Lua", "Lua", serverOptions, clientOptions);
            //client.registerProposedFeatures();
            yield this.client.start();
            this.onCommand();
            this.statusBar();
        });
    }
    getCommand(config) {
        return __awaiter(this, void 0, void 0, function* () {
            const executablePath = config.get("Lua.misc.executablePath");
            if (typeof executablePath !== "string")
                throw new Error("Lua.misc.executablePath must be a string!");
            if (executablePath && executablePath !== "") {
                return executablePath;
            }
            const platform = os.platform();
            let command;
            let binDir;
            if ((yield fs.promises.stat(this.context.asAbsolutePath("server/bin"))).isDirectory()) {
                binDir = "bin";
            }
            switch (platform) {
                case "win32":
                    command = this.context.asAbsolutePath(path.join("server", binDir ? binDir : "bin-Windows", "lua-language-server.exe"));
                    break;
                case "linux":
                    command = this.context.asAbsolutePath(path.join("server", binDir ? binDir : "bin-Linux", "lua-language-server"));
                    yield fs.promises.chmod(command, "777");
                    break;
                case "darwin":
                    command = this.context.asAbsolutePath(path.join("server", binDir ? binDir : "bin-macOS", "lua-language-server"));
                    yield fs.promises.chmod(command, "777");
                    break;
                default:
                    throw new Error(`Unsupported operating system "${platform}"!`);
            }
            return command;
        });
    }
    // Generated by Copilot
    getPort(commandParam) {
        // "--socket=xxxx" or "--socket xxxx"
        const portIndex = commandParam.findIndex((value) => {
            return value.startsWith("--socket");
        });
        if (portIndex === -1) {
            return undefined;
        }
        const port = commandParam[portIndex].split("=")[1] ||
            commandParam[portIndex].split(" ")[1] ||
            commandParam[portIndex + 1];
        if (!port) {
            return undefined;
        }
        return Number(port);
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client.stop();
            for (const disposable of this.disposables) {
                disposable.dispose();
            }
        });
    }
    statusBar() {
        const client = this.client;
        const bar = vscode_1.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
        bar.text = "Lua";
        bar.command = "Lua.statusBar";
        this.disposables.push(vscode_1.commands.registerCommand(bar.command, () => {
            client.sendNotification("$/status/click");
        }));
        this.disposables.push(client.onNotification("$/status/show", () => {
            bar.show();
        }));
        this.disposables.push(client.onNotification("$/status/hide", () => {
            bar.hide();
        }));
        this.disposables.push(client.onNotification("$/status/report", (params) => {
            bar.text = params.text;
            bar.tooltip = params.tooltip;
        }));
        client.sendNotification("$/status/refresh");
        this.disposables.push(bar);
    }
    onCommand() {
        this.disposables.push(this.client.onNotification("$/command", (params) => {
            vscode_1.commands.executeCommand(params.command, params.data);
        }));
    }
}
function activate(context) {
    registerCustomCommands(context);
    function didOpenTextDocument(document) {
        // We are only interested in language mode text
        if (document.languageId !== 'lua') {
            return;
        }
        // Untitled files go to a default client.
        if (!exports.defaultClient) {
            (0, exports.createClient)(context);
            return;
        }
    }
    vscode_1.workspace.onDidOpenTextDocument(didOpenTextDocument);
    vscode_1.workspace.textDocuments.forEach(didOpenTextDocument);
}
exports.activate = activate;
function deactivate() {
    return __awaiter(this, void 0, void 0, function* () {
        if (exports.defaultClient) {
            exports.defaultClient.stop();
            exports.defaultClient = null;
        }
        return undefined;
    });
}
exports.deactivate = deactivate;
function reportAPIDoc(params) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!exports.defaultClient) {
            return;
        }
        exports.defaultClient.client.sendNotification('$/api/report', params);
    });
}
exports.reportAPIDoc = reportAPIDoc;
function setConfig(changes) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!exports.defaultClient) {
            return false;
        }
        const params = [];
        for (const change of changes) {
            params.push({
                action: change.action,
                prop: (change.action === "prop") ? change.prop : undefined,
                key: change.key,
                value: change.value,
                uri: change.uri.toString(),
                global: change.global,
            });
        }
        yield exports.defaultClient.client.sendRequest(node_1.ExecuteCommandRequest.type, {
            command: 'lua.setConfig',
            arguments: params,
        });
        return true;
    });
}
exports.setConfig = setConfig;
function getConfig(key, uri) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!exports.defaultClient) {
            return undefined;
        }
        return yield exports.defaultClient.client.sendRequest(node_1.ExecuteCommandRequest.type, {
            command: 'lua.getConfig',
            arguments: [{
                    uri: uri.toString(),
                    key: key,
                }]
        });
    });
}
exports.getConfig = getConfig;
//# sourceMappingURL=languageserver.js.map