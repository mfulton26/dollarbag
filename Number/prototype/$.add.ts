import $ from "💰/$.ts";
import "💰/$/add.ts";

function value(this: number, other: number): number {
  return this + other;
}

declare global {
  interface Number {
    [$.add]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.add, { value });
