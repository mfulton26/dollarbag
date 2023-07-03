import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.rem.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals(4n[$.rem](3n), 1n);
});
