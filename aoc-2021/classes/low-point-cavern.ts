import {makeGrid} from "../helpers/make-grid";
import {myParseInt} from "../helpers/my-parse-int";
import {Coordinate} from "./coordinate";
import {Basin} from "./basin";
import {Grid} from "./grid";


class LowPointCavern {
    grid: Grid;
    width: number;
    height: number;

    constructor(input: string[]) {
        this.width = input[0].length;
        this.height = input.length;

        this.grid = new Grid(this.width, this.height, 9);

        for(let x = 0; x < this.width; x++) {
            for(let y = 0; y < this.height; y++) {
                this.grid.setValue(x, y, myParseInt(input[y].charAt(x)));
            }
        }
    }

    getSumRiskPoints() {
        let lowPointsCoordinates = this.getLowPoints();
        let lowPointsDepthRisks: number[] = lowPointsCoordinates.map(lowPoint => this.grid.getValue(lowPoint.x, lowPoint.y) + 1);
        return lowPointsDepthRisks.reduce((a, b) => a + b)
    }

    private getLowPoints() {
        let lowPoints: Coordinate[] = [];

        for(let x = 0; x < this.width; x++) {
            for(let y = 0; y < this.height; y++) {
                if (this.isLowPoint(x, y)) {
                    lowPoints.push(new Coordinate(x, y));
                }
            }
        }

        return lowPoints;
    }

    private isLowPoint(x: number, y: number) {
        let left: number = this.grid.getValue(x-1, y);
        let right: number = this.grid.getValue(x+1, y);
        let above: number = this.grid.getValue(x, y-1);
        let below: number = this.grid.getValue(x, y+1);

        return this.grid.getValue(x, y) < Math.min(above, below, left, right)
    }

    getBiggestBasinProduct() {
        let lowPoints: Coordinate[] = this.getLowPoints();

        let basins: Basin[] = this.getBasins(lowPoints);

        let sortedBasins: Basin[] = basins.sort(Basin.sortAsc);
        let biggestThreeBasins: Basin[] = sortedBasins.slice(0, 3);

        let Basinsums = biggestThreeBasins.map(basin => basin.getSize());
        return Basinsums.reduce((a, b) => a * b);
    }

    getBasins(lowPoints: Coordinate[]) {
        return lowPoints.map(lowPoint => new Basin(lowPoint, this.grid));
    }
}

export {LowPointCavern};
