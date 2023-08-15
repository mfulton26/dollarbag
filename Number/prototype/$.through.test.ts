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