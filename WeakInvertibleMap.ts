const weakMaps = new WeakMap<
  WeakInvertibleMap<object, object>,
  WeakMap<object, object>
>();
const inverseWeakMaps = new WeakMap<
  WeakInvertibleMap<object, object>,
  WeakMap<object, object>
>();
const inverses = new WeakMap<
  WeakInvertibleMap<object, object>,
  WeakInvertibleMap<object, object>
>();

const inverseKey = Symbol();

function set<K extends object, V extends object>(
  weakMap: WeakMap<K, V>,
  inverseMap: WeakMap<V, K>,
  key: K,
  value: V,
) {
  if (weakMap.has(key) && weakMap.get(key) !== value) inverseMap.delete(value);
  if (inverseMap.has(value) && inverseMap.get(value) !== key) {
    weakMap.delete(key);
  }
  weakMap.set(key, value);
  inverseMap.set(value, key);
}

export default class WeakInvertibleMap<K extends object, V extends object> {
  constructor(entries?: readonly (readonly [K, V])[] | null) {
    if (entries?.[0] as unknown === inverseKey) {
      const [, weakMap, inverseWeakMap, inverse] = entries as unknown as [
        typeof inverseKey,
        WeakMap<K, V>,
        WeakMap<V, K>,
        WeakInvertibleMap<V, K>,
      ];
      weakMaps.set(this, weakMap);
      inverseWeakMaps.set(this, inverseWeakMap);
      inverses.set(this, inverse);
      return this;
    }
    const weakMap = new WeakMap<K, V>();
    const inverseWeakMap = new WeakMap<V, K>();
    weakMaps.set(this, weakMap);
    inverseWeakMaps.set(this, inverseWeakMap);
    const inverse = new WeakInvertibleMap<V, K>(
      [inverseKey, inverseWeakMap, weakMap, this] as unknown as [],
    );
    inverses.set(this, inverse);
    for (const [key, value] of entries ?? []) {
      set(weakMap, inverseWeakMap, key, value);
    }
  }

  get [Symbol.toStringTag](): string {
    return "WeakInvertibleMap";
  }

  inverse(): WeakInvertibleMap<V, K> {
    return inverses.get(this) as WeakInvertibleMap<V, K>;
  }

  delete(key: K): boolean {
    const weakMap = weakMaps.get(this) as WeakMap<K, V>;
    if (!weakMap.has(key)) return false;
    const inverseMap = inverseWeakMaps.get(this) as WeakMap<V, K>;
    const value = weakMap.get(key) as V;
    weakMap.delete(key);
    inverseMap.delete(value);
    return true;
  }

  get(key: K): V | undefined {
    const weakMap = weakMaps.get(this) as WeakMap<K, V>;
    return weakMap.get(key);
  }

  has(key: K): boolean {
    const weakMap = weakMaps.get(this) as WeakMap<K, V>;
    return weakMap.has(key);
  }

  set(key: K, value: V): this {
    const weakMap = weakMaps.get(this) as WeakMap<K, V>;
    const inverseMap = inverseWeakMaps.get(this) as WeakMap<V, K>;
    set(weakMap, inverseMap, key, value);
    return this;
  }
}
