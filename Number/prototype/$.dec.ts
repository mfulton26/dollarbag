import $ from "💰/$.ts";
import "💰/$/dec.ts";

function value(this: number) {
  return this - 1;
}

declare global {
  interface Number {
    [$.dec]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.dec, { value });
