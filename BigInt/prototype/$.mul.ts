import $ from "💰/$.ts";
import "💰/$/mul.ts";

function value(this: bigint, other: bigint): bigint {
  return this * other;
}

declare global {
  interface BigInt {
    [$.mul]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.mul, { value });
