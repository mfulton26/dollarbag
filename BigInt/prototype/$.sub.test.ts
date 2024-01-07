import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.sub.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals(4n[$.sub](3n), 1n);
});
