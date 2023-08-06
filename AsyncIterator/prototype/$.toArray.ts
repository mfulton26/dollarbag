import $ from "💰/$.ts";
import "💰/$/toArray.ts";

import * as AsyncIterator from "💰/AsyncIterator.ts";

async function value<T>(this: AsyncIterator<T>): Promise<T[]> {
  const result: T[] = [];
  for (
    let { done, value } = await this.next();
    !done;
    ({ done, value } = await this.next())
  ) {
    result.push(value);
  }
  return result;
}

declare global {
  interface AsyncIterator<T> {
    [$.toArray]: typeof value;
  }
}

Object.defineProperty(AsyncIterator.prototype, $.toArray, { value });
