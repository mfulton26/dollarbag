import $ from "💰/$.ts";
import "💰/Date/prototype/$.compareTo.ts";

import { assertEquals } from "std/testing/asserts.ts";

const epoch = new Date(0);
const max = new Date(8.64e15);
const min = new Date(-8.64e15);

Deno.test("equal to comparisons", async (t) => {
  function expect(value: Date) {
    return function () {
      const actual = value[$.compareTo](value);
      assertEquals(actual, 0);
    };
  }

  await t.step("epoch", expect(epoch));
  await t.step("now", expect(new Date()));
  await t.step("max", expect(max));
  await t.step("min", expect(min));
});

Deno.test("less than comparisons", async (t) => {
  function expect(a: Date, b: Date) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(Math.sign(actual), -1);
    };
  }

  await t.step("epoch < max", expect(epoch, max));
  await t.step("min < epoch", expect(min, epoch));
});

Deno.test("greater than comparisons", async (t) => {
  function expect(a: Date, b: Date) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(Math.sign(actual), 1);
    };
  }

  await t.step("epoch > min", expect(epoch, min));
  await t.step("max > epoch", expect(max, epoch));
});

Deno.test("indeterminate comparisons", async (t) => {
  function expect(a: Date, b: Date) {
    return function () {
      const actual = a[$.compareTo](b);
      assertEquals(actual, NaN);
    };
  }

  await t.step("invalid ≠ invalid", expect(new Date(NaN), new Date(NaN)));
  await t.step("invalid ≮ max", expect(new Date(NaN), max));
  await t.step("invalid ≮ epoch", expect(new Date(NaN), epoch));
  await t.step("invalid ≮ min", expect(new Date(NaN), min));
  await t.step("max ≯ invalid", expect(max, new Date(NaN)));
  await t.step("epoch ≯ invalid", expect(epoch, new Date(NaN)));
  await t.step("min ≯ invalid", expect(min, new Date(NaN)));
});
