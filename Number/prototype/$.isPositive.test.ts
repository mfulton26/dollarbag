import $ from "💰/$.ts";
import "💰/Number/prototype/$.isPositive.ts";

import { assertEquals } from "std/testing/asserts.ts";

function expect(expected: boolean) {
  return function ({ name }: Deno.TestContext) {
    assertEquals(eval(name)[$.isPositive](), expected);
  };
}

Deno.test("-10", expect(false));
Deno.test("-1", expect(false));
Deno.test("-0", expect(false));
Deno.test("0", expect(true));
Deno.test("1", expect(true));
Deno.test("10", expect(true));
Deno.test("Number.MIN_SAFE_INTEGER", expect(false));
Deno.test("Number.MAX_SAFE_INTEGER", expect(true));
Deno.test("Number.MIN_VALUE", expect(true));
Deno.test("Number.MAX_VALUE", expect(true));
Deno.test("Number.EPSILON", expect(true));
Deno.test("Number.NEGATIVE_INFINITY", expect(false));
Deno.test("Number.POSITIVE_INFINITY", expect(true));
Deno.test("Number.NaN", expect(false));
