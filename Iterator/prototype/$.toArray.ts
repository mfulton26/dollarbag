import $ from "💰/$.ts";
import "💰/$/toArray.ts";
import "💰/Object/$.defineDataProperty.ts";

import * as Iterator from "💰/Iterator.ts";

declare global {
  interface Iterator<T> {
    [$.toArray](): T[];
  }
}

Object[$.defineDataProperty](
  Iterator.prototype,
  $.toArray,
  function value<T>(this: Iterator<T>) {
    const result: T[] = [];
    for (
      let { done, value } = this.next();
      !done;
      ({ done, value } = this.next())
    ) {
      result.push(value);
    }
    return result;
  },
);
