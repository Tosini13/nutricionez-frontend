import { ButtonLink } from "@/components/Form/Button";
import { ArrowLeftIcon } from "@/components/icons";
import Img from "@/components/Img/Img";
import Section from "@/components/Sections/Section";
import { ENV } from "@/env";
import { StrapiResponseType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import ReviewShort from "../Reviews/ReviewShort";
import Feature from "./Feature";
import { HeroType } from "./types";

export type FeatureType = {
  id: string;
  iconUrl: string;
  title: string;
  description: string;
};

const FEATURES: Array<FeatureType> = [
  {
    id: "1",
    iconUrl: "/assets/icons/secure.svg",
    title: "Método",
    description: "seguro y personalizado",
  },
  {
    id: "2",
    iconUrl: "/assets/icons/how_to.svg",
    title: "Tratamiento",
    description: "holístico de mis pacientes",
  },
  {
    id: "3",
    iconUrl: "/assets/icons/change_circle.svg",
    title: "Online",
    description: "y presencial en Valencia",
  },
];

const URL_HERO = "api/nutricionez-hero?populate[0]=nutricionez_review";

const HomeModule: FC = async () => {
  const { data }: StrapiResponseType<HeroType> = await fetch(
    `${ENV.STRAPI_URL}/${URL_HERO}`,
    {
      cache: "force-cache",
      next: {
        tags: ["hero"],
      },
    }
  ).then((res) => res.json());

  return (
    <Section
      data-test-id="home_module"
      Component="header"
      id="home"
      className="relative mx-0 max-w-none overflow-hidden pb-0 md:-mt-16 md:pt-24"
    >
      <div className="mx-2 max-w-screen-xl space-y-16 overflow-visible xl:mx-auto">
        <div className="relative flex flex-col items-center md:flex-row">
          <div className="space-y-8">
            <p className="title max-w-[600px] text-3xl font-bold sm:text-6xl">
              ¿Quieres empezar a cuidar de tu <br />
              <span className="relative text-secondary">
                salud
                <Image
                  src="/assets/images/underline.svg"
                  alt="underline"
                  className="absolute bottom-0 left-0 w-full"
                  width={72}
                  height={72}
                />
              </span>
              ?
            </p>
            <h1 className="font-lg max-w-[450px] leading-8 tracking-wide">
              {data.subtitle}
            </h1>
            <ButtonLink
              bigger
              className={"group mx-auto w-full sm:w-fit md:ml-0"}
              href="#contact"
            >
              Pide Cita
              <ArrowLeftIcon className="ml-3 h-4 w-4 rotate-180 transition-all duration-300 group-hover:ml-5 group-hover:-mr-2 [&_path]:fill-[#FFF]" />
            </ButtonLink>
          </div>
          <div className="relative order-1 mx-auto mb-[-64px] mt-4 h-fit self-end md:order-3 md:mt-0  lg:ml-2 lg:mr-auto">
            <div className="after:absolute after:bottom-0 after:left-0 after:h-0 after:w-full after:shadow-[0_0_50px_100px_rgba(255,255,255,0.9),0_0_15px_20px_rgba(255,255,255,1)]" />
            <Img
              className="max-h-[500px]"
              src="/assets/images/esther/esther_no_background.png"
              webPsrc="/assets/images/esther/esther_no_background.webp"
              alt="Esther Zamora - Nutricionista profesional en Valencia"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="absolute bottom-0 right-10 z-10">
            <ReviewShort review={data.nutricionez_review} />
          </div>
        </div>
        <div className="relative mx-auto pb-10 before:absolute before:left-1/2 before:bottom-0 before:h-1/2 before:w-screen before:-translate-x-1/2 before:bg-primary-light">
          <div
            className="relative flex flex-col justify-between gap-y-6 rounded-xl bg-white p-8 shadow-[0px_4px_40px_rgba(0,_0,_0,_0.08)]
            md:flex-row md:items-center md:gap-y-0"
          >
            {FEATURES.map((feature, i) => (
              <React.Fragment key={feature.id}>
                <Feature {...feature} />
                {i !== FEATURES.length - 1 && (
                  <div className="self-stretch border-b border-[#DDDDDD] md:mx-4 md:border-r" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeModule;
