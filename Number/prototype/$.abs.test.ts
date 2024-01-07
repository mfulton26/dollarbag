import $ from "💰/$.ts";
import "💰/Number/prototype/$.abs.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((0)[$.abs](), 0);
  assertEquals((-0)[$.abs](), 0);
  assertEquals((1)[$.abs](), 1);
  assertEquals((-1)[$.abs](), 1);
  assertEquals((12)[$.abs](), 12);
  assertEquals((-4)[$.abs](), 4);
  assertEquals(Infinity[$.abs](), Infinity);
  assertEquals((-Infinity)[$.abs](), Infinity);
  assertEquals(NaN[$.abs](), NaN);
});
