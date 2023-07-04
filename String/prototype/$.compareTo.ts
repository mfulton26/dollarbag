import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

function value(this: string, other: string): number {
  return this === other ? 0 : this < other ? -1 : 1;
}

declare global {
  interface String {
    [$.compareTo]: typeof value;
  }
}

Object.defineProperty(String.prototype, $.compareTo, { value });
