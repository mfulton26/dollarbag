import $ from "💰/$.ts";
import "💰/$/ONE.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface NumberConstructor {
    readonly [$.ONE]: number;
  }
}

Object[$.defineDataProperty](Number, $.ONE, 1, "read-only");
