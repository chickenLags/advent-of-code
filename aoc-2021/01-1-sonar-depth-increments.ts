
enum CHANGE {
    NO_CHANGE,
    INCREASED,
    DECREASED
}

class DepthIncrementCounter {
    raw: number[];
    windows: number[] = [];
    refined: CHANGE[] = [];

    constructor(data: number[]) {
        this.raw = data;

    }

    private determineChanges(input: number[]) {
        this.refined = [];

        for( let i= 0; i < input.length; i++) {
            if (i == 0) {
                this.refined.push(CHANGE.NO_CHANGE);
                continue;
            }

            if (input[i-1] < input[i]) {
                this.refined.push(CHANGE.INCREASED);
                continue;
            }

            this.refined.push(CHANGE.DECREASED);
        }
    }

    private determineChangesSingular() {
        this.determineChanges(this.raw)
    }

    private determineWindows() {
        this.windows = [];
        for (let i = 0; i < this.raw.length - 2; i++) {
            this.windows.push(this.raw[i] + this.raw[i+1] + this.raw[i+2]);
        }
    }

    private detemineChangesWindow () {
        this.refined = [];
        this.determineWindows();
        this.determineChanges(this.windows);

    }

    private getIncrements() {
        return this.refined.filter(ref => ref === CHANGE.INCREASED);
    }

    private countIncrements() {
        return this.getIncrements().length;
    }

    printCountIncrementSingular() {
        this.determineChangesSingular();
        console.log(`The depth singular incremented ${this.countIncrements()} times.`);
    }

    printCountIncrementsWindow() {
        this.detemineChangesWindow();
        console.log(`The depth windows incremented ${this.countIncrements()} times.`);
    }
}

export {DepthIncrementCounter};
