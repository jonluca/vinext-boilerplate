import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const defaultBaseUrl = "http://localhost:3000";
const defaultDatabaseUrl = "postgresql://postgres:postgres@127.0.0.1:5432/vinext_boilerplate";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url().default(defaultDatabaseUrl),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    BASE_URL: z.string().url().default(defaultBaseUrl),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url().default(defaultBaseUrl),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  emptyStringAsUndefined: true,
});
