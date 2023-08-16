import $ from "💰/$.ts";
import "💰/Number/prototype/$.through.ts";

import { assertEquals, assertThrows } from "std/testing/asserts.ts";

Deno.test("3 through 7 (default step)", async (t) => {
  const progression = (3)[$.through](7);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = Number(name);
        assertEquals(progression.has(value), expected);
      };
    }

    await t.step("2", expect(false));

    await t.step("3", expect(true));
    await t.step("4", expect(true));
    await t.step("5", expect(true));
    await t.step("6", expect(true));
    await t.step("7", expect(true));

    await t.step("8", expect(false));
  });

  await t.step("@@iterator", () => {
    assertEquals([...progression], [3, 4, 5, 6, 7]);
  });

  await t.step("size", () => {
    assertEquals(progression.size, 5);
  });
});

Deno.test("3 to 7 step 1", async (t) => {
  const progression = (3)[$.through](7, 1);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = Number(name);
        assertEquals(progression.has(value), expected);
      };
    }

    await t.step("2", expect(false));

    await t.step("3", expect(true));
    await t.step("4", expect(true));
    await t.step("5", expect(true));
    await t.step("6", expect(true));
    await t.step("7", expect(true));

    await t.step("8", expect(false));
  });

  await t.step("@@iterator", () => {
    assertEquals([...progression], [3, 4, 5, 6, 7]);
  });

  await t.step("size", () => {
    assertEquals(progression.size, 5);
  });
});

Deno.test("3 to 7 step 2", async (t) => {
  const progression = (3)[$.through](7, 2);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = Number(name);
        assertEquals(progression.has(value), expected);
      };
    }

    await t.step("1", expect(false));
    await t.step("2", expect(false));

    await t.step("3", expect(true));
    await t.step("4", expect(false));
    await t.step("5", expect(true));
    await t.step("6", expect(false));
    await t.step("7", expect(true));

    await t.step("8", expect(false));
    await t.step("9", expect(false));
  });

  await t.step("@@iterator", () => {
    assertEquals([...progression], [3, 5, 7]);
  });

  await t.step("size", () => {
    assertEquals(progression.size, 3);
  });
});

Deno.test("3 through 7 step 3", async (t) => {
  const progression = (3)[$.through](7, 3);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = Number(name);
        assertEquals(progression.has(value), expected);
      };
    }

    await t.step("0", expect(false));
    await t.step("1", expect(false));
    await t.step("2", expect(false));

    await t.step("3", expect(true));
    await t.step("4", expect(false));
    await t.step("5", expect(false));
    await t.step("6", expect(true));
    await t.step("7", expect(false));

    await t.step("8", expect(false));
    await t.step("9", expect(false));
    await t.step("10", expect(false));
  });

  await t.step("@@iterator", () => {
    assertEquals([...progression], [3, 6]);
  });

  await t.step("size", () => {
    assertEquals(progression.size, 2);
  });
});

Deno.test("3 through 7 step 4", async (t) => {
  const progression = (3)[$.through](7, 4);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = Number(name);
        assertEquals(progression.has(value), expected);
      };
    }

    await t.step("-1", expect(false));
    await t.step("0", expect(false));
    await t.step("1", expect(false));
    await t.step("2", expect(false));

    await t.step("3", expect(true));
    await t.step("4", expect(false));
    await t.step("5", expect(false));
    await t.step("6", expect(false));
    await t.step("7", expect(true));

    await t.step("8", expect(false));
    await t.step("9", expect(false));
    await t.step("10", expect(false));
    await t.step("11", expect(false));
  });

  await t.step("@@iterator", () => {
    assertEquals([...progression], [3, 7]);
  });

  await t.step("size", () => {
    assertEquals(progression.size, 2);
  });
});

Deno.test("3 through 7 step 5", async (t) => {
  const progression = (3)[$.through](7, 5);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = Number(name);
        assertEquals(progression.has(value), expected);
      };
    }

    await t.step("-2", expect(false));
    await t.step("-1", expect(false));
    await t.step("0", expect(false));
    await t.step("1", expect(false));
    await t.step("2", expect(false));

    await t.step("3", expect(true));
    await t.step("4", expect(false));
    await t.step("5", expect(false));
    await t.step("6", expect(false));
    await t.step("7", expect(false));

    await t.step("8", expect(false));
    await t.step("9", expect(false));
    await t.step("10", expect(false));
    await t.step("11", expect(false));
    await t.step("12", expect(false));
  });

  await t.step("@@iterator", () => {
    assertEquals([...progression], [3]);
  });

  await t.step("size", () => {
    assertEquals(progression.size, 1);
  });
});

Deno.test("1 through Number.MAX_SAFE_INTEGER (default step)", async (t) => {
  const progression = (1)[$.through](Number.MAX_SAFE_INTEGER);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = eval(name);
        assertEquals(progression.has(value), expected);
      };
    }

    await t.step("-2", expect(false));
    await t.step("-1", expect(false));
    await t.step("0", expect(false));

    await t.step("1", expect(true));
    await t.step("2", expect(true));
    await t.step("3", expect(true));
    await t.step("4", expect(true));
    await t.step("5", expect(true));
    await t.step("6", expect(true));
    await t.step("7", expect(true));

    await t.step("Number.MAX_SAFE_INTEGER - 6", expect(true));
    await t.step("Number.MAX_SAFE_INTEGER - 5", expect(true));
    await t.step("Number.MAX_SAFE_INTEGER - 4", expect(true));
    await t.step("Number.MAX_SAFE_INTEGER - 3", expect(true));
    await t.step("Number.MAX_SAFE_INTEGER - 2", expect(true));
    await t.step("Number.MAX_SAFE_INTEGER - 1", expect(true));
    await t.step("Number.MAX_SAFE_INTEGER", expect(true));

    await t.step("Number.MAX_SAFE_INTEGER + 1", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER + 2", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER + 3", expect(false));
  });

  await t.step("@@iterator", async (t) => {
    const iterator = progression[Symbol.iterator]();

    function expect(expected: number) {
      return function () {
        assertEquals(iterator.next(), { value: expected, done: false });
      };
    }

    await t.step("first", expect(1));
    await t.step("second", expect(2));
    await t.step("third", expect(3));
  });

  await t.step("size", () => {
    assertEquals(progression.size, Number.MAX_SAFE_INTEGER);
  });
});

Deno.test("1 through Number.MAX_SAFE_INTEGER step 2", async (t) => {
  const progression = (1)[$.through](Number.MAX_SAFE_INTEGER, 2);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = eval(name);
        assertEquals(progression.has(value), expected);
      };
    }

    await t.step("-2", expect(false));
    await t.step("-1", expect(false));
    await t.step("0", expect(false));

    await t.step("1", expect(true));
    await t.step("2", expect(false));
    await t.step("3", expect(true));
    await t.step("4", expect(false));
    await t.step("5", expect(true));
    await t.step("6", expect(false));
    await t.step("7", expect(true));

    await t.step("Number.MAX_SAFE_INTEGER - 6", expect(true));
    await t.step("Number.MAX_SAFE_INTEGER - 5", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER - 4", expect(true));
    await t.step("Number.MAX_SAFE_INTEGER - 3", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER - 2", expect(true));
    await t.step("Number.MAX_SAFE_INTEGER - 1", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER", expect(true));

    await t.step("Number.MAX_SAFE_INTEGER + 1", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER + 2", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER + 3", expect(false));
  });

  await t.step("@@iterator", async (t) => {
    const iterator = progression[Symbol.iterator]();

    function expect(expected: number) {
      return function () {
        assertEquals(iterator.next(), { value: expected, done: false });
      };
    }

    await t.step("first", expect(1));
    await t.step("second", expect(3));
    await t.step("third", expect(5));
  });

  await t.step("size", () => {
    assertEquals(progression.size, 1 + (Number.MAX_SAFE_INTEGER - 1) / 2);
  });
});

Deno.test("1 through Number.MAX_SAFE_INTEGER step 2^52-1", async (t) => {
  const progression = (1)[$.through](Number.MAX_SAFE_INTEGER, 2 ** 51);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = eval(name);
        assertEquals(progression.has(value), expected);
      };
    }

    await t.step("-2", expect(false));
    await t.step("-1", expect(false));
    await t.step("0", expect(false));

    await t.step("1", expect(true));
    await t.step("2", expect(false));
    await t.step("3", expect(false));

    await t.step("1 + 2**51 - 1", expect(false));
    await t.step("1 + 2**51", expect(true));
    await t.step("1 + 2**51 + 1", expect(false));

    await t.step("1 + 2 * 2**51 - 1", expect(false));
    await t.step("1 + 2 * 2**51", expect(true));
    await t.step("1 + 2 * 2**51 + 1", expect(false));

    await t.step("1 + 3 * 2**51 - 1", expect(false));
    await t.step("1 + 3 * 2**51", expect(true));
    await t.step("1 + 3 * 2**51 + 1", expect(false));

    await t.step("Number.MAX_SAFE_INTEGER - 2", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER - 1", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER", expect(false));

    await t.step("Number.MAX_SAFE_INTEGER + 1", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER + 2", expect(false));
    await t.step("Number.MAX_SAFE_INTEGER + 3", expect(false));
  });

  await t.step("@@iterator", async (t) => {
    const iterator = progression[Symbol.iterator]();

    function expect(expected: number | undefined) {
      return function () {
        assertEquals(
          iterator.next(),
          expected === undefined
            ? { value: undefined, done: true }
            : { value: expected, done: false },
        );
      };
    }

    await t.step("first", expect(1));
    await t.step("second", expect(1 + 2 ** 51));
    await t.step("third", expect(1 + 2 * 2 ** 51));
    await t.step("last", expect(1 + 3 * 2 ** 51));
    await t.step("done", expect(undefined));
  });

  await t.step("size", () => {
    assertEquals(progression.size, 4);
  });
});

Deno.test("constructor limits", () => {
  assertThrows(
    () => (Number.NEGATIVE_INFINITY)[$.through](12),
    RangeError,
    "start must have safe precision",
  );
  assertThrows(
    () => (0)[$.through](Number.MAX_VALUE),
    RangeError,
    "end must have safe precision",
  );
  assertThrows(
    () => (1)[$.through](10, Number.MIN_VALUE),
    RangeError,
    "step must have safe precision",
  );
});

Deno.test("size", () => {
  assertEquals(
    (1)[$.through](Number.MAX_SAFE_INTEGER).size,
    Number.MAX_SAFE_INTEGER,
  );
  assertEquals(
    (-1)[$.through](Number.MIN_SAFE_INTEGER).size,
    Number.MAX_SAFE_INTEGER,
  );
  assertEquals(
    Number.MIN_SAFE_INTEGER[$.through](-1).size,
    Number.MAX_SAFE_INTEGER,
  );
  assertEquals(
    Number.MAX_SAFE_INTEGER[$.through](1).size,
    Number.MAX_SAFE_INTEGER,
  );
  assertEquals(
    Number.MIN_SAFE_INTEGER[$.through](Number.MAX_SAFE_INTEGER).size,
    NaN,
  );
  assertEquals(
    Number.MAX_SAFE_INTEGER[$.through](Number.MIN_SAFE_INTEGER).size,
    NaN,
  );
  assertEquals(
    Number.MIN_SAFE_INTEGER[$.through](Number.MAX_SAFE_INTEGER - 1).size,
    2 * Number.MAX_SAFE_INTEGER,
  );
  assertEquals(
    (Number.MIN_SAFE_INTEGER + 1)[$.through](Number.MAX_SAFE_INTEGER).size,
    2 * Number.MAX_SAFE_INTEGER,
  );
  assertEquals(
    (Number.MIN_SAFE_INTEGER + 1)[$.through](Number.MAX_SAFE_INTEGER).size,
    2 * Number.MAX_SAFE_INTEGER,
  );
});
