import axios from "axios";

async function inputGetter(inputUrl: string): Promise<string[]> {

    const responseData  = await axios.get(inputUrl, {headers: {
            cookie: `_ga=${process.env.GA}; _gid=${process.env.GOOGLE_ID}; session=${process.env.SESSION}`
        }});

    const dataWithoutEmpty = responseData.data.split('\n');
    dataWithoutEmpty.pop();
    return dataWithoutEmpty;
}

function splitString(input: string, seperator: string = ',') {
    return input.split(seperator);
}

function mapToInt(input: string[]): number[] {
    return input.map(i => parseInt(i, 10))
}

async function numberInputGetter(inputUrl: string) {
    let dataStringed: string[] = await inputGetter(inputUrl);
    dataStringed = splitString(dataStringed[0]);
    return mapToInt(dataStringed);
}

export {inputGetter, mapToInt, splitString, numberInputGetter};
