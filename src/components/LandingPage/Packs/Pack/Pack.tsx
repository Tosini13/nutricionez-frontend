import PackContainer from "./PackContainer";
import PackFeatureList from "./PackFeatureList";
import PackFooter from "./PackFooter";
import PackHeader from "./PackHeader";
import PackPrice from "./PackPrice";
import { PackType, PriceType } from "./types";

const Pack: React.FC<PackType> = ({ title, features, recommended, price }) => (
  <PackContainer testId="pack" recommended={recommended}>
    <div className="flex h-full flex-col space-y-4">
      <div className="grid auto-rows-fr space-y-1">
        <PackHeader title={title} />
        <PackPrice price={price.price} old_price={price.old_price} />
      </div>
      <div className="flex-grow">
        <PackFeatureList features={features.list} />
      </div>
      <PackFooter recommended={recommended} />
    </div>
  </PackContainer>
);

export default Pack;

export const PackIndividual: React.FC<{ prices: PriceType[] }> = ({
  prices,
}) => (
  <PackContainer testId="pack_individual">
    <div className="flex h-full flex-col space-y-4">
      <PackHeader title={"visitas individuales"} />
      <div className="flex-grow space-y-4 pt-10">
        {prices.map((price) => (
          <div key={price.id} className="space-y-3">
            <h3 className="text-center font-semibold">{price.title}</h3>
            <PackPrice {...price.price} />
          </div>
        ))}
      </div>
      <PackFooter />
    </div>
  </PackContainer>
);
