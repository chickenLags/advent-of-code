
import {config} from 'dotenv';
config();

import {mapToInt, inputGetter} from "./helpers/input-getter";
import {DepthIncrementCounter} from "./01-1-sonar-depth-increments";
import {ShipNavigation} from "./02-2-navigation";
import {PowerConsumption} from "./03-1-power-consumption";
import {myParseInt} from "./helpers/my-parse-int";
import {BingoCard} from "./Bingo/bingo-card";
import {BingoWithOctopus} from "./04-1-bingo-with-octopus";



const run = async () => {
    // await DayOne_depthCalculations();
    // await  DayTwo_navigations;
    // await dayThree_powerConsumption();
    await dayFour_Bingo();

}

async function DayOne_depthCalculations() {
    const inputDay1aUrl = "https://adventofcode.com/2021/day/1/input";

    const inputDay1a: string[] = await inputGetter(inputDay1aUrl);
    const inputDay1aNumbers: number[] = mapToInt(inputDay1a);

    const depthIncrementCounter: DepthIncrementCounter = new DepthIncrementCounter(inputDay1aNumbers);
    depthIncrementCounter.printCountIncrementSingular();
    depthIncrementCounter.printCountIncrementsWindow();
}

async function DayTwo_navigations() {
    const inputDay2aUrl = "https://adventofcode.com/2021/day/2/input";
    const inputDat2a: string[] = await inputGetter(inputDay2aUrl);

    const shipNavigation: ShipNavigation = new ShipNavigation(inputDat2a);
    shipNavigation.printFinalLocation();
    shipNavigation.printFinalLocationAngled();

}

async function dayThree_powerConsumption() {
    const inputDay3aUrl = "https://adventofcode.com/2021/day/3/input";
    const inputDay3a: string[] = await inputGetter(inputDay3aUrl);

    const powerConsumption: PowerConsumption = new PowerConsumption(inputDay3a);
    powerConsumption.printPowerConsumption();
    powerConsumption.printLifeSupportRating();
}

async function dayFour_Bingo() {
    const inputurl = "https://adventofcode.com/2021/day/4/input";
    const inputData: string[] = await inputGetter(inputurl);

    const bingoWithOctopus: BingoWithOctopus = new BingoWithOctopus(inputData);
    bingoWithOctopus.getFirstBingo()?.getTotalScore();
    bingoWithOctopus.getLastBingo()?.getTotalScore();
}




run();
