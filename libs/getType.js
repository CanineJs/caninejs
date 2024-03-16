import { typeMap } from '../libs/typeMap';

/**
 * Determines the type of the given value.
 * 
 * @param {*} value - The value to determine the type of.
 * @returns {string} - A string indicating the type of the value. Possible return values are,
 *   - "number": If the value is of type number.
 *   - "string": If the value is of type string.
 *   - "boolean": If the value is of type boolean.
 *   - "undefined": If the value is of type undefined.
 *   - "symbol": If the value is of type symbol.
 *   - "function": If the value is a function.
 *   - "array": If the value is an array.
 *   - "map": If the value is a Map object.
 *   - "set": If the value is a Set object.
 *   - "weakmap": If the value is a WeakMap object.
 *   - "weakset": If the value is a WeakSet object.
 *   - "error": If the value is an Error object.
 *   - "date": If the value is a Date object.
 *   - "object": If the value is of type object (excluding null and any of the object types listed above).
 *   - "null": If the value is null.
 */

function getType(value) {
    const typeOfValue = typeof value;

    if (typeOfValue !== "object") {
        return typeOfValue;
    }

    if (value === null) {
        return "null";
    }

    const constructorName = value.constructor.name.toLowerCase();

    return typeMap[constructorName] || "object";
}

export default getType;