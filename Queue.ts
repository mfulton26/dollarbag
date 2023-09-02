import * as Iterator from "💰/Iterator.ts";

interface Node<T> {
  value: T;
  next: Node<T>;
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

const $nodes = new WeakMap<Queue<unknown>, $Node<unknown>>();
const sizes = new WeakMap<Queue<unknown>, number>();

export default class Queue<T> {
  constructor(items?: Iterable<T> | null) {
    $nodes.set(this, new $Node<T>());
    sizes.set(this, 0);
    if (items) this.push(...items);
  }

  get [Symbol.toStringTag](): string {
    return "Queue";
  }

  get size(): number {
    return sizes.get(this)!;
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
      };
    }
    sizes.set(this, sizes.get(this)! + items.length);
  }

  shift(): T | undefined {
    const $node = $nodes.get(this) as $Node<T>;
    const node = $node.next;
    if (node === $node) return;
    $node.next = node.next;
    if ($node.next === $node) $node.previous = $node;
    sizes.set(this, sizes.get(this)! - 1);
    return node.value;
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

  // todo: create custom inspect helpers in dollarbag
  [Symbol.for("Deno.customInspect")](): string {
    // todo: use incoming `inspect` and `options` arguments to properly indent, wrap content, etc.
    const { size } = this;
    const prefix = `${this.constructor.name}(${size})`;
    if (size === 0) return `${prefix} {}`;
    const { next: { value: head } } = $nodes.get(this) as $Node<T>;
    if (size === 1) return `${prefix} { ${head} }`;
    return `${prefix} { ${head}, <${size - 1} items>}`;
  }

  /**
   * @returns, despite its name, an iterable of the values in the queue
   */
  keys(): IterableIterator<T> {
    throw new Error("not yet implemented");
  }
  static {
    Queue.prototype.keys = Queue.prototype[Symbol.iterator];
  }

  /**
   * @returns an iterable of the values in the queue
   */
  values(): IterableIterator<T> {
    throw new Error("not yet implemented");
  }
  static {
    Queue.prototype.values = Queue.prototype[Symbol.iterator];
  }

  /**
   * @returns an iterable of [v,v] pairs for every value `v` in the queue
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

  /**
   * Executes a provided function once per each value in the progression object, in step order.
   */
  forEach(
    callbackfn: (value: T, value2: T, queue: Queue<T>) => void,
    thisArg: unknown = undefined,
  ): void {
    for (const value of this) callbackfn.call(thisArg, value, value, this);
  }
}
