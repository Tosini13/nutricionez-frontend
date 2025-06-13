import Image from "next/image";
import { ButtonLink } from "../Form/Button";
import { ArrowLeftIcon } from "../icons";

const AboutMeBlogModule: React.FC = () => {
  return (
    <div
      data-testid="about_me_blog_module"
      className="grid grid-cols-1 gap-x-10 sm:grid-cols-5"
    >
      <div className="order-2 col-span-1 flex flex-col justify-center space-y-8 sm:order-1 sm:col-span-3 md:col-span-2">
        <span className="text-4xl font-extrabold leading-normal">
          <span className="text-secondary">¡Hola! Soy</span>{" "}
          <span className="text-primary">Esther Zamora.</span> ¿Por qué mis
          consejos son{" "}
          <span className="text-secondary">seguros y verificados</span>?
        </span>
        <ButtonLink
          className={"group mx-auto w-full sm:w-fit md:ml-0"}
          href="/"
        >
          Sobre mí
          <ArrowLeftIcon className="ml-3 h-4 w-4 rotate-180 transition-all duration-300 group-hover:ml-5 group-hover:-mr-2 [&_path]:fill-[#FFF]" />
        </ButtonLink>
      </div>
      <div className="order-1 col-span-1 sm:order-2 sm:col-span-2 md:col-span-3">
        <Image
          src="/assets/images/esther/estherAboutMe.webp"
          alt="Image about Esther"
          width={680}
          height={470}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default AboutMeBlogModule;
