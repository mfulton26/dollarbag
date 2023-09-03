import $ from "💰/$.ts";
import "💰/$/toAsync.ts";
import "💰/Object/$.defineDataProperty.ts";

import * as AsyncIterator from "💰/AsyncIterator.ts";
import * as Iterator from "💰/Iterator.ts";

declare global {
  interface Iterator<T> {
    [$.toAsync](): AsyncIterableIterator<T>;
  }
}

Object[$.defineDataProperty](
  Iterator.prototype,
  $.toAsync,
  function value<T>(this: Iterator<T>) {
    return AsyncIterator.from({ next: () => Promise.resolve(this.next()) });
  },
);
