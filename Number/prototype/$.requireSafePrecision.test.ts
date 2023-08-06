import $ from "💰/$.ts";
import "💰/Number/prototype/$.requireSafePrecision.ts";

import { assertEquals, assertThrows } from "std/testing/asserts.ts";

Deno.test("safe integer value returns", () => {
  assertEquals((33)[$.requireSafePrecision](), 33);
});

Deno.test("unsafe integer value throws", () => {
  assertThrows(
    () => Number.EPSILON[$.requireSafePrecision](),
    RangeError,
    `${Number.EPSILON} is not a safe integer`,
  );
});
