import $ from "💰/$.ts";
import "💰/BigInt/$.ZERO.ts";

import { assertStrictEquals } from "std/testing/asserts.ts";

Deno.test("is 0n", () => {
  assertStrictEquals(BigInt[$.ZERO], 0n);
});
