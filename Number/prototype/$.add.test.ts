import $ from "💰/$.ts";
import "💰/Number/prototype/$.add.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((4)[$.add](3), 7);
});
