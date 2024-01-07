import $ from "💰/$.ts";
import "💰/$/div.ts";

function value(this: number, other: number): number {
  return this / other;
}

declare global {
  interface Number {
    [$.div]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.div, { value });
