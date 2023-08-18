import $ from "💰/$.ts";
import "💰/Array/prototype/$.reverseIterator.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  const reverseIterator = [1, 2, 3][$.reverseIterator]();
  assertEquals(reverseIterator.next(), { value: 3, done: false });
  assertEquals(reverseIterator.next(), { value: 2, done: false });
  assertEquals(reverseIterator.next(), { value: 1, done: false });
  assertEquals(reverseIterator.next(), { value: undefined, done: true });
});

Deno.test("empty", () => {
  const reverseIterator = [][$.reverseIterator]();
  assertEquals(reverseIterator.next(), { value: undefined, done: true });
});
