import GeneratorFunction from "💰/GeneratorFunction.ts";

export const prototype = Object.getPrototypeOf(
  GeneratorFunction.prototype.prototype,
);

export function from<T>(
  { next }: { next(): IteratorResult<T> },
): IterableIterator<T> {
  return Object.create(prototype, { next: { value: next } });
}

export function of<T>(...items: T[]): IterableIterator<T> {
  const iterator = items[Symbol.iterator]();
  return from({ next: () => iterator.next() });
}
