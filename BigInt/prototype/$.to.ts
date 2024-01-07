import $ from "💰/$.ts";
import "💰/$/to.ts";

import "💰/BigInt/Progression/deps.ts";

import Progression from "💰/Progression.ts";

function value(this: bigint, end: bigint, { step }: { step?: bigint } = {}) {
  return new Progression(this, end - 1n, step);
}

declare global {
  interface BigInt {
    [$.to]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.to, { value });
