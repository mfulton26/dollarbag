import $ from "💰/$.ts";
import "💰/BigInt/prototype/$.through.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("3 through 7 (default step)", async (t) => {
  const progression = (3n)[$.through](7n);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = BigInt(name);
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
    assertEquals([...progression], [3n, 4n, 5n, 6n, 7n]);
  });
});

Deno.test("3 to 7 step 1", async (t) => {
  const progression = (3n)[$.through](7n, 1n);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = BigInt(name);
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
    assertEquals([...progression], [3n, 4n, 5n, 6n, 7n]);
  });
});

Deno.test("3 to 7 step 2", async (t) => {
  const progression = (3n)[$.through](7n, 2n);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = BigInt(name);
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
    assertEquals([...progression], [3n, 5n, 7n]);
  });
});

Deno.test("3 through 7 step 3", async (t) => {
  const progression = (3n)[$.through](7n, 3n);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = BigInt(name);
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
    assertEquals([...progression], [3n, 6n]);
  });
});

Deno.test("3 through 7 step 4", async (t) => {
  const progression = (3n)[$.through](7n, 4n);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = BigInt(name);
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
    assertEquals([...progression], [3n, 7n]);
  });
});

Deno.test("3 through 7 step 5", async (t) => {
  const progression = (3n)[$.through](7n, 5n);

  await t.step("has", async (t) => {
    function expect(expected: boolean) {
      return function ({ name }: Deno.TestContext) {
        const value = BigInt(name);
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
    assertEquals([...progression], [3n]);
  });
});
