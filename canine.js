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

// Compare two objects and all of it's children, returns true if both are same.
export function compareObjects(objectOne, objectTwo) {
  var objectOneKeys = Object.keys(objectOne);
  var objectTwoKeys = Object.keys(objectTwo);
  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }
  for (var key of objectOneKeys) {
    const type = getType(objectOne[key]);
    switch (type) {
      case "object":
        return compareObjects(objectOne[key], objectTwo[key]);
      case "map":
        return compareMaps(objectOne[key], objectTwo[key]);
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
  if (mapOne.size !== mapTwo.size) {
    return false;
  }
  for (var [key, value] of mapOne) {
    const type = getType(value);
    switch (type) {
      case "map":
        return compareMaps(value, mapTwo.get(key));
      case "object":
        return compareObjects(value, mapTwo.get(key));
      default:
        if (value !== mapTwo.get(key)) {
          return false;
        }
        break;
    }
  }
  return true;
}
