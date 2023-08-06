import $ from "💰/$.ts";
import "💰/Iterator/prototype/$.toArray.ts";
import "💰/String/prototype/$.lineIterator.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("empty string", () => {
  assertEquals(""[$.lineIterator]()[$.toArray](), []);
});

Deno.test("single line", () => {
  assertEquals("abc"[$.lineIterator]()[$.toArray](), ["abc"]);
});

Deno.test("multiple lines", async (t) => {
  await t.step("LF", () => {
    assertEquals(
      "abc\n123\n!@#"[$.lineIterator]()[$.toArray](),
      ["abc", "123", "!@#"],
    );
  });
  await t.step("CRLF", () => {
    assertEquals(
      "abc\r\n123\r\n!@#"[$.lineIterator]()[$.toArray](),
      ["abc", "123", "!@#"],
    );
  });
  await t.step("CR", () => {
    assertEquals(
      "abc\r123\r!@#"[$.lineIterator]()[$.toArray](),
      ["abc", "123", "!@#"],
    );
  });
  await t.step("mixed CRLF", () => {
    assertEquals(
      "abc\r123\n!@#\r\nABC"[$.lineIterator]()[$.toArray](),
      ["abc", "123", "!@#", "ABC"],
    );
  });
});

Deno.test("trailing NL", () => {
  assertEquals("abc\n"[$.lineIterator]()[$.toArray](), ["abc"]);
});

Deno.test("trailing CR", () => {
  assertEquals("abc\r"[$.lineIterator]()[$.toArray](), ["abc"]);
});

Deno.test("trailing CRLF", () => {
  assertEquals("abc\r"[$.lineIterator]()[$.toArray](), ["abc"]);
});
