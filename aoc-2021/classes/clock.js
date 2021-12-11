"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clock = void 0;
const array_difference_1 = require("../helpers/array-difference");
class Clock {
    constructor(numbers, input) {
        this.rawNumbers = numbers;
        this.rawInput = input;
    }
    getNumber() {
        if (this.isOne())
            return '1';
        if (this.isTwo())
            return '2';
        if (this.isThree())
            return '3';
        if (this.isFour())
            return '4';
        if (this.isFive())
            return '5';
        if (this.isSix())
            return '6';
        if (this.isSeven())
            return '7';
        if (this.isEight())
            return '8';
        if (this.isNine())
            return '9';
        if (this.isZero())
            return '0';
        console.log(`no match was found in Clock.getNumber(). input: ${this.rawInput}, numbers:`);
        console.log(this.rawNumbers);
        throw new Error(`no match was found in Clock.getNumber(). input: ${this.rawInput}, numbers: ${this.rawNumbers}`);
        return 0;
    }
    isOne() {
        return this.rawInput.length === 2;
    }
    isTwo() {
        let two = [
            this.rawNumbers.top,
            this.rawNumbers.rightTop,
            this.rawNumbers.middle,
            this.rawNumbers.leftBot,
            this.rawNumbers.bot,
        ];
        return (0, array_difference_1.stringDifference)(two.join(''), this.rawInput).length === 0;
    }
    isThree() {
        let three = [
            this.rawNumbers.top,
            this.rawNumbers.rightTop,
            this.rawNumbers.middle,
            this.rawNumbers.rightBot,
            this.rawNumbers.bot,
        ];
        return (0, array_difference_1.stringDifference)(three.join(''), this.rawInput).length === 0;
    }
    isFour() {
        return this.rawInput.length === 4;
    }
    isFive() {
        let five = [
            this.rawNumbers.top,
            this.rawNumbers.leftTop,
            this.rawNumbers.middle,
            this.rawNumbers.rightBot,
            this.rawNumbers.bot,
        ];
        return (0, array_difference_1.stringDifference)(five.join(''), this.rawInput).length === 0;
    }
    isSix() {
        let six = [
            this.rawNumbers.top,
            this.rawNumbers.leftTop,
            this.rawNumbers.middle,
            this.rawNumbers.rightBot,
            this.rawNumbers.leftBot,
            this.rawNumbers.bot,
        ];
        return (0, array_difference_1.stringDifference)(six.join(''), this.rawInput).length === 0;
    }
    isSeven() {
        return this.rawInput.length === 3;
    }
    isEight() {
        return this.rawInput.length === 7;
    }
    isNine() {
        let nine = [
            this.rawNumbers.top,
            this.rawNumbers.leftTop,
            this.rawNumbers.rightTop,
            this.rawNumbers.middle,
            this.rawNumbers.rightBot,
            this.rawNumbers.bot,
        ];
        return (0, array_difference_1.stringDifference)(nine.join(''), this.rawInput).length === 0;
    }
    isZero() {
        let nine = [
            this.rawNumbers.top,
            this.rawNumbers.leftTop,
            this.rawNumbers.rightTop,
            this.rawNumbers.leftBot,
            this.rawNumbers.rightBot,
            this.rawNumbers.bot,
        ];
        return (0, array_difference_1.stringDifference)(nine.join(''), this.rawInput).length === 0;
    }
}
exports.Clock = Clock;
