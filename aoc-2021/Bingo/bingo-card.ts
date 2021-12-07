import {myParseInt} from "../helpers/my-parse-int";
import {makeGrid} from "../helpers/make-grid";

class BingoCard{
    rawStrings: string[] = [];
    raw: number[] = [];
    matches: number[] = [];
    grid: number[][] = [];
    columnCount: number = 5;
    rowCount: number = 5;

    constructor(input: string[]) {
        this.rawStrings = input;
        this.raw = input.map(myParseInt);
        this.initGrid()
    }

    private initGrid() {
        this.grid = makeGrid(5, 5);
    }

    checkBingo(currentNumber: number) {
        this.mark(currentNumber);

        return this.hasBingo()
    }

    getTotalScore() {
        let winningNumber = this.matches[this.matches.length-1];
        let unmarked = this.getUnmarked();
        let sum = unmarked.reduce((a, b) => a+ b);
        let total = sum * winningNumber;
        console.log(`unmarked sum: ${sum}, current number: ${winningNumber}, total: ${total}`)
        return total;

    }

    private getUnmarked() {
        let allNumbers = this.raw;
        for (let currentNumber of this.matches) {
            allNumbers = allNumbers.filter( n => n !== currentNumber)
        }
        return allNumbers;
    }

    private onCard(currentNumber: number) {
        return this.raw.includes(currentNumber);
    }

    private mark(currentNumber: number) {
        if (!this.onCard(currentNumber))
            return;

        this.matches.push(currentNumber);

        let index = this.raw.indexOf(currentNumber);
        let xIndex = Math.floor(index / 5);
        let yIndex = index % 5;

        this.grid[xIndex][yIndex] = 1;
    }

    private hasBingo() {
        return (this.horizontalBingo() || this.verticalBingo());
    }

    private horizontalBingo() {
        for (let row of this.grid) {
            if (row.every(i => i === 1)) {
                return true;
            }
        }

        return false;
    }

    private verticalBingo() {
        for (let i = 0; i < this.grid.length; i++) {
            if (
                this.grid[0][i] &&
                this.grid[1][i] &&
                this.grid[2][i] &&
                this.grid[3][i] &&
                this.grid[4][i]
            ) {
                return true;
            }
        }

        return false;
    }
}

export {BingoCard};
