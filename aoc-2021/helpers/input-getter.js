"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitString = exports.mapToInt = exports.inputGetter = void 0;
const axios_1 = __importDefault(require("axios"));
async function inputGetter(inputUrl) {
    const responseData = await axios_1.default.get(inputUrl, { headers: {
            cookie: `_ga=${process.env.GA}; _gid=${process.env.GOOGLE_ID}; session=${process.env.SESSION}`
        } });
    const dataWithoutEmpty = responseData.data.split('\n');
    dataWithoutEmpty.pop();
    return dataWithoutEmpty;
}
exports.inputGetter = inputGetter;
function splitString(input, seperator = ',') {
    return input.split(seperator);
}
exports.splitString = splitString;
function mapToInt(input) {
    return input.map(i => parseInt(i, 10));
}
exports.mapToInt = mapToInt;
