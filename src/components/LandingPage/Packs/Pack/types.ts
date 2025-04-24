export type PriceType = {
  id: string;
  title: string;
  price: number;
  old_price?: number;
};

type PriceComponentType = {
  __component: "offer.price";
  id: string;
  title: string;
  price: number;
  old_price?: number;
};

type FeaturesComponentType = {
  __component: "offer.features";
  id: string;
  list: Array<{ id: string; name: string }>;
};

export type PackType = {
  id: string;
  title: string;
  recommended: boolean;
  features: FeaturesComponentType;
  price: Omit<PriceComponentType, "title">;
};
