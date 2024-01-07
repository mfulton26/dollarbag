import $ from "💰/$.ts";
import "💰/$/neg.ts";

function value(this: bigint) {
  return -this;
}

declare global {
  interface BigInt {
    [$.neg]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, $.neg, { value });
