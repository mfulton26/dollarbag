import $ from "💰/$.ts";
import "💰/Number/prototype/$.isNegative.ts";

import { assertEquals } from "std/testing/asserts.ts";

function expect(expected: boolean) {
  return function ({ name }: Deno.TestContext) {
    assertEquals(eval(name)[$.isNegative](), expected);
  };
}

Deno.test("-10", expect(true));
Deno.test("-1", expect(true));
Deno.test("-0", expect(true));
Deno.test("0", expect(false));
Deno.test("1", expect(false));
Deno.test("10", expect(false));
Deno.test("Number.MIN_SAFE_INTEGER", expect(true));
Deno.test("Number.MAX_SAFE_INTEGER", expect(false));
Deno.test("Number.MIN_VALUE", expect(false));
Deno.test("Number.MAX_VALUE", expect(false));
Deno.test("Number.EPSILON", expect(false));
Deno.test("Number.NEGATIVE_INFINITY", expect(true));
Deno.test("Number.POSITIVE_INFINITY", expect(false));
Deno.test("Number.NaN", expect(false));
