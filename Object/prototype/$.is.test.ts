import $ from "💰/$.ts";
import "💰/Object/prototype/$.is.ts";

import { assert } from "std/testing/asserts.ts";

Deno.test("example", () => {
  assert(NaN[$.is](NaN));
  assert((0)[$.is](0));
  assert((-0)[$.is](-0));
  assert(!(0)[$.is](-0));
});
