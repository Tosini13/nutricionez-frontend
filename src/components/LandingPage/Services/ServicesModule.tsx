import { ButtonLink } from "@/components/Form/Button";
import Paragraph from "@/components/Sections/Paragraph";
import Section from "@/components/Sections/Section";
import SectionTitle from "@/components/Sections/SectionTitle";
import { ENV } from "@/env";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServicesList from "./ServicesList";
import { ServiceType } from "./types";

const URL =
  "api/nutricionez-services?populate[image][fields][0]=name&populate[image][fields][1]=url";

type StrapiResponseType = {
  data: ServiceType[];
};

const ServicesModule: React.FC = async () => {
  const { data }: StrapiResponseType = await fetch(
    `${ENV.STRAPI_URL}/${URL}`
  ).then((res) => res.json());

  return (
    <>
      <Section
        data-test-id="services_module"
        id="servicios"
        className="space-y-12"
      >
        <div>
          <SectionTitle className="text-center">
            Mís <span className="text-secondary">servicios</span>
          </SectionTitle>
          <Paragraph className="mx-auto max-w-[700px] text-left sm:text-center">
            Después de la primera visita en el plazo de
            1&nbsp;a&nbsp;3&nbsp;días laborables recibirás tu plan nutricional,
            recetas, y toda la información que considere importante para tu
            caso.
          </Paragraph>
        </div>
        <ServicesList services={data} />
        <ButtonLink
          bigger
          alternative
          className="mx-auto w-fit"
          href="#contact"
        >
          Pedir Cita
        </ButtonLink>
      </Section>
    </>
  );
};

export default ServicesModule;
