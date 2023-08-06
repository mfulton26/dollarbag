import $ from "💰/$.ts";
import "💰/Number/prototype/$.requireSafeInteger.ts";

import { assertEquals, assertThrows } from "std/testing/asserts.ts";

Deno.test("safe integer value returns", () => {
  assertEquals((33)[$.requireSafeInteger](), 33);
});

Deno.test("unsafe integer value throws", () => {
  assertThrows(
    () => Number.EPSILON[$.requireSafeInteger](),
    RangeError,
    `${Number.EPSILON} is not a safe integer`,
  );
});
