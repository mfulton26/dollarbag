function isPrimitiveInterfaceName(interfaceName: string) {
  switch (interfaceName) {
    case "String":
    case "Number":
    case "BigInt":
    case "Boolean":
    case "Symbol":
    case "Object":
    case "Function":
      return true;
    default:
      return false;
  }
}
async function createKeyFile(name: string) {
  if (typeof name !== "string") throw new TypeError("name must be a string");
  const path = `$/${name}.ts`;
  const data = `\
/**
 * Augments {@linkcode $} with \`"${name}"\`.
 *
 * @module
 */

import $ from "💰/$.ts";

const value = Symbol("$.${name}");

declare module "💰/$.ts" {
  interface DollarSign {
    ${name}: typeof value;
  }
}

Object.defineProperty($, "${name}", { value });
`;
  await Deno.writeTextFile(path, data, { createNew: true });
  return { path };
}

async function createMethodFiles(target: string, name: string) {
  const dirPath = `${target.replaceAll(".", "/")}`;
  const path = `${dirPath}/$.${name}.ts`;
  const testPath = `${dirPath}/$.${name}.test.ts`;
  const interfaceName = target.endsWith(".prototype")
    ? target.slice(0, -".prototype".length)
    : `${target}Constructor`;
  const self = isPrimitiveInterfaceName(interfaceName)
    ? interfaceName.toLowerCase()
    : interfaceName;
  await Deno.mkdir(dirPath, { recursive: true });
  {
    const data = `\
import $ from "💰/$.ts";
import "💰/$/${name}.ts";
import "💰/Object/$.defineDataProperty.ts";

declare global {
  interface ${interfaceName} {
    [$.${name}](): void;
  }
}

Object[$.defineDataProperty](
  ${target},
  $.${name},
  function (this: ${self}) {
    throw new Error("not yet implemented");
  },
);
`;
    await Deno.writeTextFile(path, data, { createNew: true });
  }
  {
    const data = `\
import $ from "💰/$.ts";
import "💰/${path}";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("example", () => {
  throw new Error("not yet implemented");
});
`;
    await Deno.writeTextFile(testPath, data, { createNew: true });
  }
  return { path, testPath };
}

const commands = new Map<string, (...args: unknown[]) => Promise<void>>()
  .set("key", async (name) => {
    if (typeof name !== "string") throw new TypeError("name must be a string");
    await createKeyFile(name);
  })
  .set("method", async (name, ...targets) => {
    if (typeof name !== "string") throw new TypeError("name must be a string");
    try {
      await createKeyFile(name);
    } catch {
      // ignore
    }
    if (targets.length === 0) {
      targets = prompt("targets:")?.split(",") ?? [];
    }
    for (const target of targets) {
      if (typeof target !== "string") {
        throw new TypeError("each target must be a string");
      }
      const { path } = await createMethodFiles(target, name);
      try {
        await new Deno.Command("open", { args: [path] }).output();
      } catch {
        // ignore
      }
    }
  });

const [commandName, ...args] = Deno.args;

if (commandName === undefined) {
  console.log(`Usage:

  define key name

    EXAMPLE: define key requireNonzero

  define method name ...targets

    EXAMPLE: define method requireNonzero BigInt.prototype Number.prototype
`);
  Deno.exit(-1);
}

const command = commands.get(commandName);

if (command === undefined) {
  console.error(`unrecognized command: ${commandName}`);
  Deno.exit(-1);
}

await command(...args);
