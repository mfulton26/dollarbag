import { build, emptyDir } from "dnt";
import { getEntryPoints } from "💰/.tools/dnt/entryPoints.ts";

import * as semver from "std/semver/mod.ts";

console.log(semver.parse("1.2.3"));

const [version] = Deno.args;
if (!version) throw new SyntaxError("version arg required");
semver.parse(version);

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
