"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanternFish = void 0;
class LanternFish {
    constructor(birthCountdown) {
        this.birthCountdown = birthCountdown;
    }
    getNextGeneration() {
        if (this.birthCountdown === 0) {
            this.birthCountdown = LanternFish.TIME_TILL_NTH_BIRTH;
            return [this, new LanternFish(LanternFish.TIME_TILL_FIRST_BIRTH)];
        }
        this.birthCountdown--;
        return [this];
    }
}
exports.LanternFish = LanternFish;
LanternFish.TIME_TILL_FIRST_BIRTH = 8;
LanternFish.TIME_TILL_NTH_BIRTH = 6;
