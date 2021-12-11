import {SignalAndOutput} from "./signal-and-output";


class SignalsAndDigits {
    rawInput: string[];
    signalAndDigits: SignalAndOutput[];

    constructor(input: string[]) {
        this.rawInput = input;
        this.signalAndDigits = input.map(i => new SignalAndOutput(i));
    }

    getCountSpecificOccurences(){
        let occurences: number[] = this.signalAndDigits.map(s => s.getSpecificOccurence());
        return occurences.reduce((a, b) => a + b);
    }

    getSumTotal() {
        let sums = this.signalAndDigits.map(s => s.getSum());
        return sums.reduce((a, b) => a + b);
    }
}

export {SignalsAndDigits};
