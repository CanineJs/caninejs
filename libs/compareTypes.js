import getType from './getType';

/**
 * Compares the types of two values.
 * 
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} - True if the types of both values are the same, otherwise false.
 */

function compareTypes(value1, value2) {
    return getType(value1) === getType(value2);
}

export default compareTypes;