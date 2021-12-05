"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepthIncrementCounter = void 0;
var CHANGE;
(function (CHANGE) {
    CHANGE[CHANGE["NO_CHANGE"] = 0] = "NO_CHANGE";
    CHANGE[CHANGE["INCREASED"] = 1] = "INCREASED";
    CHANGE[CHANGE["DECREASED"] = 2] = "DECREASED";
})(CHANGE || (CHANGE = {}));
class DepthIncrementCounter {
    constructor(data) {
        this.windows = [];
        this.refined = [];
        this.raw = data;
    }
    determineChanges(input) {
        this.refined = [];
        for (let i = 0; i < input.length; i++) {
            if (i == 0) {
                this.refined.push(CHANGE.NO_CHANGE);
                continue;
            }
            if (input[i - 1] < input[i]) {
                this.refined.push(CHANGE.INCREASED);
                continue;
            }
            this.refined.push(CHANGE.DECREASED);
        }
    }
    determineChangesSingular() {
        this.determineChanges(this.raw);
    }
    determineWindows() {
        this.windows = [];
        for (let i = 0; i < this.raw.length - 2; i++) {
            this.windows.push(this.raw[i] + this.raw[i + 1] + this.raw[i + 2]);
        }
    }
    detemineChangesWindow() {
        this.refined = [];
        this.determineWindows();
        this.determineChanges(this.windows);
    }
    getIncrements() {
        return this.refined.filter(ref => ref === CHANGE.INCREASED);
    }
    countIncrements() {
        return this.getIncrements().length;
    }
    printCountIncrementSingular() {
        this.determineChangesSingular();
        console.log(`The depth singular incremented ${this.countIncrements()} times.`);
    }
    printCountIncrementsWindow() {
        this.detemineChangesWindow();
        console.log(`The depth windows incremented ${this.countIncrements()} times.`);
    }
}
exports.DepthIncrementCounter = DepthIncrementCounter;
