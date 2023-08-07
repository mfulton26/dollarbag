import $ from "💰/$.ts";
import "💰/$/ONE.ts";

const value = 1n as bigint;

declare global {
  interface BigIntConstructor {
    readonly [$.ONE]: typeof value;
  }
}

Object.defineProperty(BigInt, $.ONE, { value });
