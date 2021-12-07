"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HydrothermalVents = void 0;
const my_parse_int_1 = require("./helpers/my-parse-int");
const vector_1 = require("./classes/vector");
const grid_1 = require("./classes/grid");
class HydrothermalVents {
    constructor(input) {
        this.xCoords = [];
        this.yCoords = [];
        this.lineSegments = [];
        this.ran = false;
        this.intersections = 0;
        this.raw = input;
        this.setCoords();
        this.grid = new grid_1.Grid(this.getHighestXCoord(), this.getHighestYCoord());
        this.initializeLineSegments();
    }
    run() {
        if (this.ran) {
            return;
        }
        this.ran = true;
        for (let segment of this.lineSegments) {
            let points = segment.getPoints();
            for (let point of points) {
                this.grid.increment(point.x, point.y);
            }
        }
        this.intersections = this.grid.getIntersections();
        console.log(`Intersections on grid (where value greater than 1): ${this.intersections}`);
    }
    setCoords() {
        let coordinatesStrings = this.raw.map(i => i.split(' -> ')).flat();
        coordinatesStrings.forEach(c => {
            let [xCoord, yCoord] = c.split(',');
            this.xCoords.push((0, my_parse_int_1.myParseInt)(xCoord));
            this.yCoords.push((0, my_parse_int_1.myParseInt)(yCoord));
        });
    }
    initializeLineSegments() {
        for (let vectorString of this.raw) {
            this.lineSegments.push(vector_1.Segment.FromString(vectorString));
        }
    }
    getHighestXCoord() {
        return Math.max(...this.xCoords);
    }
    getHighestYCoord() {
        return Math.max(...this.yCoords);
    }
}
exports.HydrothermalVents = HydrothermalVents;
