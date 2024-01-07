import $ from "💰/$.ts";
import "💰/$/through.ts";

import "💰/Number/Progression/deps.ts";

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
