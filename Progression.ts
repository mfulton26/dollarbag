import $ from "💰/$.ts";

import * as Iterator from "💰/Iterator.ts";

export interface Progressable<T> {
  constructor: { [$.ZERO]: T; [$.ONE]: T };
  [$.add](value: T): T;
  [$.compareTo](value: T): number;
  [$.mod](value: T): T;
  [$.neg](): T;
  [$.requireNonzero](message?: string): T;
  [$.requireSafePrecision](message?: string): T;
  [$.sub](value: T): T;
}

/** @returns `(a - b) % c` without calculating `a - b` to avoid precision issues */
function subMod<T extends Progressable<T>>(a: T, b: T, c: T): T {
  return a[$.sub](c)[$.mod](c)
    [$.sub](
      b[$.sub](c)[$.mod](c),
    )
    [$.mod](c);
}

/** @returns the result for {@link Progression.computeLast} but without doing any argument validation */
function computeLast<T extends Progressable<T>>(start: T, end: T, step: T): T {
  if (step[$.compareTo](start.constructor[$.ZERO]) > 0) {
    if (start[$.compareTo](end) >= 0) return start;
    return end[$.sub](subMod(end, start, step));
  }
  if (start[$.compareTo](end) <= 0) return start;
  return end[$.add](subMod(start, end, step[$.neg]()));
}

export default class Progression<T extends Progressable<T>> {
  /**
   * Calculates the last item of a bounded arithmetic progression.
   *
   * The last item is `end` itself if stepping from `start` by `step` will arrive at `end`, otherwise the value will be whatever stepped value comes before `end` in the sequence as to not exceed the bound.
   *
   * e.g. The progression of `0 through 10 step 3` will never yield `10` but will stop at `9` (`0`, `3`, `6`, and finally `9` because the next item, `12`, comes after the ending bound, `10`).
   *
   * @param start the first item of the progression
   * @param end the ending bound of the progression
   * @param step the common difference in the progression
   * @returns the last item of the progression
   */
  static computeLast<T extends Progressable<T>>(start: T, end: T, step: T): T {
    return computeLast(
      start[$.requireSafePrecision]("start must have safe precision"),
      end[$.requireSafePrecision]("end must have safe precision"),
      step[$.requireNonzero]("step must be nonzero")
        [$.requireSafePrecision]("step must have safe precision"),
    );
  }

  readonly #first: T;
  readonly #last: T;
  readonly #step: T;

  constructor(start: T, end: T, step?: T) {
    this.#last = computeLast(
      this.#first = start[$.requireSafePrecision](
        "start must have safe precision",
      ),
      end[$.requireSafePrecision]("end must have safe precision"),
      this.#step = step?.[$.requireNonzero]("step must be nonzero")
        [$.requireSafePrecision]("step must have safe precision") ??
        (end[$.sub](start)[$.compareTo](start.constructor[$.ZERO]) > 0
          ? start.constructor[$.ONE]
          : start.constructor[$.ONE][$.neg]()),
    );
  }

  get [Symbol.toStringTag]() {
    return "Progression";
  }

  get first() {
    return this.#first;
  }

  get last() {
    return this.#last;
  }

  get step() {
    return this.#step;
  }

  [Symbol.for("Deno.customInspect")]() {
    // todo: use incoming `inspect` and `options` arguments to properly indent, wrap content, etc.
    return `${this.constructor.name} { ${this.#first} through ${this.#last} step ${this.#step} }`;
  }

  [Symbol.iterator]() {
    let value = this.#first;
    let done = false;
    const next = (): IteratorResult<T> => {
      if (done) return { value: undefined, done: true };
      const result = { value, done: false };
      done = value[$.compareTo](this.#last) === 0;
      if (!done) value = value[$.add](this.#step);
      return result;
    };
    return Iterator.from({ next });
  }

  entries() {
    const iterator = this[Symbol.iterator]();
    const next = (): IteratorResult<[T, T]> => {
      const { value, done } = iterator.next();
      if (done) return { value: undefined, done: true };
      return { value: [value, value], done: false };
    };
    return Iterator.from({ next });
  }

  has(value: T): boolean {
    return (
      value[$.compareTo](this.#first) >= 0 &&
      value[$.compareTo](this.#last) <= 0 &&
      value[$.sub](this.#first)[$.mod](this.#step)
          [$.compareTo](value.constructor[$.ZERO]) === 0
    );
  }

  keys = this[Symbol.iterator];

  values = this[Symbol.iterator];
}