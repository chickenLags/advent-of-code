

class LanternFish {
    birthCountdown: number;
    static TIME_TILL_FIRST_BIRTH = 8;
    static TIME_TILL_NTH_BIRTH = 6;

    constructor(birthCountdown: number) {
        this.birthCountdown = birthCountdown;
    }

    getNextGeneration() {
        if(this.birthCountdown === 0) {
            this.birthCountdown = LanternFish.TIME_TILL_NTH_BIRTH;
            return [this, new LanternFish(LanternFish.TIME_TILL_FIRST_BIRTH)];
        }

        this.birthCountdown--;
        return [this];
    }
}

export {LanternFish};
