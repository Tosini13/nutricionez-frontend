export type ImageType = {
  documentId: string;
  id: number;
  name: string;
  url: string;
};

export type ContentType = {
  children: Array<{
    text: string;
    type: string;
  }>;
  type: string;
};

export type StrapiResponseType<T> = {
  data: T;
};
