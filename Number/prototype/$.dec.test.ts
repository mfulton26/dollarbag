import $ from "💰/$.ts";
import "💰/Number/prototype/$.dec.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((44)[$.dec](), 43);
});
