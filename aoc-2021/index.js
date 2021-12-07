"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const input_getter_1 = require("./helpers/input-getter");
const _01_1_sonar_depth_increments_1 = require("./01-1-sonar-depth-increments");
const _02_2_navigation_1 = require("./02-2-navigation");
const _03_1_power_consumption_1 = require("./03-1-power-consumption");
const _04_1_bingo_with_octopus_1 = require("./04-1-bingo-with-octopus");
const _05_hydrothermal_vents_1 = require("./05-hydrothermal-vents");
const color_1 = require("./enum/color");
const grid_to_image_1 = require("./helpers/grid-to-image");
const run = async () => {
    // await DayOne_depthCalculations();
    // await  DayTwo_navigations;
    // await dayThree_powerConsumption();
    // await dayFour_Bingo();
    await dayFive_vents();
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
    bingoWithOctopus.getFirstBingo()?.getTotalScore();
    bingoWithOctopus.getLastBingo()?.getTotalScore();
}
async function dayFive_vents() {
    const inputUrl = "https://adventofcode.com/2021/day/5/input";
    const input = await (0, input_getter_1.inputGetter)(inputUrl);
    const vents = new _05_hydrothermal_vents_1.HydrothermalVents(input);
    vents.run();
    let rules = [];
    rules.push(new grid_to_image_1.ImageRule(vents.grid.isIntersection, color_1.Color.GREEN));
    rules.push(new grid_to_image_1.ImageRule(vents.grid.isSegment, color_1.Color.WHITE));
    (0, grid_to_image_1.gridToImage)('vents', vents.grid, rules);
    // 21908 - too high
    // 10368 - too low
    // 21350 - too low
}
run();
