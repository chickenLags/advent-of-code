
class PowerConsumption {
    binaryData: string[] = [];
    binaryLength: number = 0;
    // epsilon: number = 0;
    // gamma: number = 0;

    constructor(data:string[]) {
        this.binaryData = data;
        this.binaryLength = data[0].length;
    }

    calculateGamma(): number {
        let gammaArray = [];
        for (let i = 0; i < this.binaryLength; i++) {
            gammaArray.push(this.getMostCommonAt(this.binaryData, i));
        }

        return parseInt(gammaArray.join(''), 2);
    }

    calculateEpsilon(): number {
        let epsilonArray = [];
        for (let i = 0; i < this.binaryLength; i++) {
            epsilonArray.push(this.getMostCommonAt(this.binaryData, i, true));
        }

        return parseInt(epsilonArray.join(''), 2);
    }

    getMostCommonAt(data: string[], index: number, least= false) {
        let occurences = 0;
        let dataLength = data.length;

        for (let i = 0; i < dataLength; i++) {
            let binary = data[i];
            occurences += parseInt(binary.charAt(index));
        }

        if (occurences == dataLength / 2) {
            return -1;
        }

        if (least){
            return (occurences > dataLength / 2) ? 0 : 1;
        }

        return (occurences > dataLength / 2) ? 1 : 0;
    }

    printPowerConsumption() {
        let gamma: number = this.calculateGamma();
        let epsilon: number = this.calculateEpsilon();

        console.log(`[Power consumption]: gamma: ${gamma}, epsilon: ${epsilon}, total: ${gamma*epsilon}`)

    }

    printLifeSupportRating() {
        let oxigenRating = this.getOxigenRating();
        let scrubberRating = this.getScrubberRating()

        console.log(`[Life support rating]: oxygen rating: ${oxigenRating}, scrubberRating" ${scrubberRating}, total: ${oxigenRating*scrubberRating}`);
    }

    getOxigenRating() {
        let data: string[] = this.binaryData;
        for (let i = 0; i < this.binaryLength; i++) {
            let mostCommon = this.getMostCommonAt(data, i);
            if (mostCommon == -1) {
                mostCommon = 1;
            }
            data = data.filter((binary: string) => parseInt(binary.charAt(i)) == mostCommon);
            // console.log(data, i, mostCommon);
        }
        return parseInt(data[0], 2);
    }

    getScrubberRating() {
        let data: string[] = this.binaryData;
        for (let i = 0; i < this.binaryLength; i++) {
            let mostCommon = this.getMostCommonAt(data, i, true);
            if (mostCommon == -1) {
                mostCommon = 0;
            }
            data = data.filter((binary: string) => parseInt(binary.charAt(i)) == mostCommon);
            // console.log(data, i, mostCommon);
            if (data.length == 1) {
                return parseInt(data[0], 2);
            }
        }
        return parseInt(data[0], 2);
    }
}

export {PowerConsumption}
