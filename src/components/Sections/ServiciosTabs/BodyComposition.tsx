import { ButtonLink } from "@/components/Form/Button";

import Image from "next/image";
import Paragraph from "../Paragraph";

const BodyComposition: React.FC = () => (
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
      <h3 className="mb-4 text-xl font-bold">Pérdida o aumento de peso.</h3>
      <Paragraph>
        Aprende a comer y a disfrutar de la comida sin poner en riesgo tu salud.
        Te acompaño, te asesoro y te motivo en el proceso para que puedas
        cumplir tu objetivo de una manera fácil y agradable. Sin efectos
        rebotes, aprenderás para toda la vida.
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

export default BodyComposition;
