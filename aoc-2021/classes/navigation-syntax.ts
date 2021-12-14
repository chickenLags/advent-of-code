

class NavigationSyntax {
    raw: string;
    pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>'
    }

    errorValues = {
        ')': 3,
        ']': 57,
        '}': 1197,
        '>': 25137,
    }

    completionValues = {
        ')': 1,
        ']': 2,
        '}': 3,
        '>': 4
    }

    stack: string[] = [];

    constructor(input: string) {
        this.raw = input;
    }

    isCorrupt() {
        return this.getErrorScore() !== 0;
    }

    getCompletionScore() : number {
        // stack should be filled already when checking isComplete
        // however to prevent temporal coherence the getErrors is ran again
        // to repopulate the stack if it was not populated yet.
        if (this.stack.length === 0) {
            this.getErrors();
        }

        let completionStack: string[] = [];

        for( let character of this.stack.map(a => a).reverse()) {
            // @ts-ignore
            completionStack.push(this.pairs[character]);
        }

        return this.calculateCompletionScore(completionStack);
    }

    private calculateCompletionScore(completionStack: string[]): number {
        let score: number = 0
        while(completionStack.length > 0) {
            score *= 5;

            let character = completionStack.shift();
            // @ts-ignore
            score += this.completionValues[character];
        }

        return score;
    }

    getErrorScore() : number {
        let errors: string[] = this.getErrors();
        // @ts-ignore
        let scores: number[] = errors.map(error => this.errorValues[error]);

        if (scores.length === 0) {
            return 0;
        }

        return scores.reduce((a, b) => a + b);
    }

    private getErrors() {
        this.stack = [];
        let errors: string[] = [];

        for (let character of this.raw) {
            if (this.isOpener(character)) {
                this.stack.push(character);
            }

            if (this.isCloser(character)) {
                let lastOpener: string | undefined = this.stack.pop();

                if (lastOpener === undefined) {
                    throw new Error("Tried to close nothing!")
                }

                // @ts-ignore
                if (this.pairs[lastOpener] !== character) {
                    errors.push(character);
                }
            }
        }

        return errors;
    }



    private isOpener(character: string) {
        return this.getOpeners().includes(character);
    }

    private isCloser(character: string) {
        return this.getClosers().includes(character);
    }

    private getOpeners() {
        return Object.keys(this.pairs);
    }

    private getClosers() {
        return Object.values(this.pairs);
    }
}


export {NavigationSyntax};
