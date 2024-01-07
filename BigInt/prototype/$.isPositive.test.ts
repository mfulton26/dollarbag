import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.isPositive.ts";

import { assertEquals } from "std/testing/asserts.ts";

function expect(expected: boolean) {
  return function ({ name }: Deno.TestContext) {
    assertEquals(BigInt(name)[$.isPositive](), expected);
  };
}

Deno.test("-10", expect(false));
Deno.test("-1", expect(false));
Deno.test("0", expect(false));
Deno.test("1", expect(true));
Deno.test("10", expect(true));
