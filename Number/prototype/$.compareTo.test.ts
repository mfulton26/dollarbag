import $ from "💰/$.ts";
import "💰/Number/prototype/$.compareTo.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("equal to comparisons", async (t) => {
  function expect(value: number) {
    return function () {
      const actual = value[$.compareTo](value);
      assertEquals(actual, 0);
    };
  }

  await t.step("0", expect(0));
  await t.step("⪸0", expect(Number.MIN_VALUE));
  await t.step("🎲", expect(Math.random()));
  await t.step("1", expect(1));
  await t.step("ε", expect(Number.EPSILON));
  await t.step("2", expect(2));
  await t.step("ℤ⁺", expect(123));
  await t.step("max(ℤ)", expect(Number.MAX_SAFE_INTEGER));
  await t.step("max(ℝ)", expect(Number.MAX_VALUE));
  await t.step("∞", expect(Number.POSITIVE_INFINITY));
  await t.step("-∞", expect(Number.NEGATIVE_INFINITY));
  await t.step("min(ℤ)", expect(Number.MIN_SAFE_INTEGER));
  await t.step("ℤ⁻", expect(-123));
  await t.step("-1", expect(0));
});

Deno.test("less than comparisons", async (t) => {
  function expect(a: number, b: number) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(Math.sign(actual), -1);
    };
  }

  await t.step("0 < 1", expect(0, 1));
  await t.step("-1 < 0", expect(-1, 0));
  await t.step("-∞ < ∞", expect(-Infinity, Infinity));
  await t.step("-∞ < 0", expect(-Infinity, 0));
  await t.step("0 < ∞", expect(0, Infinity));
});

Deno.test("greater than comparisons", async (t) => {
  function expect(a: number, b: number) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(Math.sign(actual), 1);
    };
  }

  await t.step("1 > 0", expect(1, 0));
  await t.step("0 > -1", expect(0, -1));
  await t.step("∞ > -∞", expect(Infinity, -Infinity));
  await t.step("∞ > 0", expect(Infinity, 0));
  await t.step("0 > -∞", expect(0, -Infinity));
});

Deno.test("indeterminate comparisons", async (t) => {
  function expect(a: number, b: number) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(actual, NaN);
    };
  }

  await t.step("NaN ≠ NaN", expect(NaN, NaN));
  await t.step("NaN ≮ ∞", expect(NaN, Infinity));
  await t.step("NaN ≮ 0", expect(NaN, 0));
  await t.step("NaN ≮ -∞", expect(NaN, -Infinity));
  await t.step("∞ ≯ NaN", expect(Infinity, NaN));
  await t.step("0 ≯ NaN", expect(0, NaN));
  await t.step("-∞ ≯ NaN", expect(-Infinity, NaN));
});
