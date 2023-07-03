import $ from "💰/$.ts";
import "💰/Number/prototype/$.sub.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((4)[$.sub](3), 1);
});
