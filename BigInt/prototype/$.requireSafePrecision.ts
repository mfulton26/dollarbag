import $ from "💰/$.ts";
import "💰/$/requireSafePrecision.ts";

function value(this: bigint) {
  return this;
}

declare global {
  interface BigInt {
    [$.requireSafePrecision]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.requireSafePrecision, { value });
