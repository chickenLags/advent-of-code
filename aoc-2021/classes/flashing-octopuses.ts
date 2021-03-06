import {Grid} from "./grid";
import {myParseInt} from "../helpers/my-parse-int";
import {Coordinate} from "./coordinate";


class FlashingOctopuses extends Grid{
    raw: string[];
    flashGrid: Grid;

    constructor(gridData: string[]) {
        super(gridData[0].length, gridData.length, 0)
        this.raw = gridData;
        this.flashGrid = new Grid(this.width, this.height, 0, 0);
    }

    initGrid() {
        for(let x = 0; x < this.width; x++) {
            for(let y = 0; y < this.height; y++) {
                this.setValue(x, y, myParseInt(this.raw[y].charAt(x)));
            }
        }
    }

    getFlashesAfterSteps(steps: number) {
        this.initGrid();

        let totalFlashes = 0;

        for ( let step = 0; step < steps; step++) {
            totalFlashes += this.processStep();
        }

        return totalFlashes;
    }

    getFirstSynchronicStep() {
        this.initGrid();

        let currentStep = 0;

        while (true) {
            currentStep++;
            this.print()
            if (this.processStep() === this.width * this.height) {
                return currentStep;
            }
        }
    }

    private processStep(){
        this.increaseAllValuesByOne();

        let totalFlashes: number = 0;

        while(this.anyOctopusPrimed()) {
            let flashesCoordinates: Coordinate[] = this.getFlashes();

            this.applyEnergyFromFlashes(flashesCoordinates);

            totalFlashes += flashesCoordinates.length;
        }

        this.resetFlashedOctopuses();

        return totalFlashes;
    }


    private increaseAllValuesByOne() {
        for(let x = 0; x < this.width; x++) {
            for(let y = 0; y < this.height; y++) {
                this.increment(x, y);
            }
        }
    }

    private anyOctopusPrimed() {
        let primedOctopuses: Coordinate[] = this.getPrimedOctopuses();

        let primedOctopusesUnfired: Coordinate[] = [];

        for (let primedOctopus of primedOctopuses) {
            let hasFiredAlready = this.flashGrid.getValueByCoordinate(primedOctopus) !== 0;

            if (hasFiredAlready)
                continue;

            primedOctopusesUnfired.push(primedOctopus);
        }

        return primedOctopusesUnfired.length > 0;
    }

    private getFlashes() {
        let primedOctopuses: Coordinate[] = this.getPrimedOctopuses()

        let primedOctopusesUnfired: Coordinate[] = [];

        for (let primedOctopus of primedOctopuses) {
            let hasFiredAlready = this.flashGrid.getValueByCoordinate(primedOctopus) !== 0;

            if (hasFiredAlready)
                continue;

            primedOctopusesUnfired.push(primedOctopus);
        }

        return primedOctopusesUnfired;
    }

    private getPrimedOctopuses() {
        let primedOctopuses: Coordinate[] = [];

        for(let x = 0; x < this.width; x++) {
            for(let y = 0; y < this.height; y++) {
                let val = this.getValue(x, y);
                if (val > 9) {
                    primedOctopuses.push(new Coordinate(x, y));
                }
            }
        }

        return primedOctopuses;
    }

    private applyEnergyFromFlashes(primedOctopusesUnfired: Coordinate[]) {
        primedOctopusesUnfired.forEach(flashingOctopus => {
            this.flashGrid.incrementPoint(flashingOctopus);

            let neighbours = this.getAllNeighbours(flashingOctopus);

            neighbours.forEach(n => this.incrementPoint(n));
        });
    }

    private resetFlashedOctopuses() {
        this.getPrimedOctopuses().forEach(flashedOctopus => {
            this.setValueByCoordinate(flashedOctopus, 0);
        })

        this.flashGrid = new Grid(this.width, this.height, 0, 0);
    }



}

export {FlashingOctopuses};
