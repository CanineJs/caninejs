# Canine JS
Canine JS is a Javascript helper library with functions to make programming in js easy.

Note: CanineJs is under development. Will add more functions and will optimize existing ones, However the way the existing functions behave won't change. It's safe to use this in a production application.

## Available Methods.
- getType
- compareObjects
- compareMaps

### getType
getType accepts an element as input and returns the type of the element as output.

```
var x = { x: 1 };
var y = ['1', { x: 1 }, [], 'apple'];
var z = [];
var a = 'caninejs';
var b = 100;
var c = true;
var l = new Map([['a', 1]]);
var m = new Set();
var n = function() {};

getType(x); // returns "object"
getType(y); // returns "array"
getType(x); // returns "array"
getType(a); // returns "string"
getType(b); // returns "number"
getType(c); // returns "boolean"
getType(l); // returns "boolean"
getType(m); // returns "set"
getType(n); // returns "function"
```

### compareObjects
compareObjects accepts two Objects as input and returns true if they are equal else it will return false.

```
var a = { c: { b: 1, z: ['test']}, a: 1, b: 2 };
var x = { a: 1, b: 2, c: { b: 1, z: ['test']} };
var y = { a: 1, b: 2, c: { b: 1, z: ['test2']} };
var z = { a: 1, b: 2, c: { b: 1, z: ['test2']} };

compareObjects(x, a); // return true
compareObjects(x, y); // returns false
compareObjects(y, z); // returns true
compareObjects(x, z); // returns false
```

### compareMaps
compareMaps accepts two Maps as input and returns true if they are equal else it will return false.

```
var x = new Map();
var y = new Map([['a', 'test']]);
var z = new Map([['a', 'test']]);

compareMaps(x, y); // returns false
compareMaps(y, z); // returns true
compareMaps(x, z); // returns false
```
## Contributions

Created by Sree Krishna Raja [Github](https://github.com/sreekrishnaraja) [Twitter](https://twitter.com/sreekrishnaraja)

## License
MIT
