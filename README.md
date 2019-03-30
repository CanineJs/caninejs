# Canine JS
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
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

Syntax: getType(value);
value: It can be String, Number, Boolean, Object, Array, Map, Set.

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

Syntax: compare(valueOne, valueTwo);

valueOne: value to be compared.
valueTwo: value to be compared.
(Values can be Strings, Numbers, Boolean, Objects, Arrays, Maps & Sets)

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

Syntax: compareObjects(objectOne, objectTwo);

objectOne: Object to be compared.
objectTwo: Object to be compared.

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

Syntax: compareMaps(mapOne, mapTwo);

mapOne: Map to be compared.
mapTwo: Map to be compared.

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

Syntax: compareArrays(arrayOne, arrayTwo, shouldSort);

arrayOne: Array to be compared.
arrayTwo: Array to be compared.
shouldSort: Boolean value denoting weather the array should be sorted before comparision. If true the array will be sorted, if false it won't be sorted. By default shouldSort is false.

```
import { compareArrays } from 'caninejs';

var x = [1, 'a', 'test', {}];
var y = [1, 'test', 'a', {}];
var z = [1, 'test', 'a', {}];

compareArrays(x, y); // returns false;
compareArrays(y, z); // returns true;
compareArrays(x, z); // returns false;
```

compareArrays will also accept a third boolean input, which is false by default. If true, the arrays will be compared even if they are ordered differently (Result will be true even if the arrays have same values but in different order). If false or left empty, the result will be false for similar arrays with same values in different order.

```
import { compareArrays } from 'caninejs';

var x = [{ x: '10' }, 1, [1, 'x', 0], 'a'];
var y = [1, [1, 'x', 0], 'a', { x: '10'}];

compareArrays(x, y, true); // returns true;
compareArrays(x, y, false); // returns false;
compareArrays(x, y); // returns false;
```

## License
MIT

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/SreeKrishnaRaja"><img src="https://avatars2.githubusercontent.com/u/19948507?v=4" width="100px;" alt="Sree Krishna Raja"/><br /><sub><b>Sree Krishna Raja</b></sub></a><br /><a href="https://github.com/SreeKrishnaRaja/caninejs/commits?author=SreeKrishnaRaja" title="Code">💻</a></td></tr></table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
