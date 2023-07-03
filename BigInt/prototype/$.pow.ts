import $ from "💰/$.ts";
import "💰/$/pow.ts";

function value(this: bigint, other: bigint): bigint {
  return this ** other;
}

declare global {
  interface BigInt {
    [$.pow]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.pow, { value });
