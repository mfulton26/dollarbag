import $ from "💰/$.ts";
import "💰/$/sign.ts";

function value(this: number) {
  return Math.sign(this);
}

declare global {
  interface Number {
    [$.sign]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.sign, { value });
