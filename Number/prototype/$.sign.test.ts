import $ from "💰/$.ts";
import "💰/Number/prototype/$.sign.ts";

import { assertEquals } from "std/testing/asserts.ts";

function expect(expected: number) {
  return function ({ name }: Deno.TestContext) {
    assertEquals(Number(name)[$.sign](), expected);
  };
}

Deno.test("-Infinity", expect(-1));
Deno.test("-10", expect(-1));
Deno.test("-1", expect(-1));
Deno.test("-0", expect(-0));
Deno.test("0", expect(0));
Deno.test("1", expect(1));
Deno.test("10", expect(1));
Deno.test("Infinity", expect(1));
Deno.test("abc", expect(NaN));
