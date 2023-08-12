import $ from "💰/$.ts";
import "💰/$/build.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface StringConstructor {
    [$.build]<T>(generate: () => Iterable<T>): string;
  }
}

Object[$.defineDataProperty](
  String,
  $.build,
  function value(generate) {
    let result = "";
    for (const value of generate()) result += value;
    return result;
  },
);
