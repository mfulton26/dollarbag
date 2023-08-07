import "💰/Number/$.ONE.ts";
import "💰/Number/$.ZERO.ts";
import "💰/Number/prototype/$.add.ts";
import "💰/Number/prototype/$.compareTo.ts";
import "💰/Number/prototype/$.mod.ts";
import "💰/Number/prototype/$.neg.ts";
import "💰/Number/prototype/$.requireNonzero.ts";
import "💰/Number/prototype/$.requireSafePrecision.ts";
import "💰/Number/prototype/$.sub.ts";

declare global {
  interface Number {
    constructor: NumberConstructor;
  }
}
