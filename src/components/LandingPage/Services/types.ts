import { ContentType, ImageType } from "@/types";

export type ServiceType = {
  documentId: string;
  title: string;
  description: ContentType[];
  image: ImageType;
  largeImage: ImageType;
};
