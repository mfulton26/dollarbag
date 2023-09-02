import Deque from "💰/Deque.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("push", async (t) => {
  await t.step("single", async (t) => {
    const deque = new Deque();

    await t.step("from empty", () => {
      deque.push(1);
      assertEquals(deque.size, 1);
      assertEquals(Array.from(deque), [1]);
    });

    await t.step("from single", () => {
      deque.push(2);
      assertEquals(deque.size, 2);
      assertEquals(Array.from(deque), [1, 2]);
    });

    await t.step("from multiple", () => {
      deque.push(3);
      assertEquals(deque.size, 3);
      assertEquals(Array.from(deque), [1, 2, 3]);
    });
  });

  await t.step("multiple", async (t) => {
    const deque = new Deque();

    await t.step("from empty", () => {
      deque.push(1, 2, 3);
      assertEquals(deque.size, 3);
      assertEquals(Array.from(deque), [1, 2, 3]);
    });

    await t.step("from multiple", () => {
      deque.push(4, 5, 6, 7);
      assertEquals(deque.size, 7);
      assertEquals(Array.from(deque), [1, 2, 3, 4, 5, 6, 7]);
    });
  });
});

Deno.test("pop", async (t) => {
  const deque = new Deque();

  await t.step("from empty", () => {
    assertEquals(deque.pop(), undefined);
    assertEquals(deque.size, 0);
  });

  await t.step("from single", () => {
    deque.push(1);
    assertEquals(deque.pop(), 1);
    assertEquals(deque.size, 0);
  });

  await t.step("from multiple", () => {
    deque.push(2, 3, 4);
    assertEquals(deque.pop(), 4);
    assertEquals(deque.size, 2);
  });
});

Deno.test("unshift", async (t) => {
  await t.step("single", async (t) => {
    const deque = new Deque();

    await t.step("from empty", () => {
      deque.unshift(1);
      assertEquals(deque.size, 1);
      assertEquals(Array.from(deque), [1]);
    });

    await t.step("from single", () => {
      deque.unshift(2);
      assertEquals(deque.size, 2);
      assertEquals(Array.from(deque), [2, 1]);
    });

    await t.step("from multiple", () => {
      deque.unshift(3);
      assertEquals(deque.size, 3);
      assertEquals(Array.from(deque), [3, 2, 1]);
    });
  });

  await t.step("multiple", async (t) => {
    const deque = new Deque();

    await t.step("from empty", () => {
      deque.unshift(3, 2, 1);
      assertEquals(deque.size, 3);
      assertEquals(Array.from(deque), [3, 2, 1]);
    });

    await t.step("from multiple", () => {
      deque.unshift(7, 6, 5, 4);
      assertEquals(deque.size, 7);
      assertEquals(Array.from(deque), [7, 6, 5, 4, 3, 2, 1]);
    });
  });
});

Deno.test("shift", async (t) => {
  const deque = new Deque();

  await t.step("from empty", () => {
    assertEquals(deque.shift(), undefined);
    assertEquals(deque.size, 0);
  });

  await t.step("from single", () => {
    deque.push(1);
    assertEquals(deque.shift(), 1);
    assertEquals(deque.size, 0);
  });

  await t.step("from multiple", () => {
    deque.push(2, 3, 4);
    assertEquals(deque.shift(), 2);
    assertEquals(deque.size, 2);
  });
});

Deno.test("clear", async (t) => {
  const deque = new Deque();

  await t.step("from empty", () => {
    deque.clear();
    assertEquals(deque.size, 0);
  });

  await t.step("from single", () => {
    deque.push(1);
    deque.clear();
    assertEquals(deque.size, 0);
  });

  await t.step("from multiple", () => {
    deque.push(1);
    deque.unshift(0);
    deque.clear();
    assertEquals(deque.size, 0);
  });
});

Deno.test("size", async (t) => {
  const deque = new Deque();

  await t.step("after construction", () => {
    assertEquals(deque.size, 0);
  });

  await t.step("after pushing", () => {
    deque.push();
    assertEquals(deque.size, 0);
    deque.push(1);
    assertEquals(deque.size, 1);
    deque.push(2, 3);
    assertEquals(deque.size, 3);
  });

  await t.step("after popping", () => {
    deque.pop();
    assertEquals(deque.size, 2);
    deque.pop();
    assertEquals(deque.size, 1);
    deque.pop();
    assertEquals(deque.size, 0);
  });

  await t.step("after unshifting", () => {
    deque.unshift();
    assertEquals(deque.size, 0);
    deque.unshift(1);
    assertEquals(deque.size, 1);
    deque.unshift(3, 2);
    assertEquals(deque.size, 3);
  });

  await t.step("after shifting", () => {
    deque.shift();
    assertEquals(deque.size, 2);
    deque.shift();
    assertEquals(deque.size, 1);
    deque.shift();
    assertEquals(deque.size, 0);
  });
});

Deno.test("constructor", () => {
  assertEquals(Array.from(new Deque([1, 2, 3])), [1, 2, 3]);
});

Deno.test("@@iterator", () => {
  assertEquals(Array.from(new Deque([3, 2, 1])), [3, 2, 1]);
});
