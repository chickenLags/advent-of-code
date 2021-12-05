

class ShipNavigation {
    horizontal: number = 0;
    vertical: number = 0;
    aim: number = 0;
    movementData: string[] = [];

    constructor(data: string[]) {
        this.movementData = data;
    }

    private movementToPosition(movementData: string[], angled=false){
        this.horizontal = 0;
        this.vertical = 0;
        this.aim = 0;

        for(let i = 0; i < movementData.length; i++) {
            let [instruction, stringCount] = movementData[i].split(' ');
            let count: number = parseInt(stringCount);

            if (!angled) {
                this.doSimpleAction(instruction, count);
            }
            else {
                this.doAngledAction(instruction, count);
            }
        }
    }

    doSimpleAction(instruction: string, count: number) {
        switch (instruction) {
            case "forward":
                this.horizontal += count;
                break;
            case "down":
                this.vertical -= count;
                break;
            case "up":
                this.vertical += count;
                break;
            default:
                console.log(`instructions error, original input translated to: ${instruction}, ${count}`);
                break;
        }
    }

    doAngledAction(instruction: string, count: number) {
        switch (instruction) {
            case "forward":
                this.horizontal += count;
                this.vertical += this.aim * count;
                break;
            case "down":
                this.aim -= count;
                break;
            case "up":
                this.aim += count;
                break;
            default:
                console.log(`instructions error, original input translated to: ${instruction}, ${count}`);
                break;
        }
    }

    printFinalLocation() {
        this.movementToPosition(this.movementData);
        console.log(`[SIMPLE] horizontal at: ${this.horizontal}, vertical: ${this.vertical}. sum: ${Math.abs(this.vertical * this.horizontal)}`);
    }

    printFinalLocationAngled() {
        this.movementToPosition(this.movementData, true);
        console.log(`[ANGLED] horizontal at: ${this.horizontal}, vertical: ${this.vertical}. sum: ${Math.abs(this.vertical * this.horizontal)}`);
    }


}

export {ShipNavigation};
