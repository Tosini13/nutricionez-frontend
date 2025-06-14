import { Button } from "@/components/Form/Button";
import { ArrowLeftIcon } from "@/components/icons";
import Image from "next/image";
import { ServiceType } from "./types";

type ServiceTilePropsType = Omit<ServiceType, "description">;

const ServiceTile: React.FC<ServiceTilePropsType> = ({ image, title }) => (
  <div
    data-test-id="service_tile"
    className="align-center group mx-auto flex h-full max-w-[350px] cursor-pointer flex-col space-y-6 rounded-lg border border-[#DDDDDD] px-4 py-6 transition-all duration-300 hover-hover:hover:border-primary"
  >
    <Image
      className="mx-auto"
      src={image.url}
      alt={image.name}
      width={200}
      height={200}
    />
    <div className="flex h-full flex-grow items-center justify-center text-center">
      <h3 className="h-fit text-center font-bold">{title}</h3>
    </div>
    <Button className="mx-auto w-fit bg-transparent text-primary hover-hover:hover:bg-transparent hover-hover:hover:text-primary hover-hover:hover:shadow-none">
      Leer mas{" "}
      <ArrowLeftIcon className="ml-2 h-4 w-4 rotate-180 text-primary transition-all duration-300 hover-hover:group-hover:ml-4" />
    </Button>
  </div>
);

export default ServiceTile;
