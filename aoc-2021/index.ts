import {mapToInt, inputGetter} from "./helpers/input-getter";
import {DepthIncrementCounter} from "./01-1-sonar-depth-increments";
import {ShipNavigation} from "./02-2-navigation";
import {PowerConsumption} from "./03-1-power-consumption";



const run = async () => {
    // await DayOne_depthCalculations()
    // await  DayTwo_navigations

    let inputDay3aUrl = "https://adventofcode.com/2021/day/3/input";
    let inputDay3a: string[] = await inputGetter(inputDay3aUrl);

    let powerConsumption: PowerConsumption = new PowerConsumption(inputDay3a);
    powerConsumption.printPowerConsumption();
    powerConsumption.printLifeSupportRating();



}

async function DayOne_depthCalculations() {
    let inputDay1aUrl = "https://adventofcode.com/2021/day/1/input";

    let inputDay1a: string[] = await inputGetter(inputDay1aUrl);
    let inputDay1aNumbers: number[] = mapToInt(inputDay1a);

    let depthIncrementCounter: DepthIncrementCounter = new DepthIncrementCounter(inputDay1aNumbers);
    depthIncrementCounter.printCountIncrementSingular();
    depthIncrementCounter.printCountIncrementsWindow();
}

async function DayTwo_navigations() {
    let inputDay2aUrl = "https://adventofcode.com/2021/day/2/input";
    let inputDat2a: string[] = await inputGetter(inputDay2aUrl);

    let shipNavigation: ShipNavigation = new ShipNavigation(inputDat2a);
    shipNavigation.printFinalLocation();
    shipNavigation.printFinalLocationAngled();
}


run();
