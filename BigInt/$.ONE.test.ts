import $ from "💰/$.ts";
import "💰/BigInt/$.ONE.ts";

import { assertStrictEquals } from "std/testing/asserts.ts";

Deno.test("is 1n", () => {
  assertStrictEquals(BigInt[$.ONE], 1n);
});
