import Paragraph from "@/components/Sections/Paragraph";
import Image from "next/image";
import { PackType } from "./types";
type PackFeatureListPropsType = {
  features: PackType["features"]["list"];
};

const PackFeatureList: React.FC<PackFeatureListPropsType> = ({ features }) => (
  <ul className="space-y-2 " data-test-id="pack_feature_list">
    {features.map((feature) => (
      <li
        key={feature.id}
        className="flex items-center first:text-[#7E70B6] font-semibold first:font-bold"
      >
        <Image
          src="/assets/icons/circle_ok.svg"
          alt="circle ok icon"
          className="mr-3"
          width={19}
          height={20}
        />
        <Paragraph className="leading-6">{feature.name}</Paragraph>
      </li>
    ))}
  </ul>
);

export default PackFeatureList;
