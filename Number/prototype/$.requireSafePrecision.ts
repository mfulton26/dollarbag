import $ from "💰/$.ts";
import "💰/$/requireSafePrecision.ts";
import "💰/Object/$.defineDataProperty.ts";

import "💰/Number/prototype/$.requireSafeInteger.ts";

declare global {
  interface Number {
    [$.requireSafePrecision](message?: string): number;
  }
}

Object[$.defineDataProperty](
  Number.prototype,
  $.requireSafePrecision,
  Number.prototype[$.requireSafeInteger],
);
