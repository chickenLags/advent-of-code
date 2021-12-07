"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BingoWithOctopus = void 0;
const my_parse_int_1 = require("./helpers/my-parse-int");
const bingo_card_1 = require("./Bingo/bingo-card");
class BingoWithOctopus {
    constructor(input) {
        this.callableBingoNumbers = [];
        this.bingoCards = [];
        this.hasRan = false;
        this.BINGO_NUMBER_COUNT = 5 * 5;
        this.originalData = input;
        this.callableBingoNumbers = this.getBingoNumbers();
        this.bingoCards = this.getBingoCards();
        this.run();
    }
    getBingoNumbers() {
        const bingoNumbersString = this.originalData.shift() || '';
        return bingoNumbersString.split(',').map(my_parse_int_1.myParseInt);
    }
    getBingoCards() {
        // Arrange raw data to number[] for further processing...
        let data = this.originalData.join();
        data = data.replaceAll(',', ' ');
        data = data.replaceAll(/ +/ig, ' ');
        const dataArray = data.split(' ');
        // remove starting whitespace
        dataArray.shift();
        /*
        * Construct bingo cards by batching the numbers out of the raw data
        *  and into the bingo cart constructor.
        * */
        let dataLength = dataArray.length;
        let cards = [];
        for (let i = 0; i < dataLength; i += this.BINGO_NUMBER_COUNT) {
            let cardData = dataArray.slice(i, i + this.BINGO_NUMBER_COUNT);
            cards.push(new bingo_card_1.BingoCard(cardData));
        }
        return cards;
    }
    getFirstBingo() {
        return this.firstBingo;
    }
    getLastBingo() {
        return this.lastBingo;
    }
    run() {
        if (this.hasRan) {
            return;
        }
        for (let currentNumber of this.callableBingoNumbers) {
            if (!this.firstBingo) {
                this.firstBingo = this.bingoCards.find(card => card.checkBingo(currentNumber));
            }
            if (this.isLastBingoCard()) {
                this.lastBingo = this.bingoCards.find(card => card.checkBingo(currentNumber));
            }
            this.bingoCards = this.bingoCards.filter(card => !card.checkBingo(currentNumber));
        }
    }
    isLastBingoCard() {
        return this.bingoCards.length === 1;
    }
}
exports.BingoWithOctopus = BingoWithOctopus;
