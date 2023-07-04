import $ from "💰/$.ts";
import "💰/$/build.ts";

function value<T>(generate: () => Iterable<T>): string {
  let result = "";
  for (const value of generate()) result += value;
  return result;
}

declare global {
  interface StringConstructor {
    [$.build]: typeof value;
  }
}

Object.defineProperty(String, $.build, { value });
