import $ from "💰/$.ts";
import "💰/$/requireSafeInteger.ts";

function value(this: number, message = `${this} is not a safe integer`) {
  if (Number.isSafeInteger(this)) return this;
  throw new RangeError(message);
}

declare global {
  interface Number {
    [$.requireSafeInteger]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.requireSafeInteger, { value });
