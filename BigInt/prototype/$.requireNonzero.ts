import $ from "💰/$.ts";
import "💰/$/requireNonzero.ts";

function value(this: bigint, message = "this is zero") {
  if (this === 0n) throw new RangeError(message);
  return this;
}

declare global {
  interface BigInt {
    [$.requireNonzero]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.requireNonzero, { value });
