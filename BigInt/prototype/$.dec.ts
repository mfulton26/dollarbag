import $ from "💰/$.ts";
import "💰/$/dec.ts";

function value(this: bigint) {
  return this - 1n;
}

declare global {
  interface BigInt {
    [$.dec]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.dec, { value });
