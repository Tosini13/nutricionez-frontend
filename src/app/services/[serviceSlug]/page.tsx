import { ButtonLink } from "@/components/Form/Button";
import AButtonIcon from "@/components/Form/ButtonIcon";
import { ArrowLeftIcon } from "@/components/icons";
import { ServiceType } from "@/components/LandingPage/Services/types";
import Section from "@/components/Sections/Section";
import { ENV } from "@/env";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import React from "react";

const getUrl = (slug: string) =>
  `api/nutricionez-services?filters\[slug\][$eq]=${slug}&populate[largeImage][fields][0]=name&populate[largeImage][fields][1]=url`;

type StrapiResponseType = {
  data: ServiceType[];
};

type ServiceModulePropsType = {
  params: Promise<{ serviceSlug: string }>;
};

const ServiceModule: React.FC<ServiceModulePropsType> = async ({ params }) => {
  const { serviceSlug } = await params;
  const { data }: StrapiResponseType = await fetch(
    `${ENV.STRAPI_URL}/${getUrl(serviceSlug)}`,
    {
      cache: "force-cache",
      next: {
        tags: ["service"],
      },
    }
  ).then((res) => res.json());

  const service = data?.[0];

  return (
    <main
      data-test-id="service_module"
      className="relative min-h-screen max-w-none"
    >
      <Section>
        <div className="flex justify-between">
          <div className="space-y-7 md:max-w-[600px]">
            <div className="md:mb-14">
              <AButtonIcon
                className="highlight-none"
                icon={<ArrowLeftIcon />}
                href="/#servicios"
              />
            </div>
            <h1 className="mx-auto max-w-[350px] text-center text-3xl font-extrabold leading-10 md:mx-0 md:text-left">
              {service.title}
            </h1>
            <BlocksRenderer content={service.description} />
            <ButtonLink
              href="/#contact"
              className="mx-auto w-full sm:w-fit md:mx-0"
            >
              Pide Cita
            </ButtonLink>
          </div>
          <div className="hidden min-w-[40%] md:block">
            <Image
              className="mx-auto block"
              src={service.largeImage.url}
              alt={service.largeImage.name}
              width={400}
              height={400}
            />
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ServiceModule;
