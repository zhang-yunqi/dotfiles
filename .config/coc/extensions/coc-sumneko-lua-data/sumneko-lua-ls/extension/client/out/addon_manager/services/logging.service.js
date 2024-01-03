"use strict";
/**
 * Logging using WintonJS
 * https://github.com/winstonjs/winston
 */
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
exports.createChildLogger = exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const vsCodeOutputTransport_1 = __importDefault(require("./logging/vsCodeOutputTransport"));
const axios_1 = __importDefault(require("axios"));
const string_service_1 = require("./string.service");
const vscode = __importStar(require("vscode"));
const triple_beam_1 = require("triple-beam");
const config_1 = require("../config");
const vsCodeLogFileTransport_1 = __importDefault(require("./logging/vsCodeLogFileTransport"));
// Create logger from winston
exports.logger = winston_1.default.createLogger({
    level: "info",
    defaultMeta: { category: "General", report: true },
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.printf((message) => {
        var _a, _b;
        const level = (0, string_service_1.padText)(message.level, 9);
        const category = (0, string_service_1.padText)((_b = (_a = message === null || message === void 0 ? void 0 : message.defaultMeta) === null || _a === void 0 ? void 0 : _a.category) !== null && _b !== void 0 ? _b : "GENERAL", 18);
        if (typeof message.message === "object")
            return `[${message.timestamp}] | ${level.toUpperCase()} | ${category} | ${JSON.stringify(message.message)}`;
        return `[${message.timestamp}] | ${level.toUpperCase()} | ${category} | ${message.message}`;
    })),
    transports: [new vsCodeOutputTransport_1.default({ level: "info" })],
});
// When a error is logged, ask user to report error.
exports.logger.on("data", (info) => __awaiter(void 0, void 0, void 0, function* () {
    if (info.level !== "error" || !info.report)
        return;
    const choice = yield vscode.window.showErrorMessage(`An error occurred with the Lua Addon Manager. Please help us improve by reporting the issue ❤️`, { modal: false }, "Report Issue");
    if (choice !== "Report Issue")
        return;
    // Open log file
    yield vscode.env.openExternal(vsCodeLogFileTransport_1.default.currentLogFile);
    // Read log file and copy to clipboard
    const log = yield vscode.workspace.fs.readFile(vsCodeLogFileTransport_1.default.currentLogFile);
    yield vscode.env.clipboard.writeText("<details><summary>Retrieved Log</summary>\n\n```\n" +
        log.toString() +
        "\n```\n\n</details>");
    vscode.window.showInformationMessage("Copied log to clipboard");
    // After a delay, open GitHub issues page
    setTimeout(() => {
        const base = vscode.Uri.parse(config_1.REPOSITORY_ISSUES_URL);
        const query = [
            base.query,
            `actual=...\n\nI also see the following error:\n\n\`\`\`\n${info[triple_beam_1.MESSAGE]}\n\`\`\``,
        ];
        const issueURI = base.with({ query: query.join("&") });
        vscode.env.openExternal(issueURI);
    }, 2000);
}));
/** Helper that creates a child logger from the main logger. */
const createChildLogger = (label) => {
    return exports.logger.child({
        level: "info",
        defaultMeta: { category: label },
        format: winston_1.default.format.combine(winston_1.default.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.json()),
    });
};
exports.createChildLogger = createChildLogger;
// Log HTTP requests made through axios
const axiosLogger = (0, exports.createChildLogger)("AXIOS");
axios_1.default.interceptors.request.use((request) => {
    var _a;
    const method = (_a = request.method) !== null && _a !== void 0 ? _a : "???";
    axiosLogger.debug(`${method.toUpperCase()} requesting ${request.url}`);
    return request;
}, (error) => {
    var _a, _b, _c;
    const url = (_a = error === null || error === void 0 ? void 0 : error.config) === null || _a === void 0 ? void 0 : _a.url;
    const method = (_c = (_b = error.config) === null || _b === void 0 ? void 0 : _b.method) === null || _c === void 0 ? void 0 : _c.toUpperCase();
    axiosLogger.error(`${url} ${method} ${error.code} ${error.message}`);
    return Promise.reject(error);
});
//# sourceMappingURL=logging.service.js.map