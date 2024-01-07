import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.pow.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals(4n[$.pow](3n), 64n);
});
