import $ from "💰/$.ts";
import "💰/$/isPositive.ts";

function value(this: bigint) {
  return this > 0n;
}

declare global {
  interface BigInt {
    [$.isPositive]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.isPositive, { value });
