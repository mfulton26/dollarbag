import $ from "💰/$.ts";
import "💰/$/build.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface MapConstructor {
    [$.build]<K, V>(generate: () => Iterable<readonly [K, V]>): Map<K, V>;
  }
}

Object[$.defineDataProperty](
  Map,
  $.build,
  function value<K, V>(generate: () => Iterable<readonly [K, V]>) {
    return new Map(generate());
  },
);
