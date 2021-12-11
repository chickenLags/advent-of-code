"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalAndOutput = void 0;
const array_difference_1 = require("../helpers/array-difference");
const clock_1 = require("./clock");
const my_parse_int_1 = require("../helpers/my-parse-int");
class SignalAndOutput {
    constructor(input) {
        this.rawInput = input;
        this.firstPart = input.split(' | ')[0].split(' ');
        this.secondPart = input.split(' | ')[1].split(' ');
    }
    getSpecificOccurence() {
        let occurences = this.secondPart.filter(s => [2, 3, 4, 7].includes(s.length))?.length || 0;
        return occurences;
    }
    getSum() {
        let allParts = [...this.firstPart, ...this.secondPart];
        let one = allParts.find(part => part.length === 2) || 'z';
        let four = allParts.find(part => part.length === 4) || 'z';
        let seven = allParts.find(part => part.length === 3) || 'z';
        let eight = allParts.find(part => part.length === 7) || 'z';
        let sixNine = allParts.filter(part => part.length === 6) || ['z'];
        let twoThreeFive = allParts.filter(part => part.length === 5) || ['z'];
        if (!one || !four || !seven || !eight) {
            console.log("failed finding all numbers in this instance.");
        }
        let numbers = {
            top: 'x',
            leftTop: 'x',
            rightTop: 'x',
            middle: 'x',
            leftBot: 'x',
            rightBot: 'x',
            bot: 'x',
        };
        numbers.top = (0, array_difference_1.stringDifference)(one, seven)[0]; // certain
        let rightUpAndDown = one?.split('') || ['z'];
        let leftAndMiddle = (0, array_difference_1.stringDifference)(four, one);
        let abcdf = [numbers.top, ...rightUpAndDown, ...leftAndMiddle];
        let leftBottomAndBottom = (0, array_difference_1.stringDifference)(eight, abcdf.join());
        // three or five have one difference on the bottom location compared to abcdf.
        let oneDifferencePart = twoThreeFive.find(part => (0, array_difference_1.exclusiveStringDifference)(part, abcdf.join()).length === 1) || 'z';
        numbers.bot = (0, array_difference_1.stringDifference)(oneDifferencePart, abcdf.join())[0]; // certain
        let abcdfg = [...abcdf, numbers.bot];
        oneDifferencePart = allParts.find(part => (0, array_difference_1.exclusiveStringDifference)(part, abcdfg.join()).length === 1) || 'z';
        numbers.leftBot = (0, array_difference_1.stringDifference)(oneDifferencePart, abcdfg.join())[0] || 'z'; // certain
        let acfg = [numbers.top, numbers.bot, ...one.split('')];
        oneDifferencePart = allParts.filter(p => p.length === 5).find(part => (0, array_difference_1.exclusiveStringDifference)(part, acfg.join()).length === 1) || 'z';
        numbers.middle = (0, array_difference_1.stringDifference)(oneDifferencePart, acfg.join())[0]; // certain
        let cdf = [...one.split(''), numbers.middle];
        numbers.leftTop = (0, array_difference_1.stringDifference)(four, cdf.join())[0]; // certain
        let adeg = [numbers.top, numbers.middle, numbers.leftBot, numbers.bot];
        oneDifferencePart = allParts.find(part => (0, array_difference_1.exclusiveStringDifference)(part, adeg.join()).length === 1) || 'z';
        numbers.rightTop = (0, array_difference_1.stringDifference)(oneDifferencePart, adeg.join())[0]; // sort of certain
        let abcdeg = [numbers.top, numbers.leftTop, numbers.rightTop, numbers.middle, numbers.leftBot, numbers.bot];
        numbers.rightBot = (0, array_difference_1.stringDifference)(eight, abcdeg.join())[0];
        let clocks = this.secondPart.map(secondPart => new clock_1.Clock(numbers, secondPart));
        let totalString = clocks.map(clock => clock.getNumber());
        // console.log(myParseInt(totalString.join('')), totalString.join('')); process.exit()
        return (0, my_parse_int_1.myParseInt)(totalString.join(''));
        // return -1;
    }
    getTop(one = '', seven = '') {
        return one.split('').find(a => !seven.split('').includes(a)) || 'z';
    }
    getleftAndMiddle(one = '', four = '') {
        return (0, array_difference_1.stringDifference)(one, four);
    }
}
exports.SignalAndOutput = SignalAndOutput;
