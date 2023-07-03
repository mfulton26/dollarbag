import $ from "💰/$.ts";
import "💰/$/compareTo.ts";

export default interface Comparable<T extends Comparable<T>> {
  /**
   * Compares this value to another value for order (returns zero for same, negative for before, positive for after, and `NaN` for indeterminate).
   *
   * @param other the other value to compare against
   */
  [$.compareTo](other: T): number;
}
