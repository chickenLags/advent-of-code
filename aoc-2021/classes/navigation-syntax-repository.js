"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationSyntaxRepository = void 0;
const navigation_syntax_1 = require("./navigation-syntax");
class NavigationSyntaxRepository {
    constructor(input) {
        this.raw = input;
        this.syntaxes = this.makeSyntaxes();
    }
    makeSyntaxes() {
        return this.raw.map(line => new navigation_syntax_1.NavigationSyntax(line));
    }
    getTotalErrorScore() {
        let errorScores = this.getErrorScores();
        return errorScores.reduce((a, b) => a + b);
    }
    getCompletionScore() {
        let validSyntaxes = this.getValidSyntaxes();
        let completionScores = this.getCompletionScores(validSyntaxes);
        if (completionScores.length % 2 !== 1) {
            throw new Error('Error: An even number of completionScores was found!');
        }
        let middleIndex = Math.floor(completionScores.length / 2);
        return completionScores.sort((a, b) => a < b ? -1 : 1)[middleIndex];
    }
    getValidSyntaxes() {
        return this.syntaxes.filter(syntax => !syntax.isCorrupt());
    }
    getErrorScores() {
        return this.syntaxes.map(syntax => syntax.getErrorScore());
    }
    getCompletionScores(validSyntaxes) {
        return validSyntaxes.map(syntax => syntax.getCompletionScore());
    }
}
exports.NavigationSyntaxRepository = NavigationSyntaxRepository;
