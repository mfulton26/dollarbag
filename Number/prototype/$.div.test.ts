import $ from "💰/$.ts";
import "💰/Number/prototype/$.div.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((12)[$.div](3), 4);
});
