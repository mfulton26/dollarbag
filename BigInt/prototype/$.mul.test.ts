import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.mul.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals(4n[$.mul](3n), 12n);
});
