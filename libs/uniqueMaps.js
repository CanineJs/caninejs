import compare from "./compare";

/**
 * Returns an array with unique Map objects based on th given key.
 * 
 * @param {Array<Map>} array - The array of Map objects to extract unique elements from.
 * @param {string} key - The key used for comparison to determine uniqueness.
 * @param {boolean} [isSorted=false] - Optional. Indicates whether the input array is already sorted.
 * @returns {Array<Map>} - An array containing unique Map objects based on the given key.
 */

function uniqueMaps(array, key, isSorted = false) {
    if (!isSorted) {
        array.sort((x, y) => {
            const keyX = x.get(key);
            const keyY = y.get(key);
            if (keyX > keyY) {
                return 1;
            } else if (keyX < keyY) {
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
        if (!compare(currentItem.get(key), previousItem.get(key))) {
            result.push(currentItem);
        }
    }

    return result;
}

export default uniqueMaps;