import $ from "💰/$.ts";
import "💰/TypedArray/prototype/$.reverseIterator.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  const reverseIterator = Int8Array.of(1, 2, 3)[$.reverseIterator]();
  assertEquals(reverseIterator.next(), { value: 3, done: false });
  assertEquals(reverseIterator.next(), { value: 2, done: false });
  assertEquals(reverseIterator.next(), { value: 1, done: false });
  assertEquals(reverseIterator.next(), { value: undefined, done: true });
});

Deno.test("empty", () => {
  const reverseIterator = BigUint64Array.of()[$.reverseIterator]();
  assertEquals(reverseIterator.next(), { value: undefined, done: true });
});
