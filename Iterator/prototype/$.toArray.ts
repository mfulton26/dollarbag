import $ from "💰/$.ts";
import "💰/$/toArray.ts";

import * as Iterator from "💰/Iterator.ts";

function value<T>(this: Iterator<T>): T[] {
  const result: T[] = [];
  for (
    let { done, value } = this.next();
    !done;
    ({ done, value } = this.next())
  ) {
    result.push(value);
  }
  return result;
}

declare global {
  interface Iterator<T> {
    [$.toArray]: typeof value;
  }
}

Object.defineProperty(Iterator.prototype, $.toArray, { value });
