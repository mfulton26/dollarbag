import $ from "💰/$.ts";
import "💰/$/build.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface WeakMapConstructor {
    [$.build]<K extends NonNullable<unknown>, V>(
      generate: () => Iterable<readonly [K, V]>,
    ): WeakMap<K, V>;
  }
}

Object[$.defineDataProperty](
  WeakMap,
  $.build,
  function (generate) {
    return new WeakMap(generate());
  },
);
