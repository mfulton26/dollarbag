import ArrayLikeReverseIterator from "💰/.generics/ArrayLike/reverseIterator.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("array", () => {
  const reverseIterator = ArrayLikeReverseIterator.call([1, 2, 3]);
  assertEquals(reverseIterator.next(), { value: 3, done: false });
  assertEquals(reverseIterator.next(), { value: 2, done: false });
  assertEquals(reverseIterator.next(), { value: 1, done: false });
  assertEquals(reverseIterator.next(), { value: undefined, done: true });
});

Deno.test("readonly array", () => {
  const reverseIterator = ArrayLikeReverseIterator.call(
    ["a", "b", "c"] as const,
  );
  assertEquals(reverseIterator.next(), { value: "c", done: false });
  assertEquals(reverseIterator.next(), { value: "b", done: false });
  assertEquals(reverseIterator.next(), { value: "a", done: false });
  assertEquals(reverseIterator.next(), { value: undefined, done: true });
});

Deno.test("typed array", () => {
  const reverseIterator = ArrayLikeReverseIterator.call(
    Float64Array.of(-Infinity, -0, NaN),
  );
  assertEquals(reverseIterator.next(), { value: NaN, done: false });
  assertEquals(reverseIterator.next(), { value: -0, done: false });
  assertEquals(reverseIterator.next(), { value: -Infinity, done: false });
  assertEquals(reverseIterator.next(), { value: undefined, done: true });
});

Deno.test("array-like", () => {
  const reverseIterator = ArrayLikeReverseIterator.call({
    get length() {
      return 3;
    },
    "0": "Goodbye",
    "2": "Hello",
  });
  assertEquals(reverseIterator.next(), { value: "Hello", done: false });
  assertEquals(reverseIterator.next(), { value: undefined, done: false });
  assertEquals(reverseIterator.next(), { value: "Goodbye", done: false });
  assertEquals(reverseIterator.next(), { value: undefined, done: true });
});
