import $ from "💰/$.ts";
import "💰/$/build.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface WeakSetConstructor {
    [$.build]<T extends NonNullable<unknown>>(
      generate: () => Iterable<T>,
    ): WeakSet<T>;
  }
}

Object[$.defineDataProperty](
  WeakSet,
  $.build,
  function (generate) {
    return new WeakSet(generate());
  },
);
