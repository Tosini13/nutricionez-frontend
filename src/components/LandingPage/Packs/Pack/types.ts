type PriceComponentType = {
  id: string;
  price: number;
  old_price?: number;
};

export type PriceType = {
  id: string;
  title: string;
  price: PriceComponentType;
};

type FeaturesComponentType = {
  id: string;
  list: Array<{ id: string; name: string }>;
};

export type PackType = {
  id: string;
  title: string;
  recommended: boolean;
  features: FeaturesComponentType;
  price: PriceComponentType;
};
