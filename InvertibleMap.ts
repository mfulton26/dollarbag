const maps = new WeakMap<
  InvertibleMap<unknown, unknown>,
  Map<unknown, unknown>
>();
const inverseMaps = new WeakMap<
  InvertibleMap<unknown, unknown>,
  Map<unknown, unknown>
>();
const inverses = new WeakMap<
  InvertibleMap<unknown, unknown>,
  InvertibleMap<unknown, unknown>
>();

const inverseKey = Symbol();

function set<K, V>(map: Map<K, V>, inverseMap: Map<V, K>, key: K, value: V) {
  if (map.has(key) && map.get(key) !== value) inverseMap.delete(value);
  if (inverseMap.has(value) && inverseMap.get(value) !== key) map.delete(key);
  map.set(key, value);
  inverseMap.set(value, key);
}

export default class InvertibleMap<K, V> {
  constructor(entries?: readonly (readonly [K, V])[] | null) {
    if (entries?.[0] as unknown === inverseKey) {
      const [, map, inverseMap, inverse] = entries as unknown as [
        typeof inverseKey,
        Map<K, V>,
        Map<V, K>,
        InvertibleMap<V, K>,
      ];
      maps.set(this, map);
      inverseMaps.set(this, inverseMap);
      inverses.set(this, inverse);
      return this;
    }
    const map = new Map<K, V>();
    const inverseMap = new Map<V, K>();
    maps.set(this, map);
    inverseMaps.set(this, inverseMap);
    const inverse = new InvertibleMap<V, K>(
      [inverseKey, inverseMap, map, this] as unknown as [],
    );
    inverses.set(this, inverse);
    for (const [key, value] of entries ?? []) set(map, inverseMap, key, value);
  }

  get [Symbol.toStringTag](): string {
    return "InvertibleMap";
  }

  get size(): number {
    return maps.get(this)!.size;
  }

  inverse(): InvertibleMap<V, K> {
    return inverses.get(this) as InvertibleMap<V, K>;
  }

  clear(): void {
    maps.get(this)!.clear();
    inverseMaps.get(this)!.clear();
  }

  delete(key: K): boolean {
    const map = maps.get(this) as Map<K, V>;
    if (!map.has(key)) return false;
    const inverseMap = inverseMaps.get(this) as Map<V, K>;
    const value = map.get(key) as V;
    map.delete(key);
    inverseMap.delete(value);
    return true;
  }

  forEach(
    callbackfn: (value: V, key: K, invertibleMap: InvertibleMap<K, V>) => void,
    thisArg?: unknown,
  ): void {
    for (const [key, value] of this) callbackfn.call(thisArg, value, key, this);
  }

  get(key: K): V | undefined {
    const map = maps.get(this) as Map<K, V>;
    return map.get(key);
  }

  has(key: K): boolean {
    const map = maps.get(this) as Map<K, V>;
    return map.has(key);
  }

  set(key: K, value: V): this {
    const map = maps.get(this) as Map<K, V>;
    const inverseMap = inverseMaps.get(this) as Map<V, K>;
    set(map, inverseMap, key, value);
    return this;
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    const map = maps.get(this) as Map<K, V>;
    return map[Symbol.iterator]();
  }

  entries(): IterableIterator<[K, V]> {
    throw new Error("not yet implemented");
  }
  static {
    InvertibleMap.prototype.entries = InvertibleMap.prototype[Symbol.iterator];
  }

  keys(): IterableIterator<K> {
    const map = maps.get(this) as Map<K, V>;
    return map.keys();
  }

  values(): IterableIterator<V> {
    const map = maps.get(this) as Map<K, V>;
    return map.values();
  }
}
