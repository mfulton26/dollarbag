import $ from "💰/$.ts";
import "💰/$/inc.ts";

function value(this: bigint) {
  return this + 1n;
}

declare global {
  interface BigInt {
    [$.inc]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.inc, { value });
