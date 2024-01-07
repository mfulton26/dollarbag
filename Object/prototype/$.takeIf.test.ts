import $ from "💰/$.ts";
import "💰/Object/prototype/$.takeIf.ts";

import {
  assertNotStrictEquals,
  assertStrictEquals,
} from "std/testing/asserts.ts";

Deno.test("receives the value in its predicate callback", () => {
  let actual: unknown;
  const expected = "Hello";
  expected[$.takeIf]((value) => actual = value);
  assertStrictEquals(actual, expected);
});

Deno.test("returns the value for truthy predicates", () => {
  const expected = {};
  {
    const actual = expected[$.takeIf](() => true);
    assertStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeIf](() => 1);
    assertStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeIf](() => "hi");
    assertStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeIf](() => ({}));
    assertStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeIf](() => []);
    assertStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeIf](() => -1n);
    assertStrictEquals(actual, expected);
  }
});

Deno.test("returns undefined for falsy predicates", () => {
  const expected = {};
  {
    const actual = expected[$.takeIf](() => false);
    assertNotStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeIf](() => 0);
    assertNotStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeIf](() => "");
    assertNotStrictEquals(actual, expected);
  }
  {
    const actual = expected[$.takeIf](() => 0n);
    assertNotStrictEquals(actual, expected);
  }
});
