import { revalidateTag } from "next/cache";

export const revalidateByTag = async (tags: string[], paths: string[]) => {
  for (const tag of tags) {
    revalidateTag(tag);
  }

  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  if (!domain) {
    throw new Error("Domain is required");
  }

  await Promise.all(paths.map((path) => fetch(`${domain}${path}`)));
};
