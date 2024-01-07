import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.compareTo.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("equal to comparisons", async (t) => {
  function expect(value: bigint) {
    return function () {
      const actual = value[$.compareTo](value);
      assertEquals(actual, 0);
    };
  }

  await t.step("0", expect(0n));
  await t.step("1", expect(1n));
  await t.step("2", expect(2n));
  await t.step("ℤ⁺", expect(BigInt(Number.MAX_SAFE_INTEGER) ** 2n));
  await t.step("-1", expect(-1n));
  await t.step("-2", expect(-2n));
  await t.step("ℤ⁻", expect(-1n * BigInt(Number.MIN_SAFE_INTEGER) ** 2n));
});

Deno.test("less than comparisons", async (t) => {
  function expect(a: bigint, b: bigint) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(Math.sign(actual), -1);
    };
  }

  await t.step("0 < 1", expect(0n, 1n));
  await t.step("-1 < 0", expect(-1n, 0n));
  await t.step("0 < ℤ⁺", expect(0n, BigInt(Number.MAX_SAFE_INTEGER) ** 2n));
  await t.step(
    "ℤ⁻ < -1",
    expect(-1n * BigInt(Number.MIN_SAFE_INTEGER) ** 2n, -1n),
  );
});

Deno.test("greater than comparisons", async (t) => {
  function expect(a: bigint, b: bigint) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(Math.sign(actual), 1);
    };
  }

  await t.step("1 > 0", expect(1n, 0n));
  await t.step("0 > -1", expect(0n, -1n));
  await t.step("0 > ℤ⁺", expect(BigInt(Number.MAX_SAFE_INTEGER) ** 2n, 0n));
  await t.step(
    "ℤ⁻ > -1",
    expect(-1n, -1n * BigInt(Number.MIN_SAFE_INTEGER) ** 2n),
  );
});
