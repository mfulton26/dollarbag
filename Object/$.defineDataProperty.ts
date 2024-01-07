import $ from "💰/$.ts";
import "💰/$/defineDataProperty.ts";

declare global {
  interface ObjectConstructor {
    [$.defineDataProperty]<T, K extends keyof T>(
      target: T,
      propertyKey: K,
      // deno-lint-ignore no-explicit-any
      value: T[K] extends (...args: any) => any
        ? (this: T, ...args: Parameters<T[K]>) => ReturnType<T[K]>
        : T[K],
      variant?: "read-only",
    ): T;
  }
}

const readonlyDescriptor = Object.create(null);

const writableDescriptor = Object.create(null);
writableDescriptor.configurable = true;
writableDescriptor.enumerable = false;
writableDescriptor.writable = true;

function defineDataProperty<T, K extends keyof T>(
  target: T,
  propertyKey: K,
  // deno-lint-ignore no-explicit-any
  value: T[K] extends (...args: any) => any
    ? (this: T, ...args: Parameters<T[K]>) => ReturnType<T[K]>
    : T[K],
  variant?: "read-only",
): T {
  const descriptor = variant === "read-only"
    ? readonlyDescriptor
    : writableDescriptor;
  descriptor.value = value;
  return Object.defineProperty(target, propertyKey, descriptor);
}

defineDataProperty(Object, $.defineDataProperty, defineDataProperty);
