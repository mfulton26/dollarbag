import $ from "💰/$.ts";
import "💰/$/reverseIterator.ts";
import "💰/Object/$.defineDataProperty.ts";

import ArrayLikeReverseIterator from "💰/.generics/ArrayLike/reverseIterator.ts";

declare global {
  interface Array<T> {
    [$.reverseIterator](): IterableIterator<T>;
  }

  interface ReadonlyArray<T> {
    [$.reverseIterator](): IterableIterator<T>;
  }
}

Object[$.defineDataProperty](
  Array.prototype,
  $.reverseIterator,
  ArrayLikeReverseIterator,
);
