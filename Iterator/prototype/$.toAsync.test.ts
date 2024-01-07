import $ from "💰/$.ts";
import "💰/Iterator/prototype/$.toAsync.ts";
import "💰/AsyncIterator/prototype/$.toArray.ts";

import GeneratorFunction from "💰/GeneratorFunction.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("no entries", async () => {
  const generatorFunction = new GeneratorFunction();
  assertEquals(await generatorFunction()[$.toAsync]()[$.toArray](), []);
});

Deno.test("single entry", async () => {
  const generatorFunction = new GeneratorFunction("yield 1");
  assertEquals(await generatorFunction()[$.toAsync]()[$.toArray](), [1]);
});

Deno.test("multiple entries", async () => {
  const generatorFunction = new GeneratorFunction("yield 1; yield 2; yield 3");
  assertEquals(await generatorFunction()[$.toAsync]()[$.toArray](), [1, 2, 3]);
});
