import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.requireNonzero.ts";

import { assertEquals, assertThrows } from "std/testing/asserts.ts";

Deno.test("nonzero values return", () => {
  assertEquals(123n[$.requireNonzero](), 123n);
});

Deno.test("zero value throws", () => {
  assertThrows(() => (0n)[$.requireNonzero](), RangeError, "this is zero");
});
