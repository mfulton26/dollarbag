import $ from "💰/$.ts";
import "💰/$/build.ts";

function value<K extends NonNullable<unknown>, V>(
  generate: () => Iterable<readonly [K, V]>,
): WeakMap<K, V> {
  return new WeakMap(generate());
}

declare global {
  interface WeakMapConstructor {
    [$.build]: typeof value;
  }
}

Object.defineProperty(WeakMap, $.build, { value });
