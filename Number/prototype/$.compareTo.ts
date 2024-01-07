import type Comparable from "💰/Comparable.d.ts";

import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

function value(this: number, other: number): number {
  return this === other ? 0 : this - other;
}

declare global {
  // deno-lint-ignore no-empty-interface
  interface Number extends Comparable<Number> {}
}

Object.defineProperty(Number.prototype, $.compareTo, { value });
