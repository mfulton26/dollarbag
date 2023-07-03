import $ from "💰/$.ts";
import "💰/$/mod.ts";

function value(this: number, other: number): number {
  return ((this % other) + other) % other;
}

declare global {
  interface Number {
    [$.mod]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.mod, { value });
