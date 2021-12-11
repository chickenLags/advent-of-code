"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrabmarineSwarm = void 0;
const crabmarine_1 = require("./crabmarine");
class CrabmarineSwarm {
    constructor(positions) {
        this.rawPositions = positions;
        this.crabMarines = positions.map(position => new crabmarine_1.Crabmarine(position));
        this.lowestPosition = Math.min(...positions);
        this.highestPosition = Math.max(...positions);
    }
    getMostFuelEfficientPosition() {
        let mostEfficientPosition = -1;
        let lowestFuelRequired = 9999999999;
        for (let index = this.lowestPosition; index < this.highestPosition; index++) {
            let fuelRequired = this.getRequiredFuelForPosition(index);
            if (fuelRequired < lowestFuelRequired) {
                lowestFuelRequired = fuelRequired;
                mostEfficientPosition = index;
            }
        }
        return mostEfficientPosition;
    }
    getRequiredFuelForPosition(position) {
        const fuelRequirements = this.crabMarines.map(crab => crab.getFuelRequiredForPosition(position));
        return fuelRequirements.reduce((a, b) => a + b);
    }
}
exports.CrabmarineSwarm = CrabmarineSwarm;
