

function arrayDifference(first: any[], second: any[]) {
    let exluded = first.filter(a => !second.includes(a)) || 'z';
    let invertedExcluded = second.filter(a => !first.includes(a)) || 'z';
    return [...exluded, ...invertedExcluded]
}

function stringDifference(first: string, second: string) {
    return arrayDifference(first.split(''), second.split(''))
}

/*
* this difference only looks at what is different in the first array
* compared to the second. to find all differences look at arrayDifference().
* */
function exclusiveArrayDifference(first: any[], second: any[]) {
    return first.filter(a => !second.includes(a)) || 'z';
}

/*
* this difference only looks at what is different in the first string
* compared to the second. to find all differences look at arrayDifference().
* */
function exclusiveStringDifference(first: string, second: string) {
    return exclusiveArrayDifference(first.split(''), second.split(''))
}

export {arrayDifference, stringDifference, exclusiveArrayDifference, exclusiveStringDifference};
