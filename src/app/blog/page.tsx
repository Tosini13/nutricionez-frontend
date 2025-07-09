import AboutMeBlogModule from "@/components/Articles/AboutMeBlogModule";
import LatestPostsModule from "@/components/Articles/LatestPostsModule";
import NewestPostModule from "@/components/Articles/NewestPostModule";
import PostsModule from "@/components/Articles/PostsModule";
import { ArticleType } from "@/components/Articles/types";
import Section from "@/components/Sections/Section";
import { ENV } from "@/env";
import { FC } from "react";

const URL =
  "api/nutricionez-articles?populate[image][fields][0]=name&populate[image][fields][1]=url";

type StrapiResponseType = {
  data?: ArticleType[];
};

const Articles: FC = async () => {
  const { data }: StrapiResponseType = await fetch(`${ENV.STRAPI_URL}/${URL}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <main data-testid="posts" className="relative min-h-screen max-w-none">
      {data && (
        <Section id="newestPost" className="mt-6">
          <NewestPostModule post={data?.[0]} />
        </Section>
      )}
      {data && (
        <Section
          id="latestPosts"
          className="mx-0 max-w-none bg-primary-light px-0 lg:px-4"
        >
          <div className="mx-0 max-w-screen-xl lg:mx-auto">
            <LatestPostsModule latestPosts={data?.slice(0, 4)} />
          </div>
        </Section>
      )}
      <Section id="aboutMe">
        <AboutMeBlogModule />
      </Section>
      {data && data?.length > 1 && (
        <Section id="allPosts">
          <PostsModule categories={[]} posts={data} hasNext={false} />
        </Section>
      )}
    </main>
  );
};

export default Articles;
