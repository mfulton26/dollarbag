import $ from "💰/$.ts";

const value = Symbol("$.also");

declare module "💰/$.ts" {
  interface $ {
    also: typeof value;
  }
}

Object.defineProperty($, "also", { value });
