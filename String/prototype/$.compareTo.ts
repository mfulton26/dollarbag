import type Comparable from "💰/Comparable.d.ts";

import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

function value(this: string, other: string): number {
  return this === other ? 0 : this < other ? -1 : 1;
}

declare global {
  // deno-lint-ignore no-empty-interface
  interface String extends Comparable<String> {}
}

Object.defineProperty(String.prototype, $.compareTo, { value });
