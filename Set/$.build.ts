import $ from "💰/$.ts";
import "💰/$/build.ts";

function value<T>(generate: () => Iterable<T>): Set<T> {
  return new Set(generate());
}

declare global {
  interface SetConstructor {
    [$.build]: typeof value;
  }
}

Object.defineProperty(Set, $.build, { value });
