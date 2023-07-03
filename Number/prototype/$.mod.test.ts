import $ from "💰/$.ts";
import "💰/Number/prototype/$.mod.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((-4)[$.mod](3), 2);
});
