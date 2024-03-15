import compareDef from "../utils/compareDef";
import compareTypes from "./compareTypes";
import compareMaps from "./compareMaps";
import compareObjects from "./compareObjects";

/**
 * Compares two arrays and all of their children for equality.
 * 
 * @param {*} array1 - The first array to compare.
 * @param {*} array2 - The second array to compare.
 * @param {boolean} shouldSort - Optional. Indicates whether the arrays should be sorted before comparison. Defaults to true.
 * @returns {boolean} - True if both arrays and all of their children are equal, otherwise false.
 */

function compareArrays(array1, array2, shouldSort = true) {
    if (!compareTypes(array1, array2) || array1.length !== array2.length) {
        return false;
    }

    if (shouldSort) {
        array1.sort();
        array2.sort();
    }

    const comparisonFunctions = {
        object: compareObjects,
        map: compareMaps,
        array: compareArrays,
    };

    for (let i = 0; i < array1.length; i++) {
        const comparisonFunction = comparisonFunctions[getType(array1[i])] || compareDef;
        if (!comparisonFunction(array1[i], array2[i])) {
            return false;
        }
    }

    return true;
}

export default compareArrays;