"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclusiveStringDifference = exports.exclusiveArrayDifference = exports.stringDifference = exports.arrayDifference = void 0;
function arrayDifference(first, second) {
    let exluded = first.filter(a => !second.includes(a)) || 'z';
    let invertedExcluded = second.filter(a => !first.includes(a)) || 'z';
    return [...exluded, ...invertedExcluded];
}
exports.arrayDifference = arrayDifference;
function stringDifference(first, second) {
    return arrayDifference(first.split(''), second.split(''));
}
exports.stringDifference = stringDifference;
function exclusiveArrayDifference(first, second) {
    return first.filter(a => !second.includes(a)) || 'z';
}
exports.exclusiveArrayDifference = exclusiveArrayDifference;
function exclusiveStringDifference(first, second) {
    return exclusiveArrayDifference(first.split(''), second.split(''));
}
exports.exclusiveStringDifference = exclusiveStringDifference;
