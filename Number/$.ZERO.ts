import $ from "💰/$.ts";
import "💰/$/ZERO.ts";

const value = 0 as number;

declare global {
  interface Number {
    constructor: NumberConstructor;
  }

  interface NumberConstructor {
    [$.ZERO]: typeof value;
  }
}

Object.defineProperty(Number, $.ZERO, { value });
