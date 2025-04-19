import { ImageType } from "@/types";

export type ServiceType = {
  documentId: string;
  slug: string;
  title: string;
  description: string;
  image: ImageType;
  largeImage: ImageType;
};
