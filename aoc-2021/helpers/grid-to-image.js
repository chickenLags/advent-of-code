"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageRule = exports.gridToImage = void 0;
const my_parse_int_1 = require("./my-parse-int");
const jimp_1 = __importDefault(require("jimp"));
const color_1 = require("../enum/color");
/*
* This helper takes a filename and a grid and saves that grid on a file.
* an additional rules array is taken which allows custom rules to be set
* for the colors on the image.
* */
async function gridToImage(fileName, grid, rules) {
    let gridArray = grid.toString().split(',').map(my_parse_int_1.myParseInt);
    let image = await new jimp_1.default(grid.height, grid.width, color_1.Color.RED);
    for (let x = 0; x < grid.width; x++) {
        for (let y = 0; y < grid.height; y++) {
            let applicableRule = rules.find((rule) => rule.condition(x, y));
            let color = applicableRule?.color || color_1.Color.BLACK;
            image.setPixelColor(color, y, x);
        }
    }
    await image.writeAsync(`${fileName}.${image.getExtension()}`);
}
exports.gridToImage = gridToImage;
class ImageRule {
    constructor(condition, color) {
        this.condition = condition;
        this.color = color;
    }
}
exports.ImageRule = ImageRule;
