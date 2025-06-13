import { ImageType } from "@/types";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type PostType = {
  id: string;
  title: string;
  date: string;
  imgSrc: string;
  category: string;
  author: string;
};

export type PostCategory = {
  title: string;
};

export type ArticleType = {
  documentId: string;
  id: string;
  title: string;
  slug: string;
  publishedDate: string;
  image: ImageType;
  content: BlocksContent;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: {
    id: number;
    documentId: string;
    firstName: string;
    lastName: string;
  };
};
