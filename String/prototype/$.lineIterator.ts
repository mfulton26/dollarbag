import $ from "💰/$.ts";
import "💰/$/lineIterator.ts";

import * as Iterator from "💰/Iterator.ts";

function value(this: string): IterableIterator<string> {
  const { length } = this;
  let start = 0;
  const next = (): IteratorResult<string> => {
    if (start >= length) return { value: undefined, done: true };
    for (let end = start; end < length; end++) {
      switch (this[end]) {
        case "\n": {
          const value = this.slice(start, end);
          start = end + 1;
          return { value, done: false };
        }
        case "\r": {
          const value = this.slice(start, end);
          if (this[end + 1] === "\n") end++;
          start = end + 1;
          return { value, done: false };
        }
      }
    }
    const value = this.slice(start, length);
    start = length;
    return { value, done: false };
  };
  return Iterator.from({ next });
}

declare global {
  interface String {
    [$.lineIterator]: typeof value;
  }
}

Object.defineProperty(String.prototype, $.lineIterator, { value });
