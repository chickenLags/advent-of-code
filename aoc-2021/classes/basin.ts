import {Coordinate} from "./coordinate";
import {Grid} from "./grid";
import {CoordinateRepository} from "./coordinate-repository";


class Basin {
    lowPoint: Coordinate;
    basinPoints: Coordinate[] = [];
    boundaryPoints: Coordinate[] = [];
    newestBasinPoints: Coordinate[] = [];
    grid: Grid;

    constructor(lowPoint: Coordinate, grid: Grid) {
        this.lowPoint = lowPoint;
        this.newestBasinPoints.push(lowPoint);
        this.grid = grid;
        this.initialize();
    }

    initialize() {
        this.newestBasinPoints = this.newNeighbours();

        while(this.newestBasinPoints.length > 0) {
            this.growBasin(this.newestBasinPoints);
            this.newestBasinPoints = this.newNeighbours();
        }
    }

    growBasin(newNeighbours: Coordinate[]) {
        let newBasinPoints = this.getBasin(newNeighbours);
        this.basinPoints = [...this.basinPoints, ...newBasinPoints];
    }

    newNeighbours() {
        let neighbours: CoordinateRepository = this.getAllNeighbours();
        neighbours = neighbours.unique();
        neighbours = neighbours.exclude(this.basinPoints);
        neighbours = neighbours.exclude(this.boundaryPoints);

        let neighboursWhoAreBoundaries: Coordinate[] = this.getBoundaries(neighbours);
        this.boundaryPoints = [...this.boundaryPoints, ...neighboursWhoAreBoundaries];

        neighbours = neighbours.exclude(neighboursWhoAreBoundaries);
        return neighbours.get();
    }

    getAllNeighbours() {
        return new CoordinateRepository(this.newestBasinPoints.map(p => p.getNeighbours()).flat());
    }

    getBoundaries(neighbours: CoordinateRepository) {
        return neighbours.get().filter(coordinate => this.grid.getValueByCoordinate(coordinate) === 9);
    }

    getBasin(coords: Coordinate[]) {
        return coords.filter(coordinate => this.grid.getValueByCoordinate(coordinate) < 9);
    }


    static sortAsc(firstBasin: Basin, secondBasin: Basin) {
        return firstBasin.getSize() < secondBasin.getSize() ? 1 : -1;
    }

    getSize() {
        return this.basinPoints.length;
    }

}

export {Basin};
