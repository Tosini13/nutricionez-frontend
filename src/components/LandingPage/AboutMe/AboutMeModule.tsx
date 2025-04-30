import Block, { BlockType } from "@/components/Block/Block";
import { ButtonLink } from "@/components/Form/Button";
import Section from "@/components/Sections/Section";
import SectionTitle from "@/components/Sections/SectionTitle";
import { ENV } from "@/env";
import { StrapiResponseType } from "@/types";
import Image from "next/image";
import Img from "../../Img/Img";

export type MyInfo = {
  id: string;
  icon: {
    name: string;
    url: string;
  };
  description: BlockType[];
};

const URL_MY_INFO =
  "api/nutricionez-showcase?populate[0]=list&populate[1]=list.icon";

const AboutMeModule: React.FC = async () => {
  const {
    data: { list },
  }: StrapiResponseType<{ list: MyInfo[] }> = await fetch(
    `${ENV.STRAPI_URL}/${URL_MY_INFO}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  const halves = [list.slice(0, list.length / 2), list.slice(list.length / 2)];

  return (
    <Section
      data-test-id="about_me_module"
      id="sobreMi"
      className="mx-0 max-w-none space-y-10 bg-primary-light px-4"
    >
      <div className="mx-2 max-w-screen-xl space-y-12 md:mx-auto">
        <SectionTitle className="text-left">
          Sobre <span className="text-secondary">mí</span>
        </SectionTitle>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="order-2 grid grid-cols-1 space-y-8 md:max-w-[60%] md:grid-cols-2 md:gap-x-14 md:space-y-0">
            {halves.map((half, i) => (
              <div key={i} className="space-y-8">
                {half.map((myInfo) => (
                  <div
                    key={myInfo.id}
                    data-test-id="about_me_paragraph"
                    className="space-y-4"
                  >
                    <Image
                      className="mx-auto md:ml-0"
                      src={myInfo.icon.url}
                      alt={myInfo.icon.name}
                      width={40}
                      height={40}
                    />
                    {myInfo.description.map((block, i) => (
                      <Block key={i} block={block} />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="relative order-1 mb-10 h-fit translate-x-[10%] md:order-3 md:mb-0 md:min-w-[30%] md:max-w-[30%] md:translate-x-0">
            <Img
              width="100%"
              height="100%"
              src="/assets/images/esther/esther_web_bg.png"
              webPsrc="/assets/images/esther/esther_web_bg.webp"
              alt="Nutricionista Esther"
            />
          </div>
        </div>
        <ButtonLink
          secondary
          className={"mx-auto w-full sm:w-fit"}
          href="#contact"
        >
          Pide Cita
        </ButtonLink>
      </div>
    </Section>
  );
};

export default AboutMeModule;
