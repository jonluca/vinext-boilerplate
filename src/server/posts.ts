import { desc } from "drizzle-orm";
import { db } from "~/server/db";
import { posts } from "~/server/schema";

export const listRecentPosts = async (limit: number = 5) =>
  db.select().from(posts).orderBy(desc(posts.createdAt)).limit(limit);
