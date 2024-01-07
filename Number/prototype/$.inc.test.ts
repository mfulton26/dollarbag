import $ from "💰/$.ts";
import "💰/Number/prototype/$.inc.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((44)[$.inc](), 45);
});
