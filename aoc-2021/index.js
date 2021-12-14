"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const input_getter_1 = require("./helpers/input-getter");
const _01_1_sonar_depth_increments_1 = require("./01-1-sonar-depth-increments");
const _02_2_navigation_1 = require("./02-2-navigation");
const _03_1_power_consumption_1 = require("./03-1-power-consumption");
const _04_1_bingo_with_octopus_1 = require("./04-1-bingo-with-octopus");
const _05_hydrothermal_vents_1 = require("./05-hydrothermal-vents");
const color_1 = require("./enum/color");
const grid_to_image_1 = require("./helpers/grid-to-image");
const lanten_fish_1 = require("./classes/lanten-fish");
const _06_lanternfish_1 = require("./06-lanternfish");
const crabmarine_swarm_1 = require("./classes/crabmarine-swarm");
const signals_and_digits_1 = require("./classes/signals-and-digits");
const low_point_cavern_1 = require("./classes/low-point-cavern");
const navigation_syntax_repository_1 = require("./classes/navigation-syntax-repository");
(0, dotenv_1.config)();
const run = async () => {
    // await DayOne_depthCalculations();
    // await  DayTwo_navigations;
    // await dayThree_powerConsumption();
    // await dayFour_Bingo();
    // await dayFive_vents();
    // await daySix_lanternFish();
    // await daySeven_crabRescue();
    // await dayEight_chaoticDisplay();
    // await dayNine_lowPointsCavern();
    await dayTen_navigationError();
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
}
async function daySix_lanternFish() {
    const inputUrl = "https://adventofcode.com/2021/day/6/input";
    const lanternFishBirthCountdowns = await (0, input_getter_1.numberInputGetter)(inputUrl);
    let lanternFishes = lanternFishBirthCountdowns.map(birthCountdown => new lanten_fish_1.LanternFish(birthCountdown));
    let lanternFishExcersise = new _06_lanternfish_1.LanterFishExcersise(lanternFishBirthCountdowns);
    lanternFishExcersise.run(80, _06_lanternfish_1.FishMethod.OOP);
    lanternFishExcersise.printStatus();
    lanternFishExcersise.run(256, _06_lanternfish_1.FishMethod.DICT);
    lanternFishExcersise.printStatus();
}
async function daySeven_crabRescue() {
    const inputUrl = "https://adventofcode.com/2021/day/7/input";
    let crabPositions = await (0, input_getter_1.numberInputGetter)(inputUrl);
    const crabmarineSwarm = new crabmarine_swarm_1.CrabmarineSwarm(crabPositions);
    let mostFuelEfficientPosition = crabmarineSwarm.getMostFuelEfficientPosition();
    let requiredFuel = crabmarineSwarm.getRequiredFuelForPosition(mostFuelEfficientPosition);
    console.log(`Apparently the most efficient position is ${mostFuelEfficientPosition} with ${requiredFuel} fuel`);
}
async function dayEight_chaoticDisplay() {
    const inputUrl = "https://adventofcode.com/2021/day/8/input";
    let input = await (0, input_getter_1.inputGetter)(inputUrl);
    const signalAndDigits = new signals_and_digits_1.SignalsAndDigits(input);
    console.log(`The numbers 1, 7, 4, 8 occured ${signalAndDigits.getCountSpecificOccurences()} times in the second part.`);
    console.log(`The sum off all the outputs is ${signalAndDigits.getSumTotal()}`);
}
async function dayNine_lowPointsCavern() {
    const inputUrl = "https://adventofcode.com/2021/day/9/input";
    let input = await (0, input_getter_1.inputGetter)(inputUrl);
    const lowPointCavern = new low_point_cavern_1.LowPointCavern(input);
    console.log(`The sum of risk in the cavern is ${lowPointCavern.getSumRiskPoints()}`);
    console.log(`The product of the biggest basins in the cavern is ${lowPointCavern.getBiggestBasinProduct()}`);
}
async function dayTen_navigationError() {
    const inputUrl = "https://adventofcode.com/2021/day/10/input";
    let input = await (0, input_getter_1.inputGetter)(inputUrl);
    const navigationSyntaxRepository = new navigation_syntax_repository_1.NavigationSyntaxRepository(input);
    console.log(`Total error score is ${navigationSyntaxRepository.getTotalErrorScore()}`);
    console.log(`Total completion score is ${navigationSyntaxRepository.getCompletionScore()}`);
}
run();
