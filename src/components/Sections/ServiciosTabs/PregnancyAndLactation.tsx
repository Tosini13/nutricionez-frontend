import { ButtonLink } from "@/components/Form/Button";
import Image from "next/image";
import Paragraph from "../Paragraph";

const PregnancyAndLactation: React.FC = () => (
  <div className="flex flex-col justify-between md:flex-row">
    <div className="relative flex">
      <div>
        <Image
          src="assets/images/services/pregnancy.png"
          alt="pregnancy diet"
        />
      </div>
      <div className="block md:hidden">
        <Image
          src="assets/images/services/opcion_vegana.png"
          alt="fruits vegetables nutritionist diet"
          className="h-fit"
        />
      </div>
    </div>
    <div>
      <Paragraph>
        Si quieres estar segura de tener una nutrición óptima en estas etapas de
        la vida, puedo ayudarte. También en diabetes gestacional, preeclampsia e
        infertilidad
      </Paragraph>
      <div className="mt-8 flex items-end justify-between md:mt-0">
        <ButtonLink
          className="min-w-full sm:mx-auto sm:min-w-0 md:mx-0"
          href="#contact"
        >
          pide cita
        </ButtonLink>
        <Image
          src="assets/images/services/opcion_vegana.png"
          alt="fruits vegetables nutritionist diet"
          className="hidden md:block"
        />
      </div>
    </div>
  </div>
);

export default PregnancyAndLactation;
