"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basin = void 0;
const coordinate_repository_1 = require("./coordinate-repository");
class Basin {
    constructor(lowPoint, grid) {
        this.basinPoints = [];
        this.boundaryPoints = [];
        this.newestBasinPoints = [];
        this.lowPoint = lowPoint;
        this.newestBasinPoints.push(lowPoint);
        this.grid = grid;
        this.initialize();
    }
    initialize() {
        this.newestBasinPoints = this.newNeighbours();
        while (this.newestBasinPoints.length > 0) {
            this.growBasin(this.newestBasinPoints);
            this.newestBasinPoints = this.newNeighbours();
        }
    }
    growBasin(newNeighbours) {
        let newBasinPoints = this.getBasin(newNeighbours);
        this.basinPoints = [...this.basinPoints, ...newBasinPoints];
    }
    newNeighbours() {
        let neighbours = this.getAllNeighbours();
        neighbours = neighbours.unique();
        neighbours = neighbours.exclude(this.basinPoints);
        neighbours = neighbours.exclude(this.boundaryPoints);
        let neighboursWhoAreBoundaries = this.getBoundaries(neighbours);
        this.boundaryPoints = [...this.boundaryPoints, ...neighboursWhoAreBoundaries];
        neighbours = neighbours.exclude(neighboursWhoAreBoundaries);
        return neighbours.get();
    }
    getAllNeighbours() {
        return new coordinate_repository_1.CoordinateRepository(this.newestBasinPoints.map(p => p.getNeighbours()).flat());
    }
    getBoundaries(neighbours) {
        return neighbours.get().filter(coordinate => this.grid.getValueByCoordinate(coordinate) === 9);
    }
    getBasin(coords) {
        return coords.filter(coordinate => this.grid.getValueByCoordinate(coordinate) < 9);
    }
    static sortAsc(firstBasin, secondBasin) {
        return firstBasin.getSize() < secondBasin.getSize() ? 1 : -1;
    }
    getSize() {
        return this.basinPoints.length;
    }
}
exports.Basin = Basin;
