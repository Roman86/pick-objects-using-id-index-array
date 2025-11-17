import { pickObjects } from './index';

test('pickObjects', () => {
  expect(
    pickObjects([1, 2, 3], [{ id: 1 }, { id: 2 }, { id: 3 }], 'id'),
  ).toStrictEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);

  expect(
    pickObjects([3, 2, 1], [{ id: 1 }, { id: 2 }, { id: 3 }], 'id'),
  ).toStrictEqual([{ id: 3 }, { id: 2 }, { id: 1 }]);

  expect(
    pickObjects([1], [{ id: 1 }, { id: 2 }, { id: 3 }], 'id'),
  ).toStrictEqual([{ id: 1 }]);

  expect(
    pickObjects([5, 2], [{ id: 1 }, { id: 2 }, { id: 3 }], 'id'),
  ).toStrictEqual([{ id: 2 }]);

  expect(
    pickObjects([5], [{ id: 1 }, { id: 2 }, { id: 3 }], 'id'),
  ).toStrictEqual([]);
});
