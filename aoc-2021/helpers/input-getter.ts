import axios from "axios";

async function inputGetter(inputUrl: string): Promise<Array<string>> {

    let responseData  = await axios.get(inputUrl, {headers: {
            cookie: "_ga=GA1.2.2006658762.1638539663; _gid=GA1.2.690046506.1638539663; session=53616c7465645f5fc841e26bf300e86736b1e0921c72a30bf3d5df0bb910f41b0316812690256fc0281b2d527aed63df"
        }});

    let dataWithoutEmpty = responseData.data.split('\n');
    dataWithoutEmpty.pop();
    return dataWithoutEmpty;
}

function mapToInt(input: string[]): number[] {
    return input.map(i => parseInt(i))
}


export {inputGetter, mapToInt};
