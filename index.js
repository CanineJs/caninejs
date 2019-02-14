// Get type of element.
export function getType(value) {
  if (typeof value === "object") {
    if (value instanceof Array) {
      return "array";
    } else if (value instanceof Map) {
      return "map";
    } else if (value instanceof Set) {
      return "set";
    }
    return "object";
  }
  return typeof value;
}

// Compare two elements and all of its children, return true if both are same.
export function compare(element1, element2) {
  if (getType(element1) !== getType(element2)) {
    return false;
  }
  const type = getType(element1);
  switch (type) {
    case "map":
      return compareMaps(element1, element2);
    case "object":
      return compareObjects(element1, element2);
    case "array":
      return compareArrays(element1, element2);
    default:
      if (element1 !== element2) {
        return false;
      }
      break;
  }
}

// Compare two objects and all of it's children, returns true if both are same.
export function compareObjects(objectOne, objectTwo) {
  var objectOneKeys = Object.keys(objectOne);
  var objectTwoKeys = Object.keys(objectTwo);
  if (
    getType(objectOne) !== "object" ||
    getType(objectTwo) !== "object" ||
    objectOneKeys.length !== objectTwoKeys.length
  ) {
    return false;
  }
  for (var key of objectOneKeys) {
    const type = getType(objectOne[key]);
    switch (type) {
      case "object":
        return compareObjects(objectOne[key], objectTwo[key]);
      case "map":
        return compareMaps(objectOne[key], objectTwo[key]);
      case "array":
        return compareArrays(objectOne[key], objectTwo[key]);
      default:
        if (objectOne[key] !== objectTwo[key]) {
          return false;
        }
        break;
    }
  }
  return true;
}

// Compare two Maps and all of it's children, returns true if both are same.
export function compareMaps(mapOne, mapTwo) {
  if (
    getType(mapOne) !== "map" ||
    getType(mapTwo) !== "map" ||
    mapOne.size !== mapTwo.size
  ) {
    return false;
  }
  for (var [key, value] of mapOne) {
    const type = getType(value);
    switch (type) {
      case "map":
        return compareMaps(value, mapTwo.get(key));
      case "object":
        return compareObjects(value, mapTwo.get(key));
      case "array":
        return compareArrays(value, mapTwo.get(key));
      default:
        if (value !== mapTwo.get(key)) {
          return false;
        }
        break;
    }
  }
  return true;
}

// Compare two Arrays and all of it's children, returns true if both are same.
export function compareArrays(arrayOne, arrayTwo) {
  if (
    getType(arrayOne) !== "array" ||
    getType(arrayTwo) !== "array" ||
    arrayOne.length !== arrayTwo.length
  ) {
    return false;
  }
  for (var key in arrayOne) {
    var type = getType(arrayOne[key]);
    switch (type) {
      case "object":
        return compareObjects(arrayOne[key], arrayTwo[key]);
      case "map":
        return compareMaps(arrayOne[key], arrayTwo[key]);
      case "array":
        return compareArrays(arrayOne[key], arrayTwo[key]);
      default:
        if (arrayOne[key] !== arrayTwo[key]) {
          return false;
        }
        break;
    }
  }
  return true;
}
