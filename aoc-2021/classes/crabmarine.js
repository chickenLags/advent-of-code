"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crabmarine = void 0;
class Crabmarine {
    constructor(position) {
        this.crabFuelMethod = true;
        this.position = position;
    }
    getFuelRequiredForPosition(desiredPosition) {
        const distanceSteps = this.determineSteps(desiredPosition);
        if (!this.crabFuelMethod) {
            return distanceSteps;
        }
        let fuel = 0;
        for (let i = 0; i < distanceSteps; i++) {
            fuel += (i + 1);
        }
        return fuel;
    }
    determineSteps(desiredPosition) {
        return Math.max(desiredPosition, this.position) - Math.min(desiredPosition, this.position);
    }
}
exports.Crabmarine = Crabmarine;
