import {myParseInt} from "./my-parse-int";
import Jimp from "jimp";
import {Color} from "../enum/color";
import {Grid} from "../classes/grid";


/*
* This helper takes a filename and a grid and saves that grid on a file.
* an additional rules array is taken which allows custom rules to be set
* for the colors on the image.
* */

async function gridToImage(fileName: string, grid: Grid, rules: ImageRule[]) {
    let gridArray = grid.toString().split(',').map(myParseInt);

    let image = await new Jimp(grid.height, grid.width, Color.RED);

    for (let x = 0; x < grid.width; x++) {
        for (let y = 0; y < grid.height; y++) {
            let applicableRule = rules.find( (rule: ImageRule) => rule.condition(x, y));
            let color = applicableRule?.color || Color.BLACK;

            image.setPixelColor(color, y, x);
        }
    }

    await image.writeAsync(`${fileName}.${image.getExtension()}`);
}

class ImageRule {
    condition: (x: number, y: number) => boolean;
    color: number;

    constructor(condition: (x: number, y: number) => boolean, color: number) {
        this.condition = condition;
        this.color = color;
    }
}


export {gridToImage, ImageRule}
