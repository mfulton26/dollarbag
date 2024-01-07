import "💰/BigInt/$.ONE.ts";
import "💰/BigInt/$.ZERO.ts";
import "💰/BigInt/prototype/$.add.ts";
import "💰/BigInt/prototype/$.compareTo.ts";
import "💰/BigInt/prototype/$.mod.ts";
import "💰/BigInt/prototype/$.neg.ts";
import "💰/BigInt/prototype/$.requireNonzero.ts";
import "💰/BigInt/prototype/$.requireSafePrecision.ts";
import "💰/BigInt/prototype/$.sub.ts";

declare global {
  interface BigInt {
    constructor: BigIntConstructor;
  }
}
