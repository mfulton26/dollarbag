import $ from "💰/$.ts";
import "💰/$/rem.ts";

function value(this: number, other: number): number {
  return this % other;
}

declare global {
  interface Number {
    [$.rem]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.rem, { value });
