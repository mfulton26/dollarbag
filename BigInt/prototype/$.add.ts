import $ from "💰/$.ts";
import "💰/$/add.ts";

function value(this: bigint, other: bigint): bigint {
  return this + other;
}

declare global {
  interface BigInt {
    [$.add]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.add, { value });
