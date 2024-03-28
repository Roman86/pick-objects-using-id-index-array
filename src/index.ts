// will return matching objects in given order. Notice, that ids and objects may not match
export function pickObjects<T extends Record<string, any>, ID>(
  ids: ID[],
  objects: T[],
  idField: keyof T | ((item: T) => ID),
): T[] {
  const idMap = new Map<ID, T>(
    objects.map((o) => [
      typeof idField === 'function' ? idField(o) : o[idField],
      o,
    ]),
  );

  return ids.map((id) => idMap.get(id)).filter((o) => typeof o !== 'undefined') as T[];
}
