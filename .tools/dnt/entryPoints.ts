import type { BuildOptions } from "dnt";

export async function getEntryPoints() {
  const result: BuildOptions["entryPoints"] = [];

  for await (const entry of Deno.readDir("./")) {
    if (entry.isDirectory || !/^(?!\.).+(?<!\.test)\.ts$/.test(entry.name)) {
      continue;
    }

    const key = entry.name.slice(0, entry.name.lastIndexOf("."));
    result.push({ name: `./${key}`, path: `./${entry.name}` });
  }

  return result;
}
