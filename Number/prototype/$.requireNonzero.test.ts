import $ from "💰/$.ts";
import "💰/Number/prototype/$.requireNonzero.ts";

import { assertEquals, assertThrows } from "std/testing/asserts.ts";

Deno.test("nonzero value returns", () => {
  assertEquals((124)[$.requireNonzero](), 124);
});

Deno.test("positive zero value throws", () => {
  assertThrows(() => (0)[$.requireNonzero](), RangeError, "this is zero");
});

Deno.test("negative zero value throws", () => {
  assertThrows(() => (-0)[$.requireNonzero](), RangeError, "this is zero");
});
