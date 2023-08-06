import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.neg.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals(100n[$.neg](), -100n);
  assertEquals((-111n)[$.neg](), 111n);
});
