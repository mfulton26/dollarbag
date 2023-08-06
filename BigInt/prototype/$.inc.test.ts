import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.inc.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertEquals((12n)[$.inc](), 13n);
});
