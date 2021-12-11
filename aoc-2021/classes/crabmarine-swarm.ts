import {Crabmarine} from "./crabmarine";


class CrabmarineSwarm {
    rawPositions: number[];
    crabMarines: Crabmarine[];
    lowestPosition: number;
    highestPosition: number;

    constructor(positions: number[]) {
        this.rawPositions = positions;
        this.crabMarines = positions.map(position => new Crabmarine(position));

        this.lowestPosition = Math.min(...positions);
        this.highestPosition = Math.max(...positions);
    }

    getMostFuelEfficientPosition() {
        let mostEfficientPosition: number = -1;
        let lowestFuelRequired: number = 9999999999;

        for (let index = this.lowestPosition; index < this.highestPosition; index++) {
            let fuelRequired = this.getRequiredFuelForPosition(index);

            if (fuelRequired < lowestFuelRequired) {
                lowestFuelRequired = fuelRequired;
                mostEfficientPosition = index;
            }
        }

        return mostEfficientPosition;
    }

    getRequiredFuelForPosition(position: number): number {
        const fuelRequirements = this.crabMarines.map(crab => crab.getFuelRequiredForPosition(position));
        return fuelRequirements.reduce((a, b) => a + b);
    }

}

export {CrabmarineSwarm};
