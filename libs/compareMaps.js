import compareDef from "../utils/compareDef";
import compareTypes from "./compareTypes";
import compareObjects from "./compareObjects";
import compareArrays from "./compareArrays";

/**
 * Compares two Maps and all of their children for equality.
 *
 * @param {*} map1 - The first Map to compare.
 * @param {*} map2 - The second Map to compare.
 * @returns {boolean} - True if both Maps and all of their children are equal, otherwise false.
 */

function compareMaps(map1, map2) {
    if (!compareTypes(map1, map2) || map1.size !== map2.size) {
        return false;
    }

    const comparisonFunctions = {
        object: compareObjects,
        map: compareMaps,
        array: compareArrays,
    };    

    const map1Iterator = map1.entries();
    for (let pair = map1Iterator.next(); !pair.done; pair = map1Iterator.next()) {
        const key = pair.value[0];
        const value = pair.value[1];
        const comparisonFunction = comparisonFunctions[getType(value)] || compareDef;
        if (!comparisonFunction(value, map2.get(key))) {
            return false;
        }
    }


    return true;
}

export default compareMaps;
