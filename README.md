# Canine JS
Canine JS is a Javascript helper library with functions to make programming in js easy.

## Getting Started

Install using npm
```
npm i caninejs
```

## Available Methods.
- getType
- compare
- compareObjects
- compareMaps
- compareArrays

### getType
getType accepts an element as input and returns the type of the element as output.

```
import { getType } from 'caninejs';

var x = { x: 1 };
var y = ['1', { x: 1 }, [], 'apple'];
var z = 'caninejs';

getType(x); // returns "object"
getType(y); // returns "array"
getType(z); // returns "string"

```

### compare
compare accepts two elements as input and returns true if they are equal else it will return false.

```
import { compare } from 'caninejs';

var x = [1, 'test', 'a', {}];
var y = { b: 2, a: 1, c: { b: 1, z: ['test2']} };
var z = { a: 1, b: 2, c: { b: 1, z: ['test2']} };

compareObjects(x, y); // returns false
compareObjects(y, z); // returns true
compareObjects(x, z); // returns false
```

### compareObjects
compareObjects accepts two Objects as input and returns true if they are equal else it will return false.
It will also return false if any of the input is not an Object.

```
import { compareObjects } from 'caninejs';

var x = { a: 1, b: 2, c: { b: 1, z: ['test']} };
var y = { b: 2, a: 1, c: { b: 1, z: ['test2']} };
var z = { a: 1, b: 2, c: { b: 1, z: ['test2']} };

compareObjects(x, y); // returns false
compareObjects(y, z); // returns true
compareObjects(x, z); // returns false
```

### compareMaps
compareMaps accepts two Maps as input and returns true if they are equal else it will return false.
It will also return false if any of the input is not a Map.

```
import { compareMaps } from 'caninejs';

var x = new Map();
var y = new Map([['a', 'test']]);
var z = new Map([['a', 'test']]);

compareMaps(x, y); // returns false
compareMaps(y, z); // returns true
compareMaps(x, z); // returns false
```

### compareArrays
compareArrays accept two Arrays as input and returns true if they are equal else it will return false.
It will also return false if any of the input is not an Array.

```
import { compareArrays } from 'caninejs';

var x = [1, 'a', 'test', {}];
var y = [1, 'test', 'a', {}];
var z = [1, 'test', 'a', {}];

compareArrays(x, y); // returns false;
compareArrays(y, z); // returns true;
compareArrays(x, z); // returns false;
```

## Contributions

Created by Sree Krishna Raja [Github](https://github.com/sreekrishnaraja) [Twitter](https://twitter.com/sreekrishnaraja)

## License
MIT
