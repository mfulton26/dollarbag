import $ from "💰/$.ts";
import "💰/Array/$.build.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("no entries", () => {
  const expected: never[] = [];
  const actual = Array[$.build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("single entry", () => {
  const expected = ["hello"];
  const actual = Array[$.build](function* () {
    yield "hello";
  });
  assertEquals(actual, expected);
});

Deno.test("multiple entries", () => {
  const expected = [1, 2, 3];
  const actual = Array[$.build](function* () {
    yield 1;
    yield 2;
    yield 3;
  });
  assertEquals(actual, expected);
});
