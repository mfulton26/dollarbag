import $ from "💰/$.ts";
import "💰/$/sign.ts";

function value(this: bigint) {
  if (this === 0n) return 0n;
  return this < 0n ? -1n : 1n;
}

declare global {
  interface BigInt {
    [$.sign]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.sign, { value });
