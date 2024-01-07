import type Comparable from "💰/Comparable.d.ts";

import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

function value(this: Date, other: Date): number {
  return this.valueOf() - other.valueOf();
}

declare global {
  // deno-lint-ignore no-empty-interface
  interface Date extends Comparable<Date> {}
}

Object.defineProperty(Date.prototype, $.compareTo, { value });
