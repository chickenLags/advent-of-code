class Coordinate {
    x: number;
    y: number;

    constructor(x:number, y: number) {
        this.x = x;
        this.y = y;
    }

    static horizontalAscSort(coordA: Coordinate, coordB: Coordinate) {
        return coordA.x >= coordB.x ? 1: -1;
    }

    static verticalAscSort(coordA: Coordinate, coordB: Coordinate) {
        return coordA.y >= coordB.y ? 1: -1;
    }
}

export {Coordinate}
