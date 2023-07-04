import $ from "💰/$.ts";
import "💰/TypedArray/$.build.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("no entries", () => {
  const expected = new Uint16Array(0);
  const actual = Uint16Array[$.build](function* () {});
  assertEquals(actual, expected);
});

Deno.test("single entry", () => {
  const expected = BigInt64Array.of(1n);
  const actual = BigInt64Array[$.build](function* () {
    yield 1n;
  });
  assertEquals(actual, expected);
});

Deno.test("multiple entries", () => {
  const expected = Float32Array.of(1.1, 2.2, 3.3);
  const actual = Float32Array[$.build](function* () {
    yield 1.1;
    yield 2.2;
    yield 3.3;
  });
  assertEquals(actual, expected);
});
