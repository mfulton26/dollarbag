import type Comparable from "💰/Comparable.d.ts";

import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

function value(this: bigint, other: bigint): number {
  return Number(this - other);
}

declare global {
  // deno-lint-ignore no-empty-interface
  interface BigInt extends Comparable<BigInt> {}
}

Object.defineProperty(BigInt.prototype, $.compareTo, { value });
