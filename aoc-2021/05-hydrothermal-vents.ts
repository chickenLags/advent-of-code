import {myParseInt} from "./helpers/my-parse-int";
import {Segment} from "./classes/vector";
import {Grid} from "./classes/grid";
import {Coordinate} from "./classes/coordinate";

class HydrothermalVents {
    raw: string[];
    xCoords: number[] = [];
    yCoords: number[] = [];
    grid: Grid;
    lineSegments: Segment[] = [];
    ran: boolean = false;
    intersections: number = 0;

    constructor(input: string[]) {
        this.raw = input;
        this.setCoords();
        this.grid = new Grid(this.getHighestXCoord(), this.getHighestYCoord());
        this.initializeLineSegments();
    }

    run() {
        if (this.ran) {
            return;
        }

        this.ran = true;

        for (let segment of this.lineSegments) {
            let points: Coordinate[] = segment.getPoints();

            for (let point of points) {
                this.grid.increment(point.x, point.y);
            }
        }

        this.intersections = this.grid.getIntersections();

        console.log(`Intersections on grid (where value greater than 1): ${this.intersections}`)
    }

    private setCoords() {
        let coordinatesStrings = this.raw.map(i => i.split(' -> ')).flat();
        coordinatesStrings.forEach(c => {
            let [xCoord, yCoord] = c.split(',');
            this.xCoords.push(myParseInt(xCoord));
            this.yCoords.push(myParseInt(yCoord));
        });
    }

    private initializeLineSegments() {
        for (let vectorString of this.raw) {
            this.lineSegments.push(Segment.FromString(vectorString));
        }
    }

    getHighestXCoord() {
        return Math.max(...this.xCoords);
    }

    getHighestYCoord() {
        return Math.max(...this.yCoords);
    }
}

export {HydrothermalVents};
