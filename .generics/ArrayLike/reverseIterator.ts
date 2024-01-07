import * as Iterator from "💰/Iterator.ts";

export default function ArrayLikeReverseIterator<T>(this: ArrayLike<T>) {
  let index = this.length - 1;
  const next = (): IteratorResult<T> => {
    if (index < 0) return { value: undefined, done: true };
    const { [index--]: value } = this;
    return { value, done: false };
  };
  return Iterator.from({ next });
}
