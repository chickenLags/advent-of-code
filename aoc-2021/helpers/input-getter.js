"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToInt = exports.inputGetter = void 0;
const axios_1 = __importDefault(require("axios"));
async function inputGetter(inputUrl) {
    let responseData = await axios_1.default.get(inputUrl, { headers: {
            cookie: "_ga=GA1.2.2006658762.1638539663; _gid=GA1.2.690046506.1638539663; session=53616c7465645f5fc841e26bf300e86736b1e0921c72a30bf3d5df0bb910f41b0316812690256fc0281b2d527aed63df"
        } });
    let dataWithoutEmpty = responseData.data.split('\n');
    dataWithoutEmpty.pop();
    return dataWithoutEmpty;
}
exports.inputGetter = inputGetter;
function mapToInt(input) {
    return input.map(i => parseInt(i));
}
exports.mapToInt = mapToInt;
