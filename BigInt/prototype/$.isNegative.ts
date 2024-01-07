import $ from "💰/$.ts";
import "💰/$/isNegative.ts";

function value(this: bigint) {
  return this < 0n;
}

declare global {
  interface BigInt {
    [$.isNegative]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.isNegative, { value });
