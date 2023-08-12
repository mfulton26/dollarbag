import $ from "💰/$.ts";
import "💰/$/ZERO.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface NumberConstructor {
    readonly [$.ZERO]: number;
  }
}

Object[$.defineDataProperty](Number, $.ZERO, 0, "read-only");
