

function makeGrid(width: number, height: number, initializedTo: number = 0) {
    let grid: number[][] = [];

    let row = Array.from(Array(width)).map(a => initializedTo);
    for (let i = 0; i < height ; i++) {
        grid[i] = row.slice(0, width);
    }

    return grid;
}

export {makeGrid};
