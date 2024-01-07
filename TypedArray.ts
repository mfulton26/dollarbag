// deno-lint-ignore-file no-empty-interface

declare global {
  interface TypedArray<T> {
    readonly length: number;
    [index: number]: T;
  }
  interface TypedArrayConstructor<R extends TypedArray<T> = never, T = never> {
    readonly prototype: TypedArray<T>;
    readonly BYTES_PER_ELEMENT: number;
    from(arrayLike: Iterable<T>): R;
  }

  interface Int8Array extends TypedArray<number> {}
  interface Uint8Array extends TypedArray<number> {}
  interface Uint8ClampedArray extends TypedArray<number> {}
  interface Int16Array extends TypedArray<number> {}
  interface Uint16Array extends TypedArray<number> {}
  interface Int32Array extends TypedArray<number> {}
  interface Uint32Array extends TypedArray<number> {}
  interface Float32Array extends TypedArray<number> {}
  interface Float64Array extends TypedArray<number> {}
  interface BigInt64Array extends TypedArray<bigint> {}
  interface BigUint64Array extends TypedArray<bigint> {}

  interface Int8ArrayConstructor
    extends TypedArrayConstructor<Int8Array, number> {}
  interface Uint8ArrayConstructor
    extends TypedArrayConstructor<Uint8Array, number> {}
  interface Uint8ClampedArrayConstructor
    extends TypedArrayConstructor<Uint8Array, number> {}
  interface Int16ArrayConstructor
    extends TypedArrayConstructor<Int16Array, number> {}
  interface Uint16ArrayConstructor
    extends TypedArrayConstructor<Uint16Array, number> {}
  interface Int32ArrayConstructor
    extends TypedArrayConstructor<Int32Array, number> {}
  interface Uint32ArrayConstructor
    extends TypedArrayConstructor<Uint32Array, number> {}
  interface Float32ArrayConstructor
    extends TypedArrayConstructor<Float32Array, number> {}
  interface Float64ArrayConstructor
    extends TypedArrayConstructor<Float64Array, number> {}
  interface BigInt64ArrayConstructor
    extends TypedArrayConstructor<BigInt64Array, bigint> {
    // see https://github.com/microsoft/TypeScript/issues/45198
    from(arrayLike: Iterable<bigint>): BigInt64Array;
  }
  interface BigUint64ArrayConstructor
    extends TypedArrayConstructor<BigUint64Array, bigint> {
    // see https://github.com/microsoft/TypeScript/issues/45198
    from(arrayLike: Iterable<bigint>): BigUint64Array;
  }
}

export default Object.getPrototypeOf(Int8Array) as TypedArrayConstructor;
