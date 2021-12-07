import {myParseInt} from "../helpers/my-parse-int";
import {Coordinate} from "./coordinate";

class Segment {
    start: Coordinate;
    end: Coordinate;

    constructor(startCoordinate: Coordinate, endCoordinate: Coordinate) {
        this.start = startCoordinate;
        this.end = endCoordinate;
    }

    static FromString(vectorString: string, seperator: string = ' -> '){
        let [startString, endString] = vectorString.split(seperator);

        let [x, y] = startString.split(',').map(myParseInt)
        let startCoord: Coordinate = new Coordinate(x, y);

        [x, y] = endString.split(',').map(myParseInt)
        let endCoord: Coordinate = new Coordinate(x, y);

        return new Segment(startCoord, endCoord);
    }

    isHorizontal() {
        return this.start.y === this.end.y;
    }

    isVertical() {
        return this.start.x === this.end.x;
    }

    getPoints() {
        let points: Coordinate[] = [];

        if (this.isVertical()) {
            let [start, end] = [this.start, this.end].sort(Coordinate.verticalAscSort);

            for( let y = start.y; y < end.y + 1; y++) {
                points.push(new Coordinate(this.start.x, y));
            }
        }

        if (this.isHorizontal()) {
            let [start, end] = [this.start, this.end].sort(Coordinate.horizontalAscSort);

            for( let x = start.x; x < end.x + 1; x++) {
                points.push(new Coordinate(x, this.start.y));
            }
        }

        return points;
    }
}

export {Segment}
