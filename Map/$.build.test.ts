import $ from "💰/$.ts";
import "💰/Map/$.build.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("no entries", () => {
  const expected = new Map();
  const actual = Map[$.build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("single entry", () => {
  const expected = new Map([[1, 1]]);
  const actual = Map[$.build](function* () {
    yield [1, 1];
  });
  assertEquals(actual, expected);
});

Deno.test("multiple entries", () => {
  const expected = new Map([
    [1, 1],
    [2, 2],
    [3, 3],
  ]);
  const actual = Map[$.build](function* () {
    yield [1, 1];
    yield [2, 2];
    yield [3, 3];
  });
  assertEquals(actual, expected);
});
