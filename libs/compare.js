import compareDef from "../utils/compareDef";
import compareTypes from "./compareTypes";
import compareArrays from "./compareArrays";
import compareObjects from "./compareObjects";
import compareMaps from "./compareMaps";

/**
 * Compares two elements and all of their children for equality. (Deep comparision)
 * 
 * @param {*} element1 - The first element to compare.
 * @param {*} element2 - The second element to compare.
 * @returns {boolean} - True if both elements and all of their children are equal, otherwise false.
 */

function compare(element1, element2) {
    if (!compareTypes(element1, element2)) {
        return false;
    }

    const comparisonFunctions = {
        map: compareMaps,
        object: compareObjects,
        array: compareArrays,
    };

    const type = getType(element1);
    const comparisonFunction = comparisonFunctions[type] || compareDef(element1, element2);
    return comparisonFunction(element1, element2);
}

export default compare;