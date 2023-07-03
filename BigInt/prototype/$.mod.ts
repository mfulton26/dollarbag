import $ from "💰/$.ts";
import "💰/$/mod.ts";

function value(this: bigint, other: bigint): bigint {
  return ((this % other) + other) % other;
}

declare global {
  interface BigInt {
    [$.mod]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.mod, { value });
