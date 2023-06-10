import { build, emptyDir } from "dnt";
import { getEntryPoints } from "💰/.tools/dnt/entryPoints.ts";

import * as semver from "std/semver/mod.ts";

const version = semver.valid(Deno.args[0]);
if (!version) throw new SyntaxError("valid semver must be specified");

const outDir = "./node";

await emptyDir(outDir);

await build({
  entryPoints: await getEntryPoints(),
  outDir,
  shims: { deno: "dev", crypto: "dev" },
  scriptModule: false,
  importMap: "./deno.json",
  package: {
    name: "dollarbag",
    version,
    description: "Fluent modular JavaScript utility library.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/mfulton26/dollarbag.git",
    },
    bugs: {
      url: "https://github.com/mfulton26/dollarbag/issues",
    },
    keywords: ["stdlib", "util"],
  },
  async postBuild() {
    await Deno.copyFile("LICENSE", `${outDir}/LICENSE`);
    await Deno.copyFile("README.md", `${outDir}/README.md`);
  },
});
