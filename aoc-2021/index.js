"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const input_getter_1 = require("./helpers/input-getter");
const _01_1_sonar_depth_increments_1 = require("./01-1-sonar-depth-increments");
const _02_2_navigation_1 = require("./02-2-navigation");
const _03_1_power_consumption_1 = require("./03-1-power-consumption");
const _04_1_bingo_with_octopus_1 = require("./04-1-bingo-with-octopus");
const run = async () => {
    // await DayOne_depthCalculations();
    // await  DayTwo_navigations;
    // await dayThree_powerConsumption();
    await dayFour_Bingo();
};
async function DayOne_depthCalculations() {
    const inputDay1aUrl = "https://adventofcode.com/2021/day/1/input";
    const inputDay1a = await (0, input_getter_1.inputGetter)(inputDay1aUrl);
    const inputDay1aNumbers = (0, input_getter_1.mapToInt)(inputDay1a);
    const depthIncrementCounter = new _01_1_sonar_depth_increments_1.DepthIncrementCounter(inputDay1aNumbers);
    depthIncrementCounter.printCountIncrementSingular();
    depthIncrementCounter.printCountIncrementsWindow();
}
async function DayTwo_navigations() {
    const inputDay2aUrl = "https://adventofcode.com/2021/day/2/input";
    const inputDat2a = await (0, input_getter_1.inputGetter)(inputDay2aUrl);
    const shipNavigation = new _02_2_navigation_1.ShipNavigation(inputDat2a);
    shipNavigation.printFinalLocation();
    shipNavigation.printFinalLocationAngled();
}
async function dayThree_powerConsumption() {
    const inputDay3aUrl = "https://adventofcode.com/2021/day/3/input";
    const inputDay3a = await (0, input_getter_1.inputGetter)(inputDay3aUrl);
    const powerConsumption = new _03_1_power_consumption_1.PowerConsumption(inputDay3a);
    powerConsumption.printPowerConsumption();
    powerConsumption.printLifeSupportRating();
}
async function dayFour_Bingo() {
    const inputurl = "https://adventofcode.com/2021/day/4/input";
    const inputData = await (0, input_getter_1.inputGetter)(inputurl);
    const bingoWithOctopus = new _04_1_bingo_with_octopus_1.BingoWithOctopus(inputData);
    bingoWithOctopus.findFirstBingo()?.getTotalScore();
    bingoWithOctopus.findLastBingo()?.getTotalScore();
    // // Extracting the bingoNumbers (the onces that are called)
    // const bingoNumbersString: string = inputData.shift() || '';
    // const bingoNumbers: number[] = bingoNumbersString.split(',').map(myParseInt);
    // // Extracting the bingo cards (array of length 25)
    // let data: string = inputData.join();
    // data = data.replaceAll(',', ' ');
    // data = data.replaceAll(/ +/ig, ' ');
    // const dataArray: string[] = data.split(' ');
    //
    //
    // // remove starting whitespace
    // dataArray.shift();
    //
    // // construct bingo cards
    // const bingoNumberCount = 5 * 5;
    // let dataLength: number = dataArray.length;
    //
    // let cards: BingoCard[] = [];
    // for (let i = 0 ; i < dataLength; i += bingoNumberCount) {
    //     let cardData = dataArray.slice(i, i + bingoNumberCount);
    //     cards.push(new BingoCard(cardData));
    // }
    // let firstBingo: boolean = false;
    //
    //
    // // call numbers one by one and check for bingo's
    // for (let currentNumber of bingoNumbers) {
    //
    //     if (!firstBingo) {
    //         let firstCard: BingoCard | undefined = cards.find(card => card.checkBingo(currentNumber))
    //         if (firstCard) {
    //             console.log(`The first card to bingo is:`)
    //             // console.log(firstCard);
    //             firstCard.getTotalScore()
    //         }
    //     }
    //
    //     if (cards.length === 1) {
    //         let lastCard: BingoCard | undefined = cards.find(card => card.checkBingo(currentNumber))
    //         if (lastCard) {
    //             console.log(`The last card to bingo is:`)
    //             // console.log(lastCard);
    //             lastCard.getTotalScore()
    //         }
    //     }
    //
    //     cards = cards.filter( card => !card.checkBingo(currentNumber));
    //
    //     // cards.forEach(card => card.checkBingo(currentNumber));
    // }
}
run();
