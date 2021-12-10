import {myParseInt} from "./helpers/my-parse-int";
import {Segment} from "./classes/segment";
import {Grid} from "./classes/grid";
import {Coordinate} from "./classes/coordinate";
import {LanternFish} from "./classes/lanten-fish";

enum FishMethod {
    OOP,
    DICT
}

// 365131 fishes after 80 days - is correcto!
// computer says: 1650309278600 - thats right :)

class LanterFishExcersise {
    rawInput: number[];
    iterations: number = 0;
    method: FishMethod = FishMethod.OOP;
    lanternFishes: LanternFish[] = [];
    fishDict: object = {};

    constructor(input: number[]) {
        this.rawInput = input;
    }

    run(iterations: number, method: FishMethod) {
        this.iterations = iterations;
        this.method = method;

        if (this.method === FishMethod.OOP) {
            return this.oopMethod();
        }

        if (this.method === FishMethod.DICT) {
            return this.dictMethod();
        }

        return -1;
    }

    private oopMethod() {
        this.lanternFishes = this.rawInput.map(birthCountdown => new LanternFish(birthCountdown));

        for(let iteration = 0; iteration < this.iterations; iteration++) {
            this.lanternFishes = this.lanternFishes.map(fish => fish.getNextGeneration()).flat();
        }
    }

    private dictMethod() {
        this.fishDict = {
            temp: 0,
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
        };

        // @ts-ignore
        this.rawInput.forEach(tillBirth => this.fishDict[tillBirth]++);

        for (let iteration = 0; iteration < this.iterations; iteration++) {
            let temp = 0;
            for (let birthCountdown = 0; birthCountdown <= 8; birthCountdown++) {
                if (birthCountdown === 0) {
                    // @ts-ignore
                    this.fishDict.temp = this.fishDict[birthCountdown];
                    continue;
                }

                // @ts-ignore
                this.fishDict[birthCountdown - 1] = this.fishDict[birthCountdown];
            }

            // @ts-ignore
            this.fishDict[6] += this.fishDict.temp;
            // @ts-ignore
            this.fishDict[8] = this.fishDict.temp;
        }
    }

    private sumFishDict() {
        let sum = 0
        for(let birthCountdown = 0; birthCountdown <=8; birthCountdown++) {
            // @ts-ignore
            sum += this.fishDict[birthCountdown];
        }

        return sum;
    }

    printStatus() {
        if (this.method === FishMethod.OOP)
            console.log(`After ${this.iterations} iterations - population amounts to: ${this.lanternFishes.length}`)

        if (this.method === FishMethod.DICT)
            console.log(`After ${this.iterations} iterations - population amounts to: ${this.sumFishDict()}`)
    }
}

export {LanterFishExcersise, FishMethod};
