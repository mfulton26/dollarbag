import $ from "💰/$.ts";
import "💰/$/reverseIterator.ts";
import "💰/Object/$.defineDataProperty.ts";

import TypedArray from "💰/TypedArray.ts";

import ArrayLikeReverseIterator from "💰/.generics/ArrayLike/reverseIterator.ts";

declare global {
  interface TypedArray<T> {
    [$.reverseIterator](): IterableIterator<T>;
  }
}

Object[$.defineDataProperty](
  TypedArray.prototype,
  $.reverseIterator,
  ArrayLikeReverseIterator,
);
