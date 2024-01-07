import $ from "💰/$.ts";
import "💰/$/div.ts";

function value(this: bigint, other: bigint): bigint {
  return this / other;
}

declare global {
  interface BigInt {
    [$.div]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.div, { value });
