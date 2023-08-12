import $ from "💰/$.ts";
import "💰/$/build.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface ArrayConstructor {
    [$.build]<T>(generate: () => Iterable<T> | ArrayLike<T>): T[];
  }
}

Object[$.defineDataProperty](
  Array,
  $.build,
  function (generate) {
    return Array.from(generate());
  },
);
