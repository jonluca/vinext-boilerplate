import type { NextApiRequest, NextApiResponse } from "next";
import { listRecentPosts } from "~/server/posts";

export default async function handler(_request: NextApiRequest, response: NextApiResponse) {
  const posts = await listRecentPosts();

  response.status(200).json({ posts });
}
