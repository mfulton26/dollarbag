import $ from "💰/$.ts";
import "💰/$/ONE.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigIntConstructor {
    readonly [$.ONE]: bigint;
  }
}

Object[$.defineDataProperty](BigInt, $.ONE, 1n, "read-only");
