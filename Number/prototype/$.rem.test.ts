import $ from "💰/$.ts";
import "💰/Number/prototype/$.rem.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((4)[$.rem](3), 1);
});
