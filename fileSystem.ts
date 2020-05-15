import { ensureDir } from "https://deno.land/std/fs/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";

const testPath = path.join("./", "foo");
ensureDir(testPath); // returns promise
// not working , missing tpes
