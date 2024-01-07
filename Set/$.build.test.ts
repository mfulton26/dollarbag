import $ from "💰/$.ts";
import "💰/Set/$.build.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("no entries", () => {
  const expected = new Set();
  const actual = Set[$.build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("single entry", () => {
  const expected = new Set([1]);
  const actual = Set[$.build](function* () {
    yield 1;
  });
  assertEquals(actual, expected);
});

Deno.test("multiple entries", () => {
  const expected = new Set([1, 2, 3]);
  const actual = Set[$.build](function* () {
    yield 1;
    yield 2;
    yield 3;
  });
  assertEquals(actual, expected);
});
