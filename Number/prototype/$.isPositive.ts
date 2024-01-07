import $ from "💰/$.ts";
import "💰/$/isPositive.ts";

function value(this: number) {
  return Object.is(this, 0) || this > 0;
}

declare global {
  interface Number {
    [$.isPositive]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.isPositive, { value });
