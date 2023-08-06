import $ from "💰/$.ts";
import "💰/$/requireNonzero.ts";

function value(this: number, message = "this is zero") {
  if (this === 0) throw new RangeError(message);
  return this;
}

declare global {
  interface Number {
    [$.requireNonzero]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.requireNonzero, { value });
