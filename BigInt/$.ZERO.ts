import $ from "💰/$.ts";
import "💰/$/ZERO.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface BigIntConstructor {
    readonly [$.ZERO]: bigint;
  }
}

Object[$.defineDataProperty](BigInt, $.ZERO, 0n, "read-only");
