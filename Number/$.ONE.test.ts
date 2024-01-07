import $ from "💰/$.ts";
import "💰/Number/$.ONE.ts";

import { assertStrictEquals } from "std/testing/asserts.ts";

Deno.test("is 1", () => {
  assertStrictEquals(Number[$.ONE], 1);
});
