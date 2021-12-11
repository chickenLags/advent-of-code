"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalsAndDigits = void 0;
const signal_and_output_1 = require("./signal-and-output");
class SignalsAndDigits {
    constructor(input) {
        this.rawInput = input;
        this.signalAndDigits = input.map(i => new signal_and_output_1.SignalAndOutput(i));
    }
    getCountSpecificOccurences() {
        let occurences = this.signalAndDigits.map(s => s.getSpecificOccurence());
        return occurences.reduce((a, b) => a + b);
    }
    getSumTotal() {
        let sums = this.signalAndDigits.map(s => s.getSum());
        return sums.reduce((a, b) => a + b);
    }
}
exports.SignalsAndDigits = SignalsAndDigits;
