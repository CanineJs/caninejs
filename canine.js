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
