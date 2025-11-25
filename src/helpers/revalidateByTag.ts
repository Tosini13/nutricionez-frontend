import { revalidateTag } from "next/cache";

export const revalidateByTag = async (tags: string[], paths: string[]) => {
  for (const tag of tags) {
    revalidateTag(tag);
  }

  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  if (!domain) {
    return Response.json({ message: "Domain is required" }, { status: 400 });
  }

  for (const path of paths) {
    await fetch(`${domain}${path}`);
  }
};
