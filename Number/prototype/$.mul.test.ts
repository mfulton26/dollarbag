import $ from "💰/$.ts";
import "💰/Number/prototype/$.mul.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((4)[$.mul](3), 12);
});
