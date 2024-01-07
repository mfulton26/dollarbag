import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.dec.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((12n)[$.dec](), 11n);
});
