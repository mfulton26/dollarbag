import $ from "💰/$.ts";
import "💰/String/$.build.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("no entries", () => {
  const expected = "";
  const actual = String[$.build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("single entry", () => {
  const expected = "hello";
  const actual = String[$.build](function* () {
    yield "hello";
  });
  assertEquals(actual, expected);
});

Deno.test("multiple entries", () => {
  const expected = "123";
  const actual = String[$.build](function* () {
    yield "1";
    yield "2";
    yield "3";
  });
  assertEquals(actual, expected);
});

Deno.test("non-strings", () => {
  const expected = "12false[object Object]";
  const actual = String[$.build](function* () {
    yield 1;
    yield 2n;
    yield false;
    yield {};
  });
  assertEquals(actual, expected);
});
