import $ from "💰/$.ts";
import "💰/$/reverseIterator.ts";

import * as Iterator from "💰/Iterator.ts";

interface Node<T> {
  value: T;
  next: Node<T>;
  previous: Node<T>;
}

class $Node<T> implements Node<T> {
  previous: Node<T>;
  next: Node<T>;

  constructor() {
    this.previous = this;
    this.next = this;
  }

  get value(): never {
    throw new Error("unreachable");
  }
}

const $nodes = new WeakMap<Deque<unknown>, $Node<unknown>>();
const sizes = new WeakMap<Deque<unknown>, number>();

export default class Deque<T> {
  constructor(items?: Iterable<T> | null) {
    $nodes.set(this, new $Node<T>());
    sizes.set(this, 0);
    if (items) this.push(...items);
  }

  get [Symbol.toStringTag](): string {
    return "Deque";
  }

  get size(): number {
    return sizes.get(this)!;
  }

  // todo: create custom inspect helpers in dollarbag
  [Symbol.for("Deno.customInspect")](): string {
    // todo: use incoming `inspect` and `options` arguments to properly indent, wrap content, etc.
    const { size } = this;
    const prefix = `${this.constructor.name}(${size})`;
    if (size === 0) return `${prefix} {}`;
    const {
      next: { value: head },
      previous: { value: tail },
    } = $nodes.get(this) as $Node<T>;
    if (size === 1) return `${prefix} { ${tail} }`;
    if (size === 2) return `${prefix} { ${head}, ${tail} }`;
    return `${prefix} { ${head}, <${size - 2} items>, ${tail} }`;
  }

  [Symbol.iterator](): IterableIterator<T> {
    const $node = $nodes.get(this) as $Node<T>;
    let current: Readonly<Node<T>> = $node.next;
    const next = (): IteratorResult<T> => {
      if (current === $node) return { value: undefined, done: true };
      const { value } = current;
      current = current.next;
      return { value, done: false };
    };
    return Iterator.from({ next });
  }

  [$.reverseIterator](): IterableIterator<T> {
    const $node = $nodes.get(this) as $Node<T>;
    let current: Readonly<Node<T>> = $node.previous;
    const next = (): IteratorResult<T> => {
      if (current === $node) return { value: undefined, done: true };
      const { value } = current;
      current = current.previous;
      return { value, done: false };
    };
    return Iterator.from({ next });
  }

  clear(): void {
    const $node = $nodes.get(this) as $Node<T>;
    $node.next = $node.previous = $node;
    sizes.set(this, 0);
  }

  push(...items: T[]): void {
    const $node = $nodes.get(this) as $Node<T>;
    for (const value of items) {
      $node.previous = $node.previous.next = {
        value,
        next: $node,
        previous: $node.previous,
      };
    }
    sizes.set(this, sizes.get(this)! + items.length);
  }

  pop(): T | undefined {
    const $node = $nodes.get(this) as $Node<T>;
    const node = $node.previous;
    if (node === $node) return;
    $node.previous = node.previous;
    node.previous.next = $node;
    sizes.set(this, sizes.get(this)! - 1);
    return node.value;
  }

  unshift(...items: T[]): void {
    let node: Node<T> = $nodes.get(this) as $Node<T>;
    for (const value of items) {
      node = node.next = node.next.previous = {
        value,
        next: node.next,
        previous: node,
      };
    }
    sizes.set(this, sizes.get(this)! + items.length);
  }

  shift(): T | undefined {
    const $node = $nodes.get(this) as $Node<T>;
    const node = $node.next;
    if (node === $node) return;
    $node.next = node.next;
    node.next.previous = $node;
    sizes.set(this, sizes.get(this)! - 1);
    return node.value;
  }

  /**
   * @returns, despite its name, an iterable of the values in the deque
   */
  keys(): IterableIterator<T> {
    throw new Error("not yet implemented");
  }
  static {
    Deque.prototype.keys = Deque.prototype[Symbol.iterator];
  }

  /**
   * @returns an iterable of the values in the deque
   */
  values(): IterableIterator<T> {
    throw new Error("not yet implemented");
  }
  static {
    Deque.prototype.values = Deque.prototype[Symbol.iterator];
  }

  /**
   * @returns an iterable of [v,v] pairs for every value `v` in the deque
   */
  entries(): IterableIterator<[T, T]> {
    const iterator = this[Symbol.iterator]();
    const next = (): IteratorResult<[T, T]> => {
      const { value, done } = iterator.next();
      if (done) return { value: undefined, done: true };
      return { value: [value, value], done: false };
    };
    return Iterator.from({ next });
  }
}
