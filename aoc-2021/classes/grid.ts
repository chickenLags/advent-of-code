
class Grid {
    width: number;
    height: number;
    defaultValue: number;
    grid: number[][] = [];

    constructor(width:number, height:number, defaultValue: number = 0) {
        this.width = width+1;
        this.height = height+1;
        this.defaultValue = defaultValue;
        this.initialize();

    }

    initialize() {
        let row = Array.from(Array(this.height)).map(a => this.defaultValue);
        for (let i = 0; i < this.width ; i++) {
            this.grid[i] = row.slice(0, this.height);
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

    getValue(x: number, y: number) {
        return this.grid[x][y];
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
}

export {Grid}
