import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Paragraph from "../Sections/Paragraph";
import { ArticleType } from "./types";

type PostTilePropsType = {
  className?: string;
  post: ArticleType;
};

const PostTile: React.FC<PostTilePropsType> = ({ post, className }) => (
  <div
    data-testid="post_tile"
    className={twMerge(
      "group flex flex-col space-y-2 overflow-hidden rounded-xl transition-all duration-300 hover:bg-primary-light min-h-[250px]",
      className
    )}
  >
    <div className="aspect-video shadow-lg rounded-xl overflow-hidden w-full">
      <Image
        src={post.image.url}
        alt={post.image.name}
        className="w-full h-full shadow-lg transition-all duration-300 group-hover:scale-105"
        width={100}
        height={100}
      />
    </div>
    <div className="flex grow flex-col p-2">
      <h3 className="grow" data-role="title">
        {post.title}
      </h3>
      <Paragraph className="text-gray">
        {new Date(post.publishedDate).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
        })}
      </Paragraph>
    </div>
  </div>
);

export default PostTile;
