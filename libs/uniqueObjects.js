import compare from "./compare";

/**
 * Returns an array with unique objects based on the given key.
 * Uniqueness is checked only for the key provided.
 * Filters the objects which has duplicate values for the given key.
 * 
 * @param {Array<object>} array - The array of objects to extract unique elements from.
 * @param {string} key - The property used for comparison to determine uniqueness.
 * @param {boolean} [isSorted=false] - Optional. Indicates whether the input array is already sorted.
 * @returns {Array<object>} - An array containing unique objects based on the given key.
 */

function uniqueObjects(array, key, isSorted = false) {
    if (!isSorted) {
        array.sort((x, y) => {
            if (x[key] > y[key]) {
                return 1;
            } else if (x[key] < y[key]) {
                return -1;
            }
            return 0;
        });
    }

    const result = [];
    const length = array.length;

    if (length === 0) {
        return result;
    }

    result.push(array[0]);

    for (let i = 1; i < length; i++) {
        const currentItem = array[i];
        const previousItem = array[i - 1];
        if (!compare(currentItem[key], previousItem[key])) {
            result.push(currentItem);
        }
    }

    return result;
}