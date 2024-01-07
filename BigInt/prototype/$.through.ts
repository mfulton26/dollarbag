import $ from "💰/$.ts";
import "💰/$/through.ts";

import "💰/BigInt/$.ONE.ts";
import "💰/BigInt/$.ZERO.ts";
import "💰/BigInt/prototype/$.add.ts";
import "💰/BigInt/prototype/$.compareTo.ts";
import "💰/BigInt/prototype/$.mod.ts";
import "💰/BigInt/prototype/$.neg.ts";
import "💰/BigInt/prototype/$.requireNonzero.ts";
import "💰/BigInt/prototype/$.requireSafePrecision.ts";
import "💰/BigInt/prototype/$.sub.ts";

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
