import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

function value(this: boolean, other: boolean): number {
  return Number(this) - Number(other);
}

declare global {
  interface Boolean {
    [$.compareTo]: typeof value;
  }
}

Object.defineProperty(Boolean.prototype, $.compareTo, { value });
