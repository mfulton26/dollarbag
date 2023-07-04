import $ from "💰/$.ts";
import "💰/$/build.ts";

function value<T>(generate: () => Iterable<T> | ArrayLike<T>): T[] {
  return Array.from(generate());
}

declare global {
  interface ArrayConstructor {
    [$.build]: typeof value;
  }
}

Object.defineProperty(Array, $.build, { value });
