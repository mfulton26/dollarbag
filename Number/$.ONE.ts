import $ from "💰/$.ts";
import "💰/$/ONE.ts";

const value = 1 as number;

declare global {
  interface Number {
    constructor: NumberConstructor;
  }

  interface NumberConstructor {
    [$.ONE]: typeof value;
  }
}

Object.defineProperty(Number, $.ONE, { value });
