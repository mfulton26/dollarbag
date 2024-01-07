import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.add.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals(4n[$.add](3n), 7n);
});
