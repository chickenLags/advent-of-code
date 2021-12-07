import {myParseInt} from "./helpers/my-parse-int";
import {BingoCard} from "./Bingo/bingo-card";


class BingoWithOctopus {
    private originalData: string[];
    private callableBingoNumbers: number[] = [];
    private bingoCards: BingoCard[] = [];
    private hasRan: boolean = false;
    private firstBingo?: BingoCard;
    private lastBingo?: BingoCard;

    private BINGO_NUMBER_COUNT: number = 5*5;

    constructor(input: string[]) {

        this.originalData = input;
        this.callableBingoNumbers = this.getBingoNumbers();
        this.bingoCards = this.getBingoCards();
        this.run();
    }

    private getBingoNumbers() {
        const bingoNumbersString: string = this.originalData.shift() || '';
        return bingoNumbersString.split(',').map(myParseInt);
    }

    private getBingoCards() {
        // Arrange raw data to number[] for further processing...
        let data: string = this.originalData.join();
        data = data.replaceAll(',', ' ');
        data = data.replaceAll(/ +/ig, ' ');
        const dataArray: string[] = data.split(' ');

        // remove starting whitespace
        dataArray.shift();

        /*
        * Construct bingo cards by batching the numbers out of the raw data
        *  and into the bingo cart constructor.
        * */
        let dataLength: number = dataArray.length;

        let cards: BingoCard[] = [];
        for (let i = 0 ; i < dataLength; i += this.BINGO_NUMBER_COUNT) {
            let cardData = dataArray.slice(i, i + this.BINGO_NUMBER_COUNT);
            cards.push(new BingoCard(cardData));
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
                this.firstBingo = this.bingoCards.find(card => card.checkBingo(currentNumber))
            }

            if (this.isLastBingoCard()) {
                this.lastBingo = this.bingoCards.find(card => card.checkBingo(currentNumber))
            }

            this.bingoCards = this.bingoCards.filter( card => !card.checkBingo(currentNumber));
        }
    }

    private isLastBingoCard() {
        return this.bingoCards.length === 1;
    }
}

export {BingoWithOctopus};
