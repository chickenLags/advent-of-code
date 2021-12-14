import {config} from 'dotenv';
import {inputGetter, mapToInt, numberInputGetter, splitString} from "./helpers/input-getter";
import {DepthIncrementCounter} from "./01-1-sonar-depth-increments";
import {ShipNavigation} from "./02-2-navigation";
import {PowerConsumption} from "./03-1-power-consumption";
import {BingoWithOctopus} from "./04-1-bingo-with-octopus";
import {HydrothermalVents} from "./05-hydrothermal-vents";
import {Color} from "./enum/color";
import {gridToImage, ImageRule} from "./helpers/grid-to-image";
import {LanternFish} from "./classes/lanten-fish";
import {FishMethod, LanterFishExcersise} from "./06-lanternfish";
import {CrabmarineSwarm} from "./classes/crabmarine-swarm";
import {SignalsAndDigits} from "./classes/signals-and-digits";
import {LowPointCavern} from "./classes/low-point-cavern";
import {NavigationSyntaxRepository} from "./classes/navigation-syntax-repository";
import {FlashingOctopuses} from "./classes/flashing-octopuses";

config();


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

async function dayFive_vents(){
    const inputUrl = "https://adventofcode.com/2021/day/5/input";
    const input: string[] = await inputGetter(inputUrl);

    const vents: HydrothermalVents = new HydrothermalVents(input);
    vents.run();

    let rules = [];
    rules.push(new ImageRule(vents.grid.isIntersection, Color.GREEN));
    rules.push(new ImageRule(vents.grid.isSegment, Color.WHITE));

    gridToImage('vents', vents.grid, rules);
}


async function daySix_lanternFish() {
    const inputUrl = "https://adventofcode.com/2021/day/6/input";
    const lanternFishBirthCountdowns: number[] = await numberInputGetter(inputUrl);

    let lanternFishes: LanternFish[] = lanternFishBirthCountdowns.map(birthCountdown => new LanternFish(birthCountdown));

    let lanternFishExcersise: LanterFishExcersise = new LanterFishExcersise(lanternFishBirthCountdowns);
    lanternFishExcersise.run(80, FishMethod.OOP);
    lanternFishExcersise.printStatus();

    lanternFishExcersise.run(256, FishMethod.DICT);
    lanternFishExcersise.printStatus();
}

async function daySeven_crabRescue() {
    const inputUrl = "https://adventofcode.com/2021/day/7/input";
    let crabPositions: number[] = await numberInputGetter(inputUrl);

    const crabmarineSwarm: CrabmarineSwarm = new CrabmarineSwarm(crabPositions);
    let mostFuelEfficientPosition = crabmarineSwarm.getMostFuelEfficientPosition();
    let requiredFuel = crabmarineSwarm.getRequiredFuelForPosition(mostFuelEfficientPosition);

    console.log(`Apparently the most efficient position is ${mostFuelEfficientPosition} with ${requiredFuel} fuel`);
}

async function dayEight_chaoticDisplay() {
    const inputUrl = "https://adventofcode.com/2021/day/8/input";
    let input: string[] = await inputGetter(inputUrl);

    const signalAndDigits: SignalsAndDigits = new SignalsAndDigits(input);

    console.log(`The numbers 1, 7, 4, 8 occured ${signalAndDigits.getCountSpecificOccurences()} times in the second part.`);
    console.log(`The sum off all the outputs is ${signalAndDigits.getSumTotal()}`);
}

async function dayNine_lowPointsCavern() {
    const inputUrl = "https://adventofcode.com/2021/day/9/input";
    let input: string[] = await inputGetter(inputUrl);


    const lowPointCavern: LowPointCavern = new LowPointCavern(input);
    console.log(`The sum of risk in the cavern is ${lowPointCavern.getSumRiskPoints()}`);
    console.log(`The product of the biggest basins in the cavern is ${lowPointCavern.getBiggestBasinProduct()}`);
}

async function dayTen_navigationError() {
    const inputUrl = "https://adventofcode.com/2021/day/10/input";
    let input: string[] = await inputGetter(inputUrl);

    const navigationSyntaxRepository: NavigationSyntaxRepository = new NavigationSyntaxRepository(input);
    console.log(`Total error score is ${navigationSyntaxRepository.getTotalErrorScore()}`);
    console.log(`Total completion score is ${navigationSyntaxRepository.getCompletionScore()}`);
}

async function dayEleven_flashingOctopuses() {
    let input: string[] = await inputGetter("https://adventofcode.com/2021/day/11/input");
    let testInput: string[] =[
        "5483143223",
        "2745854711",
        "5264556173",
        "6141336146",
        "6357385478",
        "4167524645",
        "2176841721",
        "6882881134",
        "4846848554",
        "5283751526"
    ]

    const flashingOctopuses: FlashingOctopuses = new FlashingOctopuses(testInput);

    console.log(`After 100 steps, there have been a total of ${flashingOctopuses.getFlashesAfterSteps(100)} flashes.`);
}

run();
