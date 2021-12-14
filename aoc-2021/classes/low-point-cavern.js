"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowPointCavern = void 0;
const my_parse_int_1 = require("../helpers/my-parse-int");
const coordinate_1 = require("./coordinate");
const basin_1 = require("./basin");
const grid_1 = require("./grid");
class LowPointCavern {
    constructor(input) {
        this.width = input[0].length;
        this.height = input.length;
        this.grid = new grid_1.Grid(this.width, this.height, 9);
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.grid.setValue(x, y, (0, my_parse_int_1.myParseInt)(input[y].charAt(x)));
            }
        }
    }
    getSumRiskPoints() {
        let lowPointsCoordinates = this.getLowPoints();
        let lowPointsDepthRisks = lowPointsCoordinates.map(lowPoint => this.grid.getValue(lowPoint.x, lowPoint.y) + 1);
        return lowPointsDepthRisks.reduce((a, b) => a + b);
    }
    getLowPoints() {
        let lowPoints = [];
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (this.isLowPoint(x, y)) {
                    lowPoints.push(new coordinate_1.Coordinate(x, y));
                }
            }
        }
        return lowPoints;
    }
    isLowPoint(x, y) {
        let left = this.grid.getValue(x - 1, y);
        let right = this.grid.getValue(x + 1, y);
        let above = this.grid.getValue(x, y - 1);
        let below = this.grid.getValue(x, y + 1);
        return this.grid.getValue(x, y) < Math.min(above, below, left, right);
    }
    getBiggestBasinProduct() {
        let lowPoints = this.getLowPoints();
        let basins = this.getBasins(lowPoints);
        let sortedBasins = basins.sort(basin_1.Basin.sortAsc);
        let biggestThreeBasins = sortedBasins.slice(0, 3);
        let Basinsums = biggestThreeBasins.map(basin => basin.getSize());
        return Basinsums.reduce((a, b) => a * b);
    }
    getBasins(lowPoints) {
        return lowPoints.map(lowPoint => new basin_1.Basin(lowPoint, this.grid));
    }
}
exports.LowPointCavern = LowPointCavern;
