
class Crabmarine {
    position: number;
    crabFuelMethod = true;

    constructor(position: number) {
        this.position = position;
    }

    getFuelRequiredForPosition(desiredPosition: number) {
        const distanceSteps = this.determineSteps(desiredPosition);

        if (!this.crabFuelMethod) {
            return distanceSteps;
        }

        let fuel = 0;
        for (let i =0 ; i < distanceSteps; i++) {
            fuel += (i+1);
        }

        return fuel;
    }

    private determineSteps(desiredPosition: number) {
        return Math.max(desiredPosition, this.position) - Math.min(desiredPosition, this.position);
    }
}

export {Crabmarine};
