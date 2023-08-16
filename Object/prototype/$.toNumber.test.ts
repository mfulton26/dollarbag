import $ from "💰/$.ts";
import "💰/Object/prototype/$.toNumber.ts";

import { assertStrictEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertStrictEquals((0)[$.toNumber](), 0);
  assertStrictEquals(0n[$.toNumber](), 0);
  assertStrictEquals("0"[$.toNumber](), 0);
  assertStrictEquals(false[$.toNumber](), 0);
  assertStrictEquals({}[$.toNumber](), NaN);
  assertStrictEquals("abc"[$.toNumber](), NaN);
  assertStrictEquals(Symbol()[$.toNumber](), NaN);
  assertStrictEquals((1)[$.toNumber](), 1);
  assertStrictEquals(1n[$.toNumber](), 1);
  assertStrictEquals("1"[$.toNumber](), 1);
  assertStrictEquals(true[$.toNumber](), 1);
});
