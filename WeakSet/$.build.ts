import $ from "💰/$.ts";
import "💰/$/build.ts";

function value<T extends NonNullable<unknown>>(
  generate: () => Iterable<T>,
): WeakSet<T> {
  return new WeakSet(generate());
}

declare global {
  interface WeakSetConstructor {
    [$.build]: typeof value;
  }
}

Object.defineProperty(WeakSet, $.build, { value });
