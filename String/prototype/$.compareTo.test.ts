import $ from "💰/$.ts";
import "💰/String/prototype/$.compareTo.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("equal to comparisons", async (t) => {
  function expect(value: string) {
    return function () {
      const actual = value[$.compareTo](value);
      assertEquals(actual, 0);
    };
  }

  await t.step("the empty string", expect(""));
  await t.step("some number", expect("42"));
  await t.step("some uppercase letter", expect("A"));
  await t.step("some lowercase letter", expect("a"));
  await t.step("some word", expect("cinema"));
  await t.step("some emoji", expect("🤪"));
});

Deno.test("less than comparisons", async (t) => {
  function expect(a: string, b: string) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(Math.sign(actual), -1);
    };
  }

  await t.step("abc < cba", expect("abc", "cba"));
});

Deno.test("greater than comparisons", async (t) => {
  function expect(a: string, b: string) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(Math.sign(actual), 1);
    };
  }

  await t.step("cba > abc", expect("cba", "abc"));
});
