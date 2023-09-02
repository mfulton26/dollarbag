import InvertibleMap from "💰/InvertibleMap.ts";

import {
  assert,
  assertEquals,
  assertFalse,
  assertInstanceOf,
} from "std/testing/asserts.ts";

Deno.test("empty constructor", () => {
  const instance = new InvertibleMap();
  assertInstanceOf(instance, InvertibleMap);
  assertEquals(instance.size, 0);
  assertFalse(instance.has("a"));
});

Deno.test("empty array constructor", {}, () => {
  const instance = new InvertibleMap([]);
  assertInstanceOf(instance, InvertibleMap);
  assertEquals(instance.size, 0);
  assertFalse(instance.has("a"));
});

Deno.test("single entry constructor", {}, () => {
  const instance = new InvertibleMap([["a", 1]]);
  assertInstanceOf(instance, InvertibleMap);
  assertEquals(instance.size, 1);
  assert(instance.has("a"));
});

Deno.test("multiple, unique entries constructor", () => {});

Deno.test("multiple, non-unique entries constructor", () => {});
