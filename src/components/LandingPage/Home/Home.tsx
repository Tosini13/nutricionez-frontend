import { ButtonLink } from "@/components/Form/Button";
import { ArrowLeftIcon } from "@/components/icons";
import Img from "@/components/Img/Img";
import Paragraph from "@/components/Sections/Paragraph";
import Section from "@/components/Sections/Section";
import Image from "next/image";
import React, { FC } from "react";
import ReviewShort from "../Reviews/ReviewShort";
import Feature from "./Feature";

const reviews = [
  {
    author_name: "Rocio Marin Calderón",
    author_url:
      "https://www.google.com/maps/contrib/111467437892017584905/reviews",
    review_url: "https://goo.gl/maps/sQ1YqEzZnk7GjJDt5",
    language: "en-US",
    original_language: "es",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AGNmyxYQQjDFJu2gC-g0LdBqViWPbGfnqXbax7GDpytC=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 4 meses",
    text: "Me ha encantado su trabajo. Muy buen calidad- precio. Es súper amable y profesional. Te presta su ayuda siempre que la necesites y esta muy atenta de tu evolución. Sus dietas son súper completas y fáciles de entender. Un gusto!",
    time: 1674202812000,
    translated: false,
  },
  {
    author_name: "Jorge G",
    author_url:
      "https://www.google.com/maps/contrib/116848803566925354005/reviews",
    review_url: "https://goo.gl/maps/uzrYSCnPEnVLKP5T6",
    language: "en-US",
    original_language: "es",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AGNmyxaMQGpm9BrxA-TAn6pJa3y-aAvbr9NarOK5uOFB=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 4 meses",
    text: "Llevo a los cuidados de Esther desde septiembre, después de un mal año en el cual caí en sobrepeso, he recuperado mi forma y mi salud, con un cambio de casi 10kg entre septiembre y diciembre.\n\nEs una profesional espectacular, atenta, dedicada y resolutiva. Tanto al inicio como en las revisiones siempre te ayuda según tus necesidades: si tienes más o menos tiempo para cocinar o si te gusta más o menos cocinar, alimentos que prefieres comer, suplementación, en resumen un trabajo completo, profesional y muy cercano.\n\nActualmente estoy opositando para policía y voy a continuar con ella hasta el final del trayecto, e incluso después para seguir manteniendo un estilo de vida saludable por supuesto que seguiré con ella.\n\nYa he recomendado sus servicios a varios amigos, desde luego a todos aquellos de mis allegados que busquen un trato falimial y profesional, este es su lugar.",
    time: 1674202812000,
    translated: false,
  },
  {
    author_name: "Carla Sanjuán",
    author_url:
      "https://www.google.com/maps/contrib/108593210570534353183/reviews",
    review_url: "https://goo.gl/maps/gTzixnWr8BgBjtQK6",
    language: "en-US",
    original_language: "es",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ACB-R5T6WkHPvG51ifVPB2AkLt8rqh1wEic_wbn49zEyfQ=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 3 meses",
    text: "Esther es una nutricionista muy profesional, he encontrado en ella lo que en otros nutricionistas y dietista no he encontrado, confianza y sensibilidad. Me esta apoyando mucho en el proceso y dándome consejos útiles para mi día día.  Si buscas mejorar tus hábitos alimenticios o mejorar tu imagen y verte como siempre has querido de forma sana y duradera ella es la indicada.",
    time: 1674202812000,
    translated: false,
  },
  {
    author_name: "Jesús Coriz",
    author_url:
      "https://www.google.com/maps/contrib/107395484148187420364/reviews",
    review_url: "https://goo.gl/maps/mG3epREZY7x4Qg7v9",
    language: "en-US",
    original_language: "es",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ACB-R5RcvbNxhQTfcTtRfn-RfvZoc0OmmP0VXGPC-H6Y=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 3 meses",
    text: "Gran profesional. Dietas muy variadas y un gran trato personal. Recomendada sin ninguna duda.",
    time: 1676881212000,
    translated: false,
  },
  {
    author_name: "Mireia Ramon",
    author_url:
      "https://www.google.com/maps/contrib/109132366564619703724/reviews",
    review_url: "https://goo.gl/maps/zmVHbf6koUPJCkMP7",
    language: "en-US",
    original_language: "es",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ACB-R5S7P1nGoXZod1VaX4YndXTfZOlgqR1mNeg3uxqSYA=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 3 meses",
    text: "Sericio perfecto y gran profesional. Atenta y siempre pendiente del bienestar y de hacerlo todo a tu medida. Muy contenta!",
    time: 1676881212000,
    translated: false,
  },
];

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

const review = reviews[2];

const HomeModule: FC = () => (
  <Section
    data-test-id="home_module"
    id="home"
    className="relative mx-0 max-w-none overflow-hidden pb-0 md:-mt-16 md:pt-24"
  >
    <div className="mx-2 max-w-screen-xl space-y-16 overflow-visible xl:mx-auto">
      <div className="relative flex flex-col items-center md:flex-row">
        <div className="space-y-8">
          <h1 className="title max-w-[600px] text-3xl font-bold sm:text-6xl">
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
          </h1>
          <Paragraph className="font-lg max-w-[450px]">
            Puedo ayudarte a mejorar tu salud y a sentirte mejor gracias al
            cambio de hábitos en tu alimentación
          </Paragraph>
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
            alt={`photo persons`}
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="absolute bottom-0 right-10 z-10">
          <ReviewShort
            review={{
              ...review,
              author_url: "/assets/images/carlaSanjuan.png",
            }}
          />
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

export default HomeModule;
