import {stringDifference} from "../helpers/array-difference";

interface INumber {
    top: string;
    leftTop: string;
    rightTop: string;
    middle: string;
    leftBot: string;
    rightBot: string;
    bot: string;
}

class Clock {
    rawNumbers: INumber;

    rawInput: string;

    constructor(numbers: INumber, input: string) {
        this.rawNumbers = numbers;
        this.rawInput = input;
    }

    getNumber() {
        if (this.isOne()) return '1';
        if (this.isTwo()) return '2';
        if (this.isThree()) return '3';
        if (this.isFour()) return '4';
        if (this.isFive()) return '5';
        if (this.isSix()) return '6';
        if (this.isSeven()) return '7';
        if (this.isEight()) return '8';
        if (this.isNine()) return '9';
        if (this.isZero()) return '0';

        console.log(`no match was found in Clock.getNumber(). input: ${this.rawInput}, numbers:`)
        console.log(this.rawNumbers)
        throw new Error(`no match was found in Clock.getNumber(). input: ${this.rawInput}, numbers: ${this.rawNumbers}`);
        return 0;
    }

    private isOne() {
        return this.rawInput.length === 2;
    }

    private isTwo() {
        let two = [
            this.rawNumbers.top,
            this.rawNumbers.rightTop,
            this.rawNumbers.middle,
            this.rawNumbers.leftBot,
            this.rawNumbers.bot,
        ];

        return stringDifference(two.join(''), this.rawInput).length === 0;
    }

    private isThree() {
        let three = [
            this.rawNumbers.top,
            this.rawNumbers.rightTop,
            this.rawNumbers.middle,
            this.rawNumbers.rightBot,
            this.rawNumbers.bot,
        ];

        return stringDifference(three.join(''), this.rawInput).length === 0;
    }

    private isFour() {
        return this.rawInput.length === 4;
    }

    private isFive() {
        let five = [
            this.rawNumbers.top,
            this.rawNumbers.leftTop,
            this.rawNumbers.middle,
            this.rawNumbers.rightBot,
            this.rawNumbers.bot,
        ];

        return stringDifference(five.join(''), this.rawInput).length === 0;
    }

    private isSix() {
        let six = [
            this.rawNumbers.top,
            this.rawNumbers.leftTop,
            this.rawNumbers.middle,
            this.rawNumbers.rightBot,
            this.rawNumbers.leftBot,
            this.rawNumbers.bot,
        ];

        return stringDifference(six.join(''), this.rawInput).length === 0;
    }

    private isSeven() {
        return this.rawInput.length === 3;
    }

    private isEight() {
        return this.rawInput.length === 7;
    }

    private isNine() {
        let nine = [
            this.rawNumbers.top,
            this.rawNumbers.leftTop,
            this.rawNumbers.rightTop,
            this.rawNumbers.middle,
            this.rawNumbers.rightBot,
            this.rawNumbers.bot,
        ];

        return stringDifference(nine.join(''), this.rawInput).length === 0;
    }

    private isZero() {
        let nine = [
            this.rawNumbers.top,
            this.rawNumbers.leftTop,
            this.rawNumbers.rightTop,
            this.rawNumbers.leftBot,
            this.rawNumbers.rightBot,
            this.rawNumbers.bot,
        ];

        return stringDifference(nine.join(''), this.rawInput).length === 0;
    }
}

export {Clock, INumber};
