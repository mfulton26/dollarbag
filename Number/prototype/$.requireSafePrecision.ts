import $ from "💰/$.ts";
import "💰/$/requireSafePrecision.ts";

import "💰/Number/prototype/$.requireSafeInteger.ts";

const value = Number.prototype[$.requireSafeInteger];

declare global {
  interface Number {
    [$.requireSafePrecision]: typeof value;
  }
}

Object.defineProperty(Number.prototype, $.requireSafePrecision, { value });
