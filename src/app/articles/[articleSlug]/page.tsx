import { ArticleType } from "@/components/Articles/types";
import { ButtonLink } from "@/components/Form/Button";
import { ArrowLeftIcon } from "@/components/icons";
import Paragraph from "@/components/Sections/Paragraph";
import Section from "@/components/Sections/Section";
import SectionTitle from "@/components/Sections/SectionTitle";
import { ENV } from "@/env";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { FC } from "react";

const getUrl = (slug: string) =>
  `api/nutricionez-articles?filters\[slug\][$eq]=${slug}&populate[image][fields][0]=name&populate[image][fields][1]=url&populate[author][fields][2]=firstName&populate[author][fields][3]=lastName`;

type StrapiResponseType = {
  data: ArticleType[];
};

type ArticlePropsType = {
  params: Promise<{ articleSlug: string }>;
};

const Article: FC<ArticlePropsType> = async (props) => {
  const { articleSlug } = await props.params;
  const { data }: StrapiResponseType = await fetch(
    `${ENV.STRAPI_URL}/${getUrl(articleSlug)}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  const article = data[0];

  return (
    <main data-testid="article" className="relative min-h-screen max-w-none">
      <Section id="post_content" className="max-w-3xl md:mx-auto">
        <SectionTitle Component="h1">{article.title}</SectionTitle>
        <Paragraph className="font-medium text-secondary">
          {new Date(article.publishedDate).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </Paragraph>
        <Paragraph className="font-normal  text-gray">
          Written by:{" "}
          <span className="font-medium">
            {article.author.firstName} {article.author.lastName}
          </span>{" "}
          <br className="inline sm:hidden" />
          {/* 
            TODO: enable when can compute the reading time automatically: 200 words/min
            <span className="hidden sm:inline">/</span> 9 min. reading */}
        </Paragraph>
        <Image
          src={article.image.url}
          alt={article.image.name}
          className="my-10 w-full rounded-3xl"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div className="space-y-4 [&_p]:leading-8 [&_p]:tracking-wide [&_a]:text-main [&_a]:underline">
          <BlocksRenderer content={article.content} />
        </div>
      </Section>

      <div className="mx-auto w-full max-w-3xl border-b border-primary-light" />
      <Section
        id="see_more"
        className="max-w-3xl overflow-x-visible md:mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <Paragraph className="mt-8 text-4xl font-semibold leading-snug">
              ¿Quieres empezar a{" "}
              <span className="text-secondary">
                cuidar tu salud y tu cuerpo
              </span>
              ? Descubre cómo puedes lograr este objetivo conmigo.
            </Paragraph>
            <ButtonLink
              className="group mx-auto mt-4 w-full sm:w-fit md:ml-0"
              href="/"
            >
              Ver mas
              <ArrowLeftIcon className="ml-3 h-4 w-4 rotate-180 transition-all duration-300 group-hover:ml-5 group-hover:-mr-2 [&_path]:fill-[#FFF]" />
            </ButtonLink>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/assets/images/esther/esther_web_bg.webp"
              alt="Esther"
              className="mx-auto w-full max-w-sm lg:-mr-24"
              width={384}
              height={440}
            />
          </div>
        </div>
      </Section>
      {/* <Section
        id="latestPosts"
        className="mx-0 max-w-none bg-primary-light px-0 lg:px-4"
      >
        <div className="mx-0 max-w-screen-xl lg:mx-auto">
          <LatestPostsModule latestPosts={data.latestPosts} />
        </div>
      </Section> */}
    </main>
  );
};

export default Article;
