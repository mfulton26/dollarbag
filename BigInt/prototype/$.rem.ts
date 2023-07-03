import $ from "💰/$.ts";
import "💰/$/rem.ts";

function value(this: bigint, other: bigint): bigint {
  return this % other;
}

declare global {
  interface BigInt {
    [$.rem]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.rem, { value });
