import $ from "💰/$.ts";
import "💰/WeakMap/$.build.ts";

import { assertEquals, assertFalse } from "std/testing/asserts.ts";

Deno.test("no entries", () => {
  const a = { key: 1 };
  const target = WeakMap[$.build](function* () {});
  assertFalse(target.has(a));
});

Deno.test("single entry", () => {
  const a = { key: 1 };
  const b = { key: 2 };
  const target = WeakMap[$.build](function* () {
    yield [a, 1];
  });
  assertEquals(target.get(a), 1);
  assertFalse(target.has(b));
});

Deno.test("multiple entries", () => {
  const a = { key: 1 };
  const b = { key: 2 };
  const c = { key: 3 };
  const target = WeakMap[$.build](function* () {
    yield [a, 1];
    yield [b, 2];
    yield [c, 3];
  });
  assertEquals(target.get(a), 1);
  assertEquals(target.get(b), 2);
  assertEquals(target.get(c), 3);
});
