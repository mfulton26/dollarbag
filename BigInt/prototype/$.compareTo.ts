import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

function value(this: bigint, other: bigint): number {
  return Number(this - other);
}

declare global {
  interface BigInt {
    [$.compareTo]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.compareTo, { value });
