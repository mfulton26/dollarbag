import $ from "💰/$.ts";
import "💰/$/ZERO.ts";

const value = 0 as number;

declare global {
  interface NumberConstructor {
    readonly [$.ZERO]: typeof value;
  }
}

Object.defineProperty(Number, $.ZERO, { value });
