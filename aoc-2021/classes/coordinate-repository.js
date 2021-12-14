"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinateRepository = void 0;
const coordinate_1 = require("./coordinate");
class CoordinateRepository {
    constructor(coordinates) {
        this.coordinates = coordinates;
    }
    unique() {
        this.coordinates = this.coordinates.filter(coordinate_1.Coordinate.unique);
        return this;
    }
    exclude(others) {
        this.coordinates = this.coordinates.filter(coordinate => !others.find(other => coordinate.eq(other)));
        return this;
    }
    get() {
        return this.coordinates;
    }
}
exports.CoordinateRepository = CoordinateRepository;
