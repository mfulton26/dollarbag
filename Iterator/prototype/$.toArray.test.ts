import $ from "💰/$.ts";
import "💰/Iterator/prototype/$.toArray.ts";

import GeneratorFunction from "💰/GeneratorFunction.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("no entries", () => {
  const generatorFunction = new GeneratorFunction();
  assertEquals(generatorFunction()[$.toArray](), []);
});

Deno.test("single entry", () => {
  const generatorFunction = new GeneratorFunction("yield 1");
  assertEquals(generatorFunction()[$.toArray](), [1]);
});

Deno.test("multiple entries", () => {
  const generatorFunction = new GeneratorFunction("yield 1; yield 2; yield 3");
  assertEquals(generatorFunction()[$.toArray](), [1, 2, 3]);
});
