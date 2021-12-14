import {NavigationSyntax} from "./navigation-syntax";


class NavigationSyntaxRepository {
    raw: string[];
    syntaxes: NavigationSyntax[];

    constructor(input: string[]) {
        this.raw = input;
        this.syntaxes = this.makeSyntaxes();
    }

    private makeSyntaxes() {
        return this.raw.map(line => new NavigationSyntax(line));
    }

    getTotalErrorScore() {
        let errorScores: number[] = this.getErrorScores();
        return errorScores.reduce((a, b) => a + b);
    }

    getCompletionScore(): number {
        let validSyntaxes: NavigationSyntax[] = this.getValidSyntaxes();
        let completionScores: number[] = this.getCompletionScores(validSyntaxes)

        if (completionScores.length % 2 !== 1) {
            throw new Error('Error: An even number of completionScores was found!')
        }

        let middleIndex = Math.floor(completionScores.length / 2);

        return completionScores.sort((a,b) => a < b ? -1 : 1)[middleIndex];
    }

    private getValidSyntaxes() {
        return this.syntaxes.filter(syntax => !syntax.isCorrupt());
    }

    private getErrorScores() {
        return this.syntaxes.map(syntax => syntax.getErrorScore());
    }

    private getCompletionScores(validSyntaxes: NavigationSyntax[]) {
        return validSyntaxes.map(syntax => syntax.getCompletionScore());
    }
}

export {NavigationSyntaxRepository};
