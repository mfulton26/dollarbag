import $ from "💰/$.ts";
import "💰/Object/prototype/$.let.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("captures", async (t) => {
  function expect<T extends NonNullable<unknown>>(expected: T) {
    return function () {
      let actual: unknown;
      expected[$.let]((value) => actual = value);
      assertEquals(actual, expected);
    };
  }

  await t.step("Object", expect({}));
  await t.step("Array", expect([]));
  await t.step("string", expect(""));
  await t.step("String", expect(Object("")));
  await t.step("number", expect(0));
  await t.step("Number", expect(Object(0)));
  await t.step("bigint", expect(0n));
  await t.step("BigInt", expect(Object(0n)));
  await t.step("boolean", expect(false));
  await t.step("Boolean", expect(Object(false)));
  await t.step("symbol", expect(Symbol()));
  await t.step("Symbol", expect(Object(Symbol())));
});

Deno.test("returns result", () => {
  const expected = crypto.randomUUID();
  const actual = crypto.randomUUID()[$.let](() => expected);
  assertEquals(actual, expected);
});
