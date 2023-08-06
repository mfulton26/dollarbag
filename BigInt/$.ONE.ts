import $ from "💰/$.ts";
import "💰/$/ONE.ts";

const value = 1n as bigint;

declare global {
  interface BigInt {
    constructor: BigIntConstructor;
  }

  interface BigIntConstructor {
    [$.ONE]: typeof value;
  }
}

Object.defineProperty(BigInt, $.ONE, { value });
