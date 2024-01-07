import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

function value(this: number, other: number): number {
  return this === other ? 0 : this - other;
}

declare global {
  interface Number {
    [$.compareTo]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.compareTo, { value });
