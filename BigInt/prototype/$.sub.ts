import $ from "💰/$.ts";
import "💰/$/sub.ts";

function value(this: bigint, other: bigint): bigint {
  return this - other;
}

declare global {
  interface BigInt {
    [$.sub]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.sub, { value });
