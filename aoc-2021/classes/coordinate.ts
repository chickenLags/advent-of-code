
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

    static unique(coordinate: Coordinate, index: number, self: Coordinate[]) {
        return self.findIndex( val => val.toString() === coordinate.toString()) === index;
    }

    valueOf() {
        return `${this.x},${this.y}`;
    }

    toString() {
        return this.valueOf();
    }

    eq(other: Coordinate) {
        return this.valueOf() === other.valueOf()
    }

    static sortYAsc(pointA: Coordinate, pointB: Coordinate) {
        return pointA.y < pointB.y ? -1 : 1;
    }
}



export {Coordinate}
