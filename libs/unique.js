import compare from "./compare";
import getType from "./getType";

/**
 * Returns an array with unique elements. 
 * It Filter all duplicate values.
 * It supports array of Strings, Numbers, Objects and Maps.
 * 
 * @param {Array<String | Number | Object | Map>} array - The array to extract unique elements from.
 * @param {*} key - Optional. The key to determine uniqueness if array contains objects.
 * @param {boolean} [isSorted=false] - Optional. Indicates whether the array is sorted.
 * @returns {Array<String | Number | Object | Map>} - An array containing unique elements.
 */

function unique(array, key, isSorted = false) {
    const type = getType(array[0]);
    const result = [];

    const uniqueFunctions = {
        object: uniqueObjects,
        map: uniqueMaps
    };
    
    const uniqueFunction = uniqueFunctions[type];

    if (uniqueFunction) {
        return uniqueFunction(array, key, isSorted);
    }

    if (!isSorted) {
        array.sort();
    }

    result.push(array[0]);

    for (let i = 1; i < array.length; i++) {
        const currentItem = array[i];
        if (!compare(currentItem, array[i - 1])) {
            result.push(currentItem);
        }
    }

    return result;
}

export default unique;
