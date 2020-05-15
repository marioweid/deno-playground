import * as path from "https://deno.land/std/path/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// automaticly loads the .env file into the process
import "https://deno.land/x/dotenv/load.ts";
// const dummyVar = Deno.env.get("DENO_DUMMY"); //

// returns all env vars
console.log(config());
// returns specific env var
const dummyVar = config().DENO_DUMMY;

// returns current working directory
const resolved = Deno.cwd();

console.log(resolved);
console.log(dummyVar);

// deno run --allow-read=./ --allow-env .\cwdEnv.ts
