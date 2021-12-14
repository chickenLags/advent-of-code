import {Coordinate} from "./coordinate";

class CoordinateRepository {
    private coordinates: Coordinate[];

    constructor(coordinates: Coordinate[]) {
        this.coordinates = coordinates
    }

    unique() {
        this.coordinates = this.coordinates.filter(Coordinate.unique);
        return this;
    }

    exclude(others: Coordinate[]) {
        this.coordinates = this.coordinates.filter(coordinate => !others.find(other => coordinate.eq(other)));
        return this;
    }

    get() {
        return this.coordinates;
    }
}

export {CoordinateRepository}
