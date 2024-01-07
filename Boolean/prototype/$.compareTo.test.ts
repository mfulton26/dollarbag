import $ from "💰/$.ts";
import "💰/Boolean/prototype/$.compareTo.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("equal to comparisons", async (t) => {
  function expect(value: boolean) {
    return function () {
      const actual = value[$.compareTo](value);
      assertEquals(actual, 0);
    };
  }

  await t.step("false", expect(false));
  await t.step("true", expect(true));
});

Deno.test("less than comparisons", async (t) => {
  function expect(a: boolean, b: boolean) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(Math.sign(actual), -1);
    };
  }

  await t.step("false < true", expect(false, true));
});

Deno.test("greater than comparisons", async (t) => {
  function expect(a: boolean, b: boolean) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(Math.sign(actual), 1);
    };
  }

  await t.step("true > false", expect(true, false));
});
