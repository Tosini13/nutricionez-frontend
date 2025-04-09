import { ButtonLink } from "@/components/Form/Button";
import Paragraph from "@/components/Sections/Paragraph";
import Section from "@/components/Sections/Section";
import SectionTitle from "@/components/Sections/SectionTitle";
import {
  HealthIcon,
  LaboratoryIcon,
  OrderIcon,
  UniversityIcon,
} from "../../icons";
import Img from "../../Img/Img";

export type MyInfo = {
  id: string;
  icon: React.ReactNode;
  description: string;
};

const myInfos: Array<MyInfo> = [
  {
    id: "1",
    icon: <UniversityIcon className="text-transparent" />,
    description:
      "Soy Esther Zamora, Dietista-nutricionista especializada en nutrición clínica, graduada por la Universidad de Valencia, aunque cursé un año de mis estudios en la Universidad de Milán, Italia (Università degli studi di Milano).",
  },
  {
    id: "2",
    icon: <LaboratoryIcon className="text-transparent" />,
    description:
      "Pienso que es muy importante individualizar cada caso para lograr el éxito en el tratamiento así como colaborar con otros profesionales de la salud si fuera necesario como: psicólogos, fisioterapeutas, médicos, entrenadores personales, etc.",
  },
  {
    id: "3",
    icon: <HealthIcon className="text-transparent" />,
    description:
      "He realizado numerosos cursos formativos enfocados en nutrición clínica para el manejo de las enfermedades con la alimentación. He trabajado en varias clínicas de nutrición abordando distintos objetivos, que me han brindado el conocimiento y la experiencia para poder ayudarte a lograr tus metas desde un enfoque científico, eficaz y seguro.",
  },
  {
    id: "4",
    icon: <OrderIcon className="text-transparent" />,
    description:
      "Estoy colegiada por el CODINUCOVA (Colegio de Dietistas-Nutricionistas de la Comunidad Valenciana). Nº: CV01045",
  },
];

const halves = [
  myInfos.slice(0, myInfos.length / 2),
  myInfos.slice(myInfos.length / 2),
];

const AboutMeModule: React.FC = () => {
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
                    <div className="mx-auto md:ml-0">{myInfo.icon}</div>
                    <Paragraph>{myInfo.description}</Paragraph>
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
