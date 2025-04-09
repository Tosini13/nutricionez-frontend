import { ButtonLink } from "@/components/Form/Button";
import Image from "next/image";
import Paragraph from "../Paragraph";

const VegetarianAndVegan: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="relative flex">
      <div>
        <Image
          src="assets/images/services/mejora_composicion.png"
          alt="fruits vegetables nutritionist diet"
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
        Si sigues una dieta basada en vegetales o quieres empezarla, puedo
        ayudarte a plantearla de una manera óptima. Tanto en la confección de
        tus menús como en la toma de suplementos convenientes. En pocas visitas
        obtendrás herramientas y recetas muy útiles para tu estilo de vida.
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

export default VegetarianAndVegan;
