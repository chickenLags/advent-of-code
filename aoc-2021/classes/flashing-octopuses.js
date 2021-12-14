"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashingOctopuses = void 0;
const grid_1 = require("./grid");
const my_parse_int_1 = require("../helpers/my-parse-int");
const coordinate_1 = require("./coordinate");
class FlashingOctopuses extends grid_1.Grid {
    constructor(gridData) {
        super(gridData[0].length, gridData.length, 0);
        this.raw = gridData;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.setValue(x, y, (0, my_parse_int_1.myParseInt)(gridData[y].charAt(x)));
            }
        }
        this.flashGrid = new grid_1.Grid(this.width, this.height, 0, 0);
    }
    getFlashesAfterSteps(steps) {
        let totalFlashes = 0;
        for (let step = 0; step < steps; step++) {
            // console.log(`step: ${step}`)
            totalFlashes += this.processStep();
        }
        return totalFlashes;
    }
    getFirstSynchronicStep() {
        let currentStep = 0;
        while (true) {
            currentStep++;
            this.print();
            if (this.processStep() === this.width * this.height) {
                // console.log(this.grid);
                return currentStep;
            }
        }
        // 198 too low, 199 is too low,
    }
    processStep() {
        this.increaseAllValuesByOne();
        let totalFlashes = 0;
        while (this.anyOctopusPrimed()) {
            let flashesCoordinates = this.getFlashes();
            this.applyEnergyFromFlashes(flashesCoordinates);
            totalFlashes += flashesCoordinates.length;
            // console.log(flashesCoordinates.length)
        }
        this.resetFlashedOctopuses();
        return totalFlashes;
    }
    increaseAllValuesByOne() {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.increment(x, y);
            }
        }
    }
    anyOctopusPrimed() {
        let primedOctopuses = this.getPrimedOctopuses();
        let primedOctopusesUnfired = [];
        for (let primedOctopus of primedOctopuses) {
            let hasFiredAlready = this.flashGrid.getValueByCoordinate(primedOctopus) !== 0;
            if (hasFiredAlready)
                continue;
            primedOctopusesUnfired.push(primedOctopus);
        }
        return primedOctopusesUnfired.length > 0;
    }
    getFlashes() {
        let primedOctopuses = this.getPrimedOctopuses();
        let primedOctopusesUnfired = [];
        for (let primedOctopus of primedOctopuses) {
            let hasFiredAlready = this.flashGrid.getValueByCoordinate(primedOctopus) !== 0;
            if (hasFiredAlready)
                continue;
            primedOctopusesUnfired.push(primedOctopus);
        }
        return primedOctopusesUnfired;
    }
    getPrimedOctopuses() {
        let primedOctopuses = [];
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let val = this.getValue(x, y);
                if (val > 9) {
                    primedOctopuses.push(new coordinate_1.Coordinate(x, y));
                }
            }
        }
        return primedOctopuses;
    }
    applyEnergyFromFlashes(primedOctopusesUnfired) {
        primedOctopusesUnfired.forEach(flashingOctopus => {
            this.flashGrid.incrementPoint(flashingOctopus);
            let neighbours = this.getAllNeighbours(flashingOctopus);
            neighbours.forEach(n => this.incrementPoint(n));
        });
    }
    resetFlashedOctopuses() {
        this.getPrimedOctopuses().forEach(flashedOctopus => {
            this.setValueByCoordinate(flashedOctopus, 0);
        });
        this.flashGrid = new grid_1.Grid(this.width, this.height, 0, 0);
    }
}
exports.FlashingOctopuses = FlashingOctopuses;
