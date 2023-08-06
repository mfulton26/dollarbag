import $ from "💰/$.ts";
import "💰/$/through.ts";

import "💰/Number/$.ONE.ts";
import "💰/Number/$.ZERO.ts";
import "💰/Number/prototype/$.add.ts";
import "💰/Number/prototype/$.compareTo.ts";
import "💰/Number/prototype/$.mod.ts";
import "💰/Number/prototype/$.neg.ts";
import "💰/Number/prototype/$.requireNonzero.ts";
import "💰/Number/prototype/$.requireSafePrecision.ts";
import "💰/Number/prototype/$.sub.ts";

import Progression from "💰/Progression.ts";

function value(this: number, end: number, { step }: { step?: number } = {}) {
  return new Progression(this, end, step);
}

declare global {
  interface Number {
    [$.through]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.through, { value });
