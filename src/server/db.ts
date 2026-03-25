import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/env";
import * as schema from "~/server/schema";

const createDb = () => {
  const client = postgres(env.DATABASE_URL, {
    prepare: false,
  });

  return drizzle(client, { schema });
};

const globalForDb = globalThis as unknown as {
  db: ReturnType<typeof createDb> | undefined;
};

export const db = globalForDb.db ?? createDb();

if (env.NODE_ENV !== "production") {
  globalForDb.db = db;
}
