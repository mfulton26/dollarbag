import $ from "💰/$.ts";
import "💰/$/toBigInt.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface Object {
    [$.toBigInt](): bigint;
  }
}

Object[$.defineDataProperty](
  Object.prototype,
  $.toBigInt,
  function () {
    // deno-lint-ignore no-explicit-any
    return BigInt(this as any);
  },
);
