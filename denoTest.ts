import { config, parse } from "https://deno.land/x/dotenv/mod.ts";
import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("parse", () => {
  const testDotenv = new TextDecoder("utf-8").decode(
    Deno.readFileSync("./.env"),
  );
  const config = parse(testDotenv);

  assertEquals(
    config.DENO_DUMMY,
    "Hey, i'm the deno dummy environment variable.",
  );
  assertEquals(
    config.ANOTHER_DUMMY,
    "Greetings, im the second dummy",
  );
});
