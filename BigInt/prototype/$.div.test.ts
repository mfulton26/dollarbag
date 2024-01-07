import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.div.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals(12n[$.div](3n), 4n);
});
