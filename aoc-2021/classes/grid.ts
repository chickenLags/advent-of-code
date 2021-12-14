import {Coordinate} from "./coordinate";

class Grid {
    width: number;
    height: number;
    defaultValue: number;
    grid: number[][] = [];
    outOfBoundsValue: number;

    constructor(width:number, height:number, outOfBoundsValue: number, defaultValue: number = 0) {
        this.width = width;
        this.height = height;
        this.outOfBoundsValue = outOfBoundsValue;
        this.defaultValue = defaultValue;
        this.initialize();
    }

    initialize() {
        let row = Array.from(Array(this.width)).map(a => this.defaultValue);
        for (let i = 0; i < this.height ; i++) {
            this.grid[i] = row.slice(0, this.width);
        }
    }

    increment(x:number, y: number) {
        try {
            this.grid[x][y] += 1;
        } catch (e) {
            throw new Error(`failed incrementing grid at (${x}, ${y}). Grid has dimensions width: ${this.width} and height: ${this.height}`)
        }
    }

    getIntersections() {
        let intersections = 0;

        for( let row of this.grid) {
            for (let cell of row) {
                if (cell > 1) {
                    intersections++;
                }
            }
        }

        return intersections;
    }

    inBounds(x: number, y: number) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }

    getValue(x: number, y: number) {
        if (!this.inBounds(x, y)) {
            if (this.outOfBoundsValue === -1) {
                throw new Error('Out of bounds and -1 as out of bounds value given.')
            }

            return this.outOfBoundsValue;
        }

        try {
            return this.grid[x][y];
        } catch (e) {
            throw new Error(`Failed to getValue() because Coordinage (${x}, ${y}) was out of bounds of grid ${this.width}x${this.height}.`);
        }
    }

    getValueByCoordinate(point: Coordinate) {
        return this.getValue(point.x, point.y);
    }

    setValue(x: number, y: number, value: number) {
        if (!this.inBounds(x, y)) {
            throw new Error(`setValue() failed because Coordinage (${x}, ${y}) was out of bounds of grid ${this.width}x${this.height}.`);
        }
        this.grid[x][y] = value;
    }

    setValueByCoordinate(point: Coordinate, value: number) {
        this.setValue(point.x, point.y, value);
    }

    getLength() {
        return this.width * this.height;
    }

    isIntersection = (x: number, y: number) => {
        return this.getValue(x, y) > 1;
    }

    isSegment = (x: number, y: number) => {
        return this.getValue(x, y) === 1;
    }

    getNeighbours(coordinates: Coordinate[]) {
        let neighboursWithOverlap: Coordinate[]
    }

    getNeighbour(point: Coordinate) {
        let left = this.getValue(point.x-1, point.y);
        let right = this.getValue(point.x+1, point.y);
        let above = this.getValue(point.x, point.y-1);
        let below = this.getValue(point.x, point.y+1);
        return [left, right, above, below];
    }
}

export {Grid}
