import $ from "💰/$.ts";
import "💰/AsyncIterator/prototype/$.toArray.ts";

import AsyncGeneratorFunction from "💰/AsyncGeneratorFunction.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("no entries", async () => {
  const asyncGeneratorFunction = new AsyncGeneratorFunction();
  assertEquals(await asyncGeneratorFunction()[$.toArray](), []);
});

Deno.test("single entry", async () => {
  const asyncGeneratorFunction = new AsyncGeneratorFunction("yield 1");
  assertEquals(await asyncGeneratorFunction()[$.toArray](), [1]);
});

Deno.test("multiple entries", async () => {
  const asyncGeneratorFunction = new AsyncGeneratorFunction(
    "yield 1; yield 2; yield 3",
  );
  assertEquals(await asyncGeneratorFunction()[$.toArray](), [1, 2, 3]);
});
