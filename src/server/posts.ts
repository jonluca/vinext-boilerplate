import { db } from "~/server/db";

export const listRecentPosts = async (limit: number = 5) =>
  db.post.findMany({
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });
