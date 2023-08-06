import $ from "💰/$.ts";
import "💰/$/inc.ts";

function value(this: number) {
  return this + 1;
}

declare global {
  interface Number {
    [$.inc]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.inc, { value });
