import $ from "💰/$.ts";
import "💰/$/to.ts";

import "💰/Number/Progression/deps.ts";

import Progression from "💰/Progression.ts";

function value(this: number, end: number, { step }: { step?: number } = {}) {
  return new Progression(this, end - 1, step);
}

declare global {
  interface Number {
    [$.to]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.to, { value });
