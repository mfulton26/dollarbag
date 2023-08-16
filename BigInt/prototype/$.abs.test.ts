import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.abs.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((0n)[$.abs](), 0n);
  assertEquals((-0n)[$.abs](), 0n);
  assertEquals((1n)[$.abs](), 1n);
  assertEquals((-1n)[$.abs](), 1n);
  assertEquals((12n)[$.abs](), 12n);
  assertEquals((-4n)[$.abs](), 4n);
});
