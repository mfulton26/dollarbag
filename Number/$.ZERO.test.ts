import $ from "💰/$.ts";
import "💰/Number/$.ZERO.ts";

import { assertStrictEquals } from "std/testing/asserts.ts";

Deno.test("is 0", () => {
  assertStrictEquals(Number[$.ZERO], 0);
});
