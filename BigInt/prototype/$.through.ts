import $ from "💰/$.ts";
import "💰/$/through.ts";

import "💰/BigInt/Progression/deps.ts";

import Progression from "💰/Progression.ts";

function value(this: bigint, end: bigint, { step }: { step?: bigint } = {}) {
  return new Progression(this, end, step);
}

declare global {
  interface BigInt {
    [$.through]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.through, { value });
