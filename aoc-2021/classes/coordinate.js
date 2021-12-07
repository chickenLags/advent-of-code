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
}
exports.Coordinate = Coordinate;
