import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "~/env";

const turso = createClient({
  url: env.DATABASE_URL,
  authToken: env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(turso);
