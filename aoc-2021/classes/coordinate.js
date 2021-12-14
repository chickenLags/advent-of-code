"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinate = void 0;
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static horizontalAscSort(coordA, coordB) {
        return coordA.x >= coordB.x ? 1 : -1;
    }
    static verticalAscSort(coordA, coordB) {
        return coordA.y >= coordB.y ? 1 : -1;
    }
    getNeighbours() {
        return [this.getLeft(), this.getRight(), this.getAbove(), this.getBelow()];
    }
    getLeft() {
        return new Coordinate(this.x - 1, this.y);
    }
    getRight() {
        return new Coordinate(this.x + 1, this.y);
    }
    getAbove() {
        return new Coordinate(this.x, this.y - 1);
    }
    getBelow() {
        return new Coordinate(this.x, this.y + 1);
    }
    static unique(coordinate, index, self) {
        return self.findIndex(val => val.toString() === coordinate.toString()) === index;
    }
    valueOf() {
        return `${this.x},${this.y}`;
    }
    toString() {
        return this.valueOf();
    }
    eq(other) {
        return this.valueOf() === other.valueOf();
    }
    static sortYAsc(pointA, pointB) {
        return pointA.y < pointB.y ? -1 : 1;
    }
}
exports.Coordinate = Coordinate;
