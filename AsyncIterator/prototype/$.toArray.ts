import $ from "💰/$.ts";
import "💰/$/toArray.ts";
import "💰/Object/$.defineDataProperty.ts";

import * as AsyncIterator from "💰/AsyncIterator.ts";

declare global {
  interface AsyncIterator<T> {
    [$.toArray](): Promise<T[]>;
  }
}

Object[$.defineDataProperty](
  AsyncIterator.prototype,
  $.toArray,
  async function <T>(this: AsyncIterator<T>) {
    const result: T[] = [];
    for (
      let { done, value } = await this.next();
      !done;
      ({ done, value } = await this.next())
    ) {
      result.push(value);
    }
    return result;
  },
);
