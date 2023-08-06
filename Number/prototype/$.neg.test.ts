import $ from "💰/$.ts";
import "💰/Number/prototype/$.neg.ts";

import { assertStrictEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertStrictEquals((0)[$.neg](), -0);
  assertStrictEquals((-0)[$.neg](), 0);
});
