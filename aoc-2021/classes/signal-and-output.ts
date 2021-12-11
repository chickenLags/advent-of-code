import {arrayDifference, exclusiveStringDifference, stringDifference} from "../helpers/array-difference";
import {Clock, INumber} from "./clock";
import {myParseInt} from "../helpers/my-parse-int";


class SignalAndOutput {

    rawInput: string;
    firstPart: string[];
    secondPart: string[];

    constructor(input: string) {
        this.rawInput = input;
        this.firstPart = input.split(' | ')[0].split(' ');
        this.secondPart = input.split(' | ')[1].split(' ');
    }

    getSpecificOccurence() {
        let occurences: number = this.secondPart.filter( s => [2, 3, 4, 7].includes(s.length))?.length || 0;

        return occurences;
    }

    getSum(): number {
        let allParts: string[] = [...this.firstPart, ...this.secondPart];

        let one = allParts.find(part => part.length === 2) || 'z';
        let four = allParts.find(part => part.length === 4) || 'z';
        let seven = allParts.find(part => part.length === 3) || 'z';
        let eight = allParts.find(part => part.length === 7) || 'z';
        let sixNine = allParts.filter(part => part.length === 6) || ['z'];
        let twoThreeFive = allParts.filter(part => part.length === 5) || ['z'];

        if (!one || !four || !seven || !eight) {
            console.log("failed finding all numbers in this instance.");
        }

        let numbers: INumber = {
            top: 'x',
            leftTop: 'x',
            rightTop: 'x',
            middle: 'x',
            leftBot: 'x',
            rightBot: 'x',
            bot: 'x',
        }

        numbers.top = stringDifference(one, seven)[0]; // certain


        let rightUpAndDown: string[] = one?.split('') || ['z'];
        let leftAndMiddle: string[] = stringDifference(four, one);

        let abcdf = [numbers.top, ...rightUpAndDown, ...leftAndMiddle];

        let leftBottomAndBottom = stringDifference(eight, abcdf.join());

        let oneDifferencePart: string = twoThreeFive.find(part => exclusiveStringDifference(part, abcdf.join()).length === 1) || 'z';
        numbers.bot = stringDifference(oneDifferencePart, abcdf.join())[0];

        let abcdfg = [...abcdf, numbers.bot];
        oneDifferencePart = allParts.find(part => exclusiveStringDifference(part, abcdfg.join()).length === 1) || 'z';
        numbers.leftBot = stringDifference(oneDifferencePart, abcdfg.join())[0] || 'z';

        let acfg = [numbers.top, numbers.bot, ...one.split('')];
        oneDifferencePart = allParts.filter(p => p.length === 5).find(part => exclusiveStringDifference(part, acfg.join()).length === 1) || 'z';
        numbers.middle = stringDifference(oneDifferencePart, acfg.join())[0];

        let cdf = [...one.split(''), numbers.middle];
        numbers.leftTop = stringDifference(four, cdf.join())[0];

        let adeg = [numbers.top, numbers.middle, numbers.leftBot, numbers.bot];
        oneDifferencePart = allParts.find(part => exclusiveStringDifference(part, adeg.join()).length === 1) || 'z';
        numbers.rightTop = stringDifference(oneDifferencePart, adeg.join())[0];

        let abcdeg = [numbers.top, numbers.leftTop, numbers.rightTop, numbers.middle, numbers.leftBot, numbers.bot];
        numbers.rightBot = stringDifference(eight, abcdeg.join())[0];

        let clocks: Clock[] = this.secondPart.map(secondPart => new Clock(numbers, secondPart));
        let totalString = clocks.map(clock => clock.getNumber());
        return myParseInt(totalString.join(''));
    }

    getTop(one: string = '', seven: string = '') {
        return one.split('').find(a => !seven.split('').includes(a)) || 'z';
    }

    getleftAndMiddle(one: string = '', four: string = '') {
        return stringDifference(one, four);
    }


}

export {SignalAndOutput};
