import $ from "💰/$.ts";
import "💰/$/isNegative.ts";

function value(this: number) {
  return Object.is(this, -0) || this < 0;
}

declare global {
  interface Number {
    [$.isNegative]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.isNegative, { value });
