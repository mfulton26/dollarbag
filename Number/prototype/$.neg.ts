import $ from "💰/$.ts";
import "💰/$/neg.ts";

function value(this: number) {
  return -this;
}

declare global {
  interface Number {
    [$.neg]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.neg, { value });
