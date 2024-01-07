import $ from "💰/$.ts";
import "💰/$/ZERO.ts";

const value = 0n as bigint;

declare global {
  interface BigIntConstructor {
    readonly [$.ZERO]: typeof value;
  }
}

Object.defineProperty(BigInt, $.ZERO, { value });
