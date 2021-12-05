"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_getter_1 = require("./helpers/input-getter");
const _01_1_sonar_depth_increments_1 = require("./01-1-sonar-depth-increments");
const _02_2_navigation_1 = require("./02-2-navigation");
const _03_1_power_consumption_1 = require("./03-1-power-consumption");
const run = async () => {
    // await DayOne_depthCalculations()
    // await  DayTwo_navigations
    let inputDay3aUrl = "https://adventofcode.com/2021/day/3/input";
    let inputDay3a = await (0, input_getter_1.inputGetter)(inputDay3aUrl);
    let powerConsumption = new _03_1_power_consumption_1.PowerConsumption(inputDay3a);
    powerConsumption.printPowerConsumption();
    powerConsumption.printLifeSupportRating();
};
async function DayOne_depthCalculations() {
    let inputDay1aUrl = "https://adventofcode.com/2021/day/1/input";
    let inputDay1a = await (0, input_getter_1.inputGetter)(inputDay1aUrl);
    let inputDay1aNumbers = (0, input_getter_1.mapToInt)(inputDay1a);
    let depthIncrementCounter = new _01_1_sonar_depth_increments_1.DepthIncrementCounter(inputDay1aNumbers);
    depthIncrementCounter.printCountIncrementSingular();
    depthIncrementCounter.printCountIncrementsWindow();
}
async function DayTwo_navigations() {
    let inputDay2aUrl = "https://adventofcode.com/2021/day/2/input";
    let inputDat2a = await (0, input_getter_1.inputGetter)(inputDay2aUrl);
    let shipNavigation = new _02_2_navigation_1.ShipNavigation(inputDat2a);
    shipNavigation.printFinalLocation();
    shipNavigation.printFinalLocationAngled();
}
run();
