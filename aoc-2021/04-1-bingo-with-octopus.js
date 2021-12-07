"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BingoWithOctopus = void 0;
const my_parse_int_1 = require("./helpers/my-parse-int");
const bingo_card_1 = require("./Bingo/bingo-card");
class BingoWithOctopus {
    constructor(input) {
        this.callableBingoNumbers = [];
        this.bingoCards = [];
        this.hasRun = false;
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
        // Extracting the bingo cards (array of length 25)
        let data = this.originalData.join();
        data = data.replaceAll(',', ' ');
        data = data.replaceAll(/ +/ig, ' ');
        const dataArray = data.split(' ');
        // remove starting whitespace
        dataArray.shift();
        // construct bingo cards
        const bingoNumberCount = 5 * 5;
        let dataLength = dataArray.length;
        let cards = [];
        for (let i = 0; i < dataLength; i += bingoNumberCount) {
            let cardData = dataArray.slice(i, i + bingoNumberCount);
            cards.push(new bingo_card_1.BingoCard(cardData));
        }
        return cards;
    }
    findFirstBingo() {
        return this.firstBingo;
    }
    findLastBingo() {
        return this.lastBingo;
    }
    run() {
        if (this.hasRun) {
            return;
        }
        for (let currentNumber of this.callableBingoNumbers) {
            if (!this.firstBingo) {
                this.firstBingo = this.bingoCards.find(card => card.checkBingo(currentNumber));
            }
            if (this.bingoCards.length === 1) {
                this.lastBingo = this.bingoCards.find(card => card.checkBingo(currentNumber));
            }
            this.bingoCards = this.bingoCards.filter(card => !card.checkBingo(currentNumber));
        }
    }
}
exports.BingoWithOctopus = BingoWithOctopus;
