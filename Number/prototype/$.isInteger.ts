import $ from "💰/$.ts";
import "💰/$/isInteger.ts";

function value(this: number) {
  return Number.isInteger(this);
}

declare global {
  interface Number {
    [$.isInteger]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.isInteger, { value });
