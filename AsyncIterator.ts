import AsyncGeneratorFunction from "💰/AsyncGeneratorFunction.ts";

import $ from "💰/$.ts";
import "💰/Iterator/prototype/$.toAsync.ts";

export const prototype = Object.getPrototypeOf(
  AsyncGeneratorFunction.prototype.prototype,
);

export function from<T>(
  { next }: { next(): Promise<IteratorResult<T>> },
): AsyncIterableIterator<T> {
  return Object.create(prototype, { next: { value: next } });
}

export function of<T>(...items: T[]): AsyncIterableIterator<T> {
  return items[Symbol.iterator]()[$.toAsync]();
}
