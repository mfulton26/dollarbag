import $ from "💰/$.ts";
import "💰/Object/prototype/$.takeUnless.ts";

import {
  assertNotStrictEquals,
  assertStrictEquals,
} from "std/testing/asserts.ts";

Deno.test("receives the value in its predicate callback", () => {
  let actual: unknown;
  const expected = "Hello";
  expected[$.takeUnless]((value) => actual = value);
  assertStrictEquals(actual, expected);
});

Deno.test("returns the value for falsy predicates", () => {
  const expected = {};
  {
    const actual = expected[$.takeUnless](() => false);
    assertStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeUnless](() => 0);
    assertStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeUnless](() => "");
    assertStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeUnless](() => 0n);
    assertStrictEquals(actual, expected);
  }
});

Deno.test("returns undefined for truthy predicates", () => {
  const expected = {};
  {
    const actual = expected[$.takeUnless](() => true);
    assertNotStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeUnless](() => 1);
    assertNotStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeUnless](() => "hi");
    assertNotStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeUnless](() => ({}));
    assertNotStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeUnless](() => []);
    assertNotStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeUnless](() => -1n);
    assertNotStrictEquals(actual, expected);
  }
});
