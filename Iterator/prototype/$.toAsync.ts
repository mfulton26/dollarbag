import $ from "💰/$.ts";
import "💰/$/toAsync.ts";

import * as AsyncIterator from "💰/AsyncIterator.ts";
import * as Iterator from "💰/Iterator.ts";

function value<T>(this: Iterator<T>): AsyncIterableIterator<T> {
  return AsyncIterator.from({ next: () => Promise.resolve(this.next()) });
}

declare global {
  interface Iterator<T> {
    [$.toAsync]: typeof value;
  }
}

Object.defineProperty(Iterator.prototype, $.toAsync, { value });
