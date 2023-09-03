import $ from "💰/$.ts";
import "💰/$/build.ts";
import "💰/Object/$.defineDataProperty.ts";

import TypedArray from "💰/TypedArray.ts";

declare global {
  interface TypedArrayConstructor<R, T> {
    [$.build](generate: () => Iterable<T>): R;
  }
}

Object[$.defineDataProperty](
  TypedArray,
  $.build,
  function value<R extends TypedArray<T>, T>(
    this: TypedArrayConstructor<R, T>,
    generate: () => Iterable<T>,
  ): R {
    return this.from(generate());
  },
);
