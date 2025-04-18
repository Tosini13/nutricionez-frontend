import { ContentType, ImageType } from "@/types";

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
  publishedDate: string;
  image: ImageType;
  content: ContentType[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
