import $ from "💰/$.ts";
import "💰/$/build.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface SetConstructor {
    [$.build]<T>(generate: () => Iterable<T>): Set<T>;
  }
}

Object[$.defineDataProperty](
  Set,
  $.build,
  function value(generate) {
    return new Set(generate());
  },
);
