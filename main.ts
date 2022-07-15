/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import sass from "https://deno.land/x/denosass@1.0.4/mod.ts";

const compiler = sass('routes/index.scss');
compiler.to_file ({
  destDir: "./style",
  destFile: "index.scss", //the extension is set depending on the format.
  format: "compressed"
});

await start(manifest);
