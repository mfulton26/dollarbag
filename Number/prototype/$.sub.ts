import $ from "💰/$.ts";
import "💰/$/sub.ts";

function value(this: number, other: number): number {
  return this - other;
}

declare global {
  interface Number {
    [$.sub]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.sub, { value });
