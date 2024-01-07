import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.requireSafePrecision.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("always returns", () => {
  assertEquals(123n[$.requireSafePrecision](), 123n);
});
