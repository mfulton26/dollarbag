import $ from "💰/$.ts";
import "💰/Object/prototype/$.toBigInt.ts";

import { assertStrictEquals, assertThrows } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assertStrictEquals((0)[$.toBigInt](), 0n);
  assertStrictEquals(0n[$.toBigInt](), 0n);
  assertStrictEquals("0"[$.toBigInt](), 0n);
  assertStrictEquals(false[$.toBigInt](), 0n);
  assertThrows(() => ({}[$.toBigInt]()));
  assertThrows(() => ("abc"[$.toBigInt]()));
  assertThrows(() => (Symbol()[$.toBigInt]()));
  assertStrictEquals((1)[$.toBigInt](), 1n);
  assertStrictEquals(1n[$.toBigInt](), 1n);
  assertStrictEquals("1"[$.toBigInt](), 1n);
  assertStrictEquals(true[$.toBigInt](), 1n);
});
