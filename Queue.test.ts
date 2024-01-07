import Queue from "💰/Queue.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("push", async (t) => {
  await t.step("single", async (t) => {
    const queue = new Queue();

    await t.step("from empty", () => {
      queue.push(1);
      assertEquals(queue.size, 1);
      assertEquals(Array.from(queue), [1]);
    });

    await t.step("from single", () => {
      queue.push(2);
      assertEquals(queue.size, 2);
      assertEquals(Array.from(queue), [1, 2]);
    });

    await t.step("from multiple", () => {
      queue.push(3);
      assertEquals(queue.size, 3);
      assertEquals(Array.from(queue), [1, 2, 3]);
    });
  });

  await t.step("multiple", async (t) => {
    const queue = new Queue();

    await t.step("from empty", () => {
      queue.push(1, 2, 3);
      assertEquals(queue.size, 3);
      assertEquals(Array.from(queue), [1, 2, 3]);
    });

    await t.step("from multiple", () => {
      queue.push(4, 5, 6, 7);
      assertEquals(queue.size, 7);
      assertEquals(Array.from(queue), [1, 2, 3, 4, 5, 6, 7]);
    });
  });
});

Deno.test("shift", async (t) => {
  const queue = new Queue();

  await t.step("from empty", () => {
    assertEquals(queue.shift(), undefined);
    assertEquals(queue.size, 0);
  });

  await t.step("from single", () => {
    queue.push(1);
    assertEquals(queue.shift(), 1);
    assertEquals(queue.size, 0);
    assertEquals(queue.shift(), undefined);
  });

  await t.step("from multiple", () => {
    queue.push(2, 3, 4);
    assertEquals(queue.size, 3);
    assertEquals(queue.shift(), 2);
    assertEquals(queue.size, 2);
  });
});

Deno.test("clear", async (t) => {
  const queue = new Queue();

  await t.step("from empty", () => {
    queue.clear();
    assertEquals(queue.size, 0);
  });

  await t.step("from single", () => {
    queue.push(1);
    queue.clear();
    assertEquals(queue.size, 0);
  });

  await t.step("from multiple", () => {
    queue.push(1);
    queue.push(0);
    queue.clear();
    assertEquals(queue.size, 0);
  });
});

Deno.test("size", async (t) => {
  const queue = new Queue();

  await t.step("after construction", () => {
    assertEquals(queue.size, 0);
  });

  await t.step("after pushing", () => {
    queue.push();
    assertEquals(queue.size, 0);
    queue.push(1);
    assertEquals(queue.size, 1);
    queue.push(2, 3);
    assertEquals(queue.size, 3);
  });

  await t.step("after shifting", () => {
    queue.shift();
    assertEquals(queue.size, 2);
    queue.shift();
    assertEquals(queue.size, 1);
    queue.shift();
    assertEquals(queue.size, 0);
  });
});

Deno.test("constructor", () => {
  assertEquals(Array.from(new Queue([1, 2, 3])), [1, 2, 3]);
});

Deno.test("@@iterator", () => {
  assertEquals(Array.from(new Queue([3, 2, 1])), [3, 2, 1]);
});
