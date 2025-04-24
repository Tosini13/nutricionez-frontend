import Paragraph from "@/components/Sections/Paragraph";
import Section from "@/components/Sections/Section";
import SectionTitle from "@/components/Sections/SectionTitle";
import { ENV } from "@/env";
import { StrapiResponseType } from "@/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PacksList from "./Pack/PacksList";
import { PackType, PriceType } from "./Pack/types";

const URL_PACKS =
  "api/nutricionez-packs?populate[0]=features&populate[1]=features.list&populate[2]=price";

const URL_PRICES = "api/nutricionez-prices";

const PacksModule: React.FC = async () => {
  const { data: packsData }: StrapiResponseType<PackType[]> = await fetch(
    `${ENV.STRAPI_URL}/${URL_PACKS}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  const { data: pricesData }: StrapiResponseType<PriceType[]> = await fetch(
    `${ENV.STRAPI_URL}/${URL_PRICES}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  console.log("pricesData", pricesData);

  return (
    <Section
      data-test-id="packs_module"
      id="packs"
      className="mx-0 max-w-none bg-primary-light"
    >
      <div className="mx-0 max-w-screen-xl md:mx-auto">
        <SectionTitle className="mb-6 text-center text-secondary">
          Packs
        </SectionTitle>
        <Paragraph className="mx-2 mb-9 text-left text-lg font-medium leading-9 text-gray sm:text-center">
          Elige el pack que más se adapte a ti con descuentos especiales
        </Paragraph>
        <PacksList
          pricesData={pricesData}
          packsData={packsData.sort((a, b) =>
            a.recommended ? -1 : b.recommended ? 1 : 0
          )}
        />
      </div>
    </Section>
  );
};

export default PacksModule;
