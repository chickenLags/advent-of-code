"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const coordinate_1 = require("./coordinate");
class Grid {
    constructor(width, height, outOfBoundsValue, defaultValue = 0) {
        this.grid = [];
        this.isIntersection = (x, y) => {
            return this.getValue(x, y) > 1;
        };
        this.isSegment = (x, y) => {
            return this.getValue(x, y) === 1;
        };
        this.width = width;
        this.height = height;
        this.outOfBoundsValue = outOfBoundsValue;
        this.defaultValue = defaultValue;
        this.initialize();
    }
    initialize() {
        let row = Array.from(Array(this.width)).map(a => this.defaultValue);
        for (let i = 0; i < this.height; i++) {
            this.grid[i] = row.slice(0, this.width);
        }
    }
    increment(x, y) {
        if (!this.inBounds(x, y)) {
            if (this.outOfBoundsValue === -1) {
                throw new Error(`setValue() failed because Coordinage (${x}, ${y}) was out of bounds of grid ${this.width}x${this.height}.`);
            }
            else {
                return;
            }
        }
        this.grid[x][y] += 1;
    }
    incrementPoint(point) {
        this.increment(point.x, point.y);
    }
    getIntersections() {
        let intersections = 0;
        for (let row of this.grid) {
            for (let cell of row) {
                if (cell > 1) {
                    intersections++;
                }
            }
        }
        return intersections;
    }
    inBounds(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
    getValue(x, y) {
        if (!this.inBounds(x, y)) {
            if (this.outOfBoundsValue === -1) {
                throw new Error('Out of bounds and -1 as out of bounds value given.');
            }
            return this.outOfBoundsValue;
        }
        try {
            return this.grid[x][y];
        }
        catch (e) {
            throw new Error(`Failed to getValue() because Coordinage (${x}, ${y}) was out of bounds of grid ${this.width}x${this.height}.`);
        }
    }
    getValueByCoordinate(point) {
        return this.getValue(point.x, point.y);
    }
    setValue(x, y, value) {
        if (!this.inBounds(x, y)) {
            if (this.outOfBoundsValue === -1)
                throw new Error(`setValue() failed because Coordinage (${x}, ${y}) was out of bounds of grid ${this.width}x${this.height}.`);
            else
                return;
        }
        this.grid[x][y] = value;
    }
    setValueByCoordinate(point, value) {
        this.setValue(point.x, point.y, value);
    }
    getLength() {
        return this.width * this.height;
    }
    getNeighbours(coordinates) {
        let neighboursWithOverlap;
    }
    getNeighbour(point) {
        let left = this.getValue(point.x - 1, point.y);
        let right = this.getValue(point.x + 1, point.y);
        let above = this.getValue(point.x, point.y - 1);
        let below = this.getValue(point.x, point.y + 1);
        return [left, right, above, below];
    }
    getDiagonalValues(point) {
        let lt = this.getValue(point.x - 1, point.y - 1);
        let rt = this.getValue(point.x + 1, point.y - 1);
        let lb = this.getValue(point.x - 1, point.y + 1);
        let rb = this.getValue(point.x + 1, point.y + 1);
        return [lt, rt, lb, rb];
    }
    getDiagonalCoordinates(point) {
        let lt = new coordinate_1.Coordinate(point.x - 1, point.y - 1);
        let rt = new coordinate_1.Coordinate(point.x + 1, point.y - 1);
        let lb = new coordinate_1.Coordinate(point.x - 1, point.y + 1);
        let rb = new coordinate_1.Coordinate(point.x + 1, point.y + 1);
        return [lt, rt, lb, rb];
    }
    getHorizontalCoordinates(point) {
        let left = new coordinate_1.Coordinate(point.x - 1, point.y);
        let right = new coordinate_1.Coordinate(point.x + 1, point.y);
        let above = new coordinate_1.Coordinate(point.x, point.y - 1);
        let below = new coordinate_1.Coordinate(point.x, point.y + 1);
        return [left, right, above, below];
    }
    getAllNeighbours(point) {
        return [...this.getDiagonalCoordinates(point), ...this.getHorizontalCoordinates(point)];
    }
    print() {
        for (let row of this.grid) {
            console.log(row.join('').toString());
        }
    }
}
exports.Grid = Grid;
