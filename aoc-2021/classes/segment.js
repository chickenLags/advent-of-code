"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment = void 0;
const my_parse_int_1 = require("../helpers/my-parse-int");
const coordinate_1 = require("./coordinate");
class Segment {
    constructor(startCoordinate, endCoordinate) {
        this.start = startCoordinate;
        this.end = endCoordinate;
    }
    static FromString(vectorString, seperator = ' -> ') {
        let [startString, endString] = vectorString.split(seperator);
        let [x, y] = startString.split(',').map(my_parse_int_1.myParseInt);
        let startCoord = new coordinate_1.Coordinate(x, y);
        [x, y] = endString.split(',').map(my_parse_int_1.myParseInt);
        let endCoord = new coordinate_1.Coordinate(x, y);
        return new Segment(startCoord, endCoord);
    }
    isHorizontal() {
        return this.start.y === this.end.y;
    }
    isVertical() {
        return this.start.x === this.end.x;
    }
    getPoints() {
        let points = [];
        if (this.isVertical()) {
            let [start, end] = [this.start, this.end].sort(coordinate_1.Coordinate.verticalAscSort);
            for (let y = start.y; y < end.y + 1; y++) {
                points.push(new coordinate_1.Coordinate(this.start.x, y));
            }
        }
        if (this.isHorizontal()) {
            let [start, end] = [this.start, this.end].sort(coordinate_1.Coordinate.horizontalAscSort);
            for (let x = start.x; x < end.x + 1; x++) {
                points.push(new coordinate_1.Coordinate(x, this.start.y));
            }
        }
        let diagonal = !this.isHorizontal() && !this.isVertical();
        if (diagonal) {
            let [hStart, hEnd] = [this.start, this.end].sort(coordinate_1.Coordinate.horizontalAscSort);
            let verticalDelta = hEnd.y - hStart.y;
            let verticalIncrements = Math.max(-1, Math.min(verticalDelta, 1));
            let x = hStart.x;
            let y = hStart.y;
            while (x < hEnd.x + 1) {
                points.push(new coordinate_1.Coordinate(x, y));
                x++;
                y += verticalIncrements;
            }
        }
        return points;
    }
}
exports.Segment = Segment;
