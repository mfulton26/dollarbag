import $ from "💰/$.ts";
import "💰/Object/$.defineDataProperty.ts";

import {
  assertEquals,
  assertObjectMatch,
  assertThrows,
} from "std/testing/asserts.ts";

const writableTestKey = Symbol();

declare global {
  interface Object {
    [writableTestKey](): unknown;
  }
}

Deno.test("configurable/writable", () => {
  Object[$.defineDataProperty](Object.prototype, writableTestKey, () => 42);
  assertEquals(({})[writableTestKey](), 42);
  assertObjectMatch(
    Object.getOwnPropertyDescriptor(Object.prototype, writableTestKey)!,
    {
      configurable: true,
      enumerable: false,
      writable: true,
    },
  );

  Object.defineProperty(Object.prototype, writableTestKey, { value: () => 0 });
  assertEquals(({})[writableTestKey](), 0);
});

const readonlyTestKey = Symbol();

declare global {
  interface ObjectConstructor {
    [readonlyTestKey]: unknown;
  }
}

Deno.test("read-only", () => {
  Object[$.defineDataProperty](Object, readonlyTestKey, 126, "read-only");
  assertEquals(Object[readonlyTestKey], 126);
  assertObjectMatch(
    Object.getOwnPropertyDescriptor(Object, readonlyTestKey)!,
    {
      configurable: false,
      enumerable: false,
      writable: false,
    },
  );

  assertThrows(() =>
    Object.defineProperty(Object, readonlyTestKey, { value: 0 })
  );
});
