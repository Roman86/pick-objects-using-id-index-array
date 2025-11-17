![](https://badgen.net/bundlephobia/minzip/pick-objects-using-id-index-array)
![](https://badgen.net/bundlephobia/dependency-count/pick-objects-using-id-index-array)
![](https://badgen.net/bundlephobia/tree-shaking/pick-objects-using-id-index-array)

### What

A tiny, type-safe utility to pick and order an array of objects based on a list of IDs.

### How

```shell
npm i pick-objects-using-id-index-array
```

```typescript
import { pickObjects } from 'pick-objects-using-id-index-array';

interface Digit {
  id: number;
  title: string;
}

const digits: Digit[] = [
  { id: 0, title: 'Zero' },
  { id: 1, title: 'One' },
  { id: 2, title: 'Two' },
  { id: 3, title: 'Three' },
  { id: 4, title: 'Four' },
  { id: 5, title: 'Five' },
];

const sorted = pickObjects([3, 2, 1], digits, 'id');
console.log(sorted);
// output: [ { id: 3, title: 'Three' }, { id: 2, title: 'Two' }, { id: 1, title: 'One' } ]
```

### Nested or computed/complex ids
For advanced cases `idField` param can be a function that receives an object and returns the value to be used as an ID:

```typescript
pickObjects([3, 2, 1], digits, (d) => d.id);
```

### Missing items

Items from the `ids` array that are not found in the `objects` array will be ignored.

```typescript
const sorted = pickObjects([3, 99, 1], digits, 'id');
console.log(sorted);
// output: [ { id: 3, title: 'Three' }, { id: 1, title: 'One' } ]
```

### Duplicate items

If the `objects` array contains multiple items with the same ID, the last one in the array will be used.

```typescript
const digitsWithDuplicates: Digit[] = [
  { id: 1, title: 'One' },
  { id: 2, title: 'Two' },
  { id: 1, title: 'Uno' },
];

const sorted = pickObjects([1, 2], digitsWithDuplicates, 'id');
console.log(sorted);
// output: [ { id: 1, title: 'Uno' }, { id: 2, title: 'Two' } ]
```

### Performance

This utility is designed for performance. It creates a `Map` from the `objects` array for quick lookups, resulting in a time complexity of O(N+M), where N is the number of objects and M is the number of IDs.

### Type safety 😌
The utility is type-safe:
- `idField` must be a valid key of the objects in the `objects` array if it's a string.
- The items in the `ids` array must match the type of the ID field in the objects.
