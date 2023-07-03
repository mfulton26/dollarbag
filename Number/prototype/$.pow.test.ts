import $ from "💰/$.ts";
import "💰/Number/prototype/$.pow.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((4)[$.pow](3), 64);
});
