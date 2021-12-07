"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGrid = void 0;
function makeGrid(width, height, initializedTo = 0) {
    let grid = [];
    let row = Array.from(Array(width)).map(a => initializedTo);
    for (let i = 0; i < height; i++) {
        grid[i] = row.slice(0, 5);
    }
    return grid;
}
exports.makeGrid = makeGrid;
