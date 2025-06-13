import { ImageType } from "@/types";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type ServiceType = {
  documentId: string;
  slug: string;
  title: string;
  description: BlocksContent;
  image: ImageType;
  largeImage: ImageType;
};
