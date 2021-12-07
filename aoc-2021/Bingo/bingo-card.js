"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BingoCard = void 0;
const my_parse_int_1 = require("../helpers/my-parse-int");
const make_grid_1 = require("../helpers/make-grid");
class BingoCard {
    constructor(input) {
        this.rawStrings = [];
        this.raw = [];
        this.matches = [];
        this.grid = [];
        this.columnCount = 5;
        this.rowCount = 5;
        this.rawStrings = input;
        this.raw = input.map(my_parse_int_1.myParseInt);
        this.initGrid();
    }
    initGrid() {
        this.grid = (0, make_grid_1.makeGrid)(5, 5);
    }
    checkBingo(currentNumber) {
        this.mark(currentNumber);
        return this.hasBingo();
    }
    getTotalScore() {
        let winningNumber = this.matches[this.matches.length - 1];
        let unmarked = this.getUnmarked();
        let sum = unmarked.reduce((a, b) => a + b);
        let total = sum * winningNumber;
        console.log(`unmarked sum: ${sum}, current number: ${winningNumber}, total: ${total}`);
        return total;
    }
    getUnmarked() {
        let allNumbers = this.raw;
        for (let currentNumber of this.matches) {
            allNumbers = allNumbers.filter(n => n !== currentNumber);
        }
        return allNumbers;
    }
    onCard(currentNumber) {
        return this.raw.includes(currentNumber);
    }
    mark(currentNumber) {
        if (!this.onCard(currentNumber))
            return;
        this.matches.push(currentNumber);
        let index = this.raw.indexOf(currentNumber);
        let xIndex = Math.floor(index / 5);
        let yIndex = index % 5;
        this.grid[xIndex][yIndex] = 1;
    }
    hasBingo() {
        return (this.horizontalBingo() || this.verticalBingo());
    }
    horizontalBingo() {
        for (let row of this.grid) {
            if (row.every(i => i === 1)) {
                return true;
            }
        }
        return false;
    }
    verticalBingo() {
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[0][i] &&
                this.grid[1][i] &&
                this.grid[2][i] &&
                this.grid[3][i] &&
                this.grid[4][i]) {
                return true;
            }
        }
        return false;
    }
}
exports.BingoCard = BingoCard;
