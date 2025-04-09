import { ArticleType } from "@/components/Articles/types";
import { ButtonLink } from "@/components/Form/Button";
import { ArrowLeftIcon } from "@/components/icons";
import Paragraph from "@/components/Sections/Paragraph";
import Section from "@/components/Sections/Section";
import SectionTitle from "@/components/Sections/SectionTitle";
import { ENV } from "@/env";
import Image from "next/image";
import { FC } from "react";

const getUrl = (id: string) =>
  `api/nutricionez-articles/${id}?populate[image][fields][0]=name&populate[image][fields][1]=url`;

type StrapiResponseType = {
  data: ArticleType;
};

type ArticlePropsType = {
  params: Promise<{ articleName: string }>;
};

const Article: FC<ArticlePropsType> = async (props) => {
  const { articleName } = await props.params;
  const { data }: StrapiResponseType = await fetch(
    `${ENV.STRAPI_URL}/${getUrl(articleName)}`
  ).then((res) => res.json());

  return (
    <main data-testid="article" className="relative min-h-screen max-w-none">
      <Section id="post_content" className="max-w-3xl md:mx-auto">
        <SectionTitle>{data.title}</SectionTitle>
        <Paragraph className="font-medium text-secondary">
          {new Date(data.publish_date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </Paragraph>
        <Paragraph className="font-normal  text-gray">
          Written by:{" "}
          <span className="font-medium">
            {
              // data.author
              "Author"
            }
          </span>{" "}
          <br className="inline sm:hidden" />
          {/* 
            TODO: enable when can compute the reading time automatically: 200 words/min
            <span className="hidden sm:inline">/</span> 9 min. reading */}
        </Paragraph>
        <img
          src={`${ENV.STRAPI_URL}${data.image.url}`}
          alt={data.image.name}
          className="my-10 w-full rounded-3xl"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div className="space-y-4 [&>p]:leading-8 [&>p]:tracking-wide">
          {data.content.map(
            (content, index) =>
              content.type === "paragraph" && (
                <Paragraph key={index}>{content.children[0].text}</Paragraph>
              )
          )}
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
