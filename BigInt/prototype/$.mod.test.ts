import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.mod.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((-4n)[$.mod](3n), 2n);
});
