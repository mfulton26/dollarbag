import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.sign.ts";

import { assertEquals } from "std/testing/asserts.ts";

function expect(expected: bigint) {
  return function ({ name }: Deno.TestContext) {
    assertEquals(BigInt(name)[$.sign](), expected);
  };
}

Deno.test("-10", expect(-1n));
Deno.test("-1", expect(-1n));
Deno.test("0", expect(0n));
Deno.test("1", expect(1n));
Deno.test("10", expect(1n));
