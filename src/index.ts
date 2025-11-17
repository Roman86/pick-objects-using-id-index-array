// will return matching objects in given order. Notice, that ids and objects may not match
export function pickObjects<T extends Record<string, V>, ID, V>(
  ids: ID[],
  objects: T[],
  idField: keyof T | ((item: T) => ID),
): T[] {
  const idMap = new Map<ID, T>(
    objects.map((o) => [
      typeof idField === 'function' ? idField(o) : o[idField] as ID,
      o,
    ] as const),
  );

  return ids
    .map((id) => idMap.get(id))
    .filter((o) => typeof o !== 'undefined') as T[];
}
