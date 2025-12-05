import { revalidateByTag } from "@/helpers/revalidateByTag";

export async function POST(request: Request) {
  /**
   * Check secret token
   */

  const { slug } = await request.json();
  if (!slug) {
    return Response.json({ message: "Slug is required" }, { status: 400 });
  }
  try {
    await revalidateByTag(["blog", `post-${slug}`], [`/blog/${slug}`, "/blog"]);
    return Response.json({ revalidated: true, warmed: true });
  } catch (error) {
    return Response.json(
      { revalidated: false, warmed: false, error },
      { status: 500 }
    );
  }
}
