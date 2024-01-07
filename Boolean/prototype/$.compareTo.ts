import type Comparable from "💰/Comparable.d.ts";

import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

function value(this: boolean, other: boolean): number {
  return Number(this) - Number(other);
}

declare global {
  // deno-lint-ignore no-empty-interface
  interface Boolean extends Comparable<Boolean> {}
}

Object.defineProperty(Boolean.prototype, $.compareTo, { value });
