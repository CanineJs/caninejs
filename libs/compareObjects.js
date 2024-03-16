import compareDef from "../utils/compareDef";
import compareTypes from "./compareTypes";
import compareArrays from "./compareArrays";
import compareMaps from "./compareMaps";

/**
 * Compares two objects and all of their children for equality.
 *
 * @param {*} object1 - The first object to compare.
 * @param {*} object2 - The second object to compare.
 * @returns {boolean} - True if both objects and all of their children are equal, otherwise false.
 */

function compareObjects(object1, object2) {
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);

    if (!compareTypes(object1, object2) || object1Keys.length !== object2Keys.length) {
        return false;
    }

    const comparisonFunctions = {
        object: compareObjects,
        map: compareMaps,
        array: compareArrays,
    };

    for (let i = 0; i < object1Keys.length; i++) {
        const key = object1Keys[i];
        const comparisonFunction = comparisonFunctions[getType(object1[key])] || compareDef;
        if (!comparisonFunction(object1[key], object2[key])) {
            return false;
        }
    }    

    return true;
}

export default compareObjects;