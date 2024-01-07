import $ from "💰/$.ts";
import "💰/$/build.ts";

function value<K, V>(generate: () => Iterable<readonly [K, V]>): Map<K, V> {
  return new Map(generate());
}

declare global {
  interface MapConstructor {
    [$.build]: typeof value;
  }
}

Object.defineProperty(Map, $.build, { value });
