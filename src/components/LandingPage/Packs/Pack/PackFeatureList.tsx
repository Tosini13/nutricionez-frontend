import Paragraph from "@/components/Sections/Paragraph";
import Image from "next/image";
import { CardType } from "../PacksModule";

type PackFeatureListPropsType = {
  duration?: CardType["duration"];
  features: CardType["features"];
};

const PackFeatureList: React.FC<PackFeatureListPropsType> = ({
  features,
  duration,
}) => (
  <ul className="space-y-2" data-test-id="pack_feature_list">
    {duration && (
      <li className="flex items-center">
        <Image
          src="/assets/icons/circle_ok.svg"
          alt="circle ok icon"
          className="mr-3"
          width={19}
          height={20}
        />
        <Paragraph className="font-bold leading-6 text-[#7E70B6]">
          {duration}
        </Paragraph>
      </li>
    )}
    {features.map((feature) => (
      <li key={feature.id} className="flex items-center">
        <Image
          src="/assets/icons/circle_ok.svg"
          alt="circle ok icon"
          className="mr-3"
          width={19}
          height={20}
        />
        <Paragraph className="font-semibold leading-6">
          {feature.title}
        </Paragraph>
      </li>
    ))}
  </ul>
);

export default PackFeatureList;
