import $ from "💰/$.ts";
import "💰/$/ONE.ts";

const value = 1 as number;

declare global {
  interface NumberConstructor {
    readonly [$.ONE]: typeof value;
  }
}

Object.defineProperty(Number, $.ONE, { value });
