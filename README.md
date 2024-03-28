### What

Utility to sort an array of objects by a property using the values array.

### How

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

const sorted = pickObjects([3,2,1], digits, 'id');
console.log(sorted);
// output: [ { id: 3, title: 'Three' }, { id: 2, title: 'Two' }, { id: 1, title: 'One' } ]
```

for nested or computed/complex ids - use a function as `idField` param - return the value that you use in your index array:

```typescript
pickObjects([3,2,1], digits, (d) => d.id);
```
