"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationSyntax = void 0;
class NavigationSyntax {
    constructor(input) {
        this.pairs = {
            '(': ')',
            '[': ']',
            '{': '}',
            '<': '>'
        };
        this.errorValues = {
            ')': 3,
            ']': 57,
            '}': 1197,
            '>': 25137,
        };
        this.completionValues = {
            ')': 1,
            ']': 2,
            '}': 3,
            '>': 4
        };
        this.stack = [];
        this.raw = input;
    }
    isCorrupt() {
        return this.getErrorScore() !== 0;
    }
    getCompletionScore() {
        // stack should be filled already when checking isComplete
        // however to prevent temporal coherence the getErrors is ran again
        // to repopulate the stack if it was not populated yet.
        if (this.stack.length === 0) {
            this.getErrors();
        }
        let completionStack = [];
        for (let character of this.stack.map(a => a).reverse()) {
            // @ts-ignore
            completionStack.push(this.pairs[character]);
        }
        return this.calculateCompletionScore(completionStack);
    }
    calculateCompletionScore(completionStack) {
        let score = 0;
        while (completionStack.length > 0) {
            score *= 5;
            let character = completionStack.shift();
            // @ts-ignore
            score += this.completionValues[character];
        }
        return score;
    }
    getErrorScore() {
        let errors = this.getErrors();
        // @ts-ignore
        let scores = errors.map(error => this.errorValues[error]);
        if (scores.length === 0) {
            return 0;
        }
        return scores.reduce((a, b) => a + b);
    }
    getErrors() {
        this.stack = [];
        let errors = [];
        for (let character of this.raw) {
            if (this.isOpener(character)) {
                this.stack.push(character);
            }
            if (this.isCloser(character)) {
                let lastOpener = this.stack.pop();
                if (lastOpener === undefined) {
                    throw new Error("Tried to close nothing!");
                }
                // @ts-ignore
                if (this.pairs[lastOpener] !== character) {
                    errors.push(character);
                }
            }
        }
        return errors;
    }
    isOpener(character) {
        return this.getOpeners().includes(character);
    }
    isCloser(character) {
        return this.getClosers().includes(character);
    }
    getOpeners() {
        return Object.keys(this.pairs);
    }
    getClosers() {
        return Object.values(this.pairs);
    }
}
exports.NavigationSyntax = NavigationSyntax;
