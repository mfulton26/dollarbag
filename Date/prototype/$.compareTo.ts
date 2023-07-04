import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

function value(this: Date, other: Date): number {
  return this.valueOf() - other.valueOf();
}

declare global {
  interface Date {
    [$.compareTo]: typeof value;
  }
}

Object.defineProperty(Date.prototype, $.compareTo, { value });
