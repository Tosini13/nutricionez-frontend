import Image from "next/image";
import { ButtonLink } from "../Form/Button";
import { ArrowLeftIcon } from "../icons";
import Paragraph from "../Sections/Paragraph";
import { ArticleType } from "./types";

type NewestPostModulePropsType = {
  post: ArticleType;
};

const NewestPostModule: React.FC<NewestPostModulePropsType> = ({ post }) => {
  return (
    <div
      data-testid="newest_post_module"
      className="grid grid-cols-1 gap-x-10 md:grid-cols-[40%_auto]"
    >
      <div className="col-span-1 md:order-2">
        <div className="overflow-hidden h-full">
          <Image
            src={post.image.url}
            alt={post.image.name}
            height={300}
            width={400}
            className="ml-auto max-h-[300px] rounded-3xl"
            style={{
              height: "100%",
              width: "auto",
            }}
          />
        </div>
      </div>
      <div className="col-span-1 space-y-6 pt-10 md:order-1">
        <span className="text-xl font-semibold leading-tight md:text-2xl lg:text-4xl">
          {post.title}
        </span>
        <Paragraph className="text-sm font-medium leading-none text-gray">
          {new Date(post.publishedDate).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
          })}
        </Paragraph>
        <ButtonLink
          className={"group mx-auto w-full sm:w-fit md:ml-0"}
          href={`/blog/${post.slug}`}
        >
          Leer mas
          <ArrowLeftIcon className="ml-3 h-4 w-4 rotate-180 transition-all duration-300 group-hover:ml-5 group-hover:-mr-2 [&_path]:fill-[#FFF]" />
        </ButtonLink>
      </div>
    </div>
  );
};

export default NewestPostModule;
