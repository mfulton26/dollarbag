import $ from "💰/$.ts";
import "💰/$/mul.ts";

function value(this: number, other: number): number {
  return this * other;
}

declare global {
  interface Number {
    [$.mul]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.mul, { value });
