import $ from "💰/$.ts";
import "💰/$/pow.ts";

function value(this: number, other: number): number {
  return this ** other;
}

declare global {
  interface Number {
    [$.pow]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.pow, { value });
