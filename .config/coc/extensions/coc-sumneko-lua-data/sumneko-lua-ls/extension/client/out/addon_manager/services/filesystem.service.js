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
const vscode = __importStar(require("vscode"));
const string_service_1 = require("./string.service");
const logging_service_1 = require("./logging.service");
const os_1 = require("os");
const localLogger = (0, logging_service_1.createChildLogger)("Filesystem");
var filesystem;
(function (filesystem) {
    /** Get a string representation of a URI using UNIX separators
     * @param uri The URI to get as a UNIX path string
     */
    function unixifyPath(uri) {
        if ((0, os_1.platform)() === "win32") {
            return uri.path.substring(1);
        }
        else {
            return uri.fsPath;
        }
    }
    filesystem.unixifyPath = unixifyPath;
    /** Check if a file exists
     * @param uri - The URI of the file to check the existence of
     */
    function exists(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield vscode.workspace.fs.stat(uri);
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    filesystem.exists = exists;
    /** Check if a directory is empty
     * @param uri - The URI of the directory to check
     */
    function empty(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dirContents = yield vscode.workspace.fs.readDirectory(uri);
                return dirContents.length < 1;
            }
            catch (e) {
                localLogger.error(e);
                return false;
            }
        });
    }
    filesystem.empty = empty;
    /** Read from a file
     * @param uri - The URI of the file to read from
     */
    function readFile(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const bytes = yield vscode.workspace.fs.readFile(uri);
            const str = bytes.toString();
            localLogger.debug(`Read "${uri.path}"`);
            return str;
        });
    }
    filesystem.readFile = readFile;
    /** Write to a file
     * @param uri - The URI of the file to write to
     * @param content - The content to write in to the file, overwriting any previous content
     */
    function writeFile(uri, content) {
        return __awaiter(this, void 0, void 0, function* () {
            const byteArray = (0, string_service_1.stringToByteArray)(content);
            yield vscode.workspace.fs.writeFile(uri, byteArray);
            localLogger.debug(`Wrote to "${uri.path}"`);
        });
    }
    filesystem.writeFile = writeFile;
    /** Delete a file
     * @param uri - The URI of the file to delete
     * @param options - Options to control if deleting a directory should be recursive and if the system's trash should be used
     */
    function deleteFile(uri, options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            yield vscode.workspace.fs.delete(uri, {
                recursive: (_a = options === null || options === void 0 ? void 0 : options.recursive) !== null && _a !== void 0 ? _a : false,
                useTrash: (_b = options === null || options === void 0 ? void 0 : options.useTrash) !== null && _b !== void 0 ? _b : true,
            });
            localLogger.debug(`Deleted ${uri.path}`);
        });
    }
    filesystem.deleteFile = deleteFile;
    function createDirectory(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            return vscode.workspace.fs
                .createDirectory(uri)
                .then(() => localLogger.debug(`Created directory at "${uri.path}"`));
        });
    }
    filesystem.createDirectory = createDirectory;
    /** Read a directory, returning an array of all entries
     * @param uri - The URI of the directory to read
     * @param options - Options for controlling recursion
     */
    function readDirectory(uri, options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const tree = [];
            options = options !== null && options !== void 0 ? options : {};
            options.maxDepth = (_a = options.maxDepth) !== null && _a !== void 0 ? _a : 10;
            options.depth = (_b = options.depth) !== null && _b !== void 0 ? _b : 0;
            if (options.depth > options.maxDepth) {
                localLogger.warn(`Max recursion depth(${options.maxDepth}) reached!`);
                return;
            }
            const dirContents = yield vscode.workspace.fs.readDirectory(uri);
            for (const item of dirContents) {
                const name = item[0];
                const type = item[1];
                const itemURI = vscode.Uri.joinPath(uri, name);
                const pathSegments = itemURI.path.split("/");
                const path = pathSegments
                    .slice(pathSegments.length - (options.depth + 1))
                    .join("/");
                switch (type) {
                    case vscode.FileType.File:
                        tree.push({ path, name, type, uri: itemURI });
                        break;
                    case vscode.FileType.Directory:
                        if (!options.recursive) {
                            tree.push({ path, name, type, uri: itemURI });
                            continue;
                        }
                        tree.push(...(yield readDirectory(itemURI, {
                            recursive: true,
                            maxDepth: options.maxDepth,
                            depth: options.depth + 1,
                        })));
                        break;
                    default:
                        localLogger.warn(`Unsupported file type ${itemURI.path}`);
                        break;
                }
            }
            return tree;
        });
    }
    filesystem.readDirectory = readDirectory;
    function getDirectorySize(uri, maxDepth = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const tree = yield readDirectory(uri, {
                maxDepth,
                recursive: true,
            });
            const promises = [];
            for (const node of tree) {
                if (node.type !== vscode.FileType.File)
                    continue;
                promises.push(new Promise((resolve) => {
                    vscode.workspace.fs
                        .stat(node.uri)
                        .then((stats) => resolve(stats.size));
                }));
            }
            return Promise.all(promises).then((results) => {
                return results.reduce((previous, result) => previous + result, 0);
            });
        });
    }
    filesystem.getDirectorySize = getDirectorySize;
})(filesystem || (filesystem = {}));
exports.default = filesystem;
//# sourceMappingURL=filesystem.service.js.map