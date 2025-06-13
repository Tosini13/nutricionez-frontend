import { ButtonLink } from "@/components/Form/Button";
import React from "react";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import { TLinkType } from "./types";

export const links: Array<TLinkType> = [
  {
    title: "Home",
    href: "/#home",
  },
  {
    title: "Sobre mí",
    href: "/#sobreMi",
  },
  {
    title: "Servicios",
    href: "/#servicios",
  },
  {
    title: "Packs",
    href: "/#packs",
  },
  {
    title: "FAQ",
    href: "/#faq",
  },
  {
    title: "Contacto",
    href: "/#contact",
  },
  {
    title: "Blog",
    href: "/articles",
  },
];

const HeaderModule: React.FC = () => {
  return (
    <nav
      data-testid="header_module"
      className="sticky top-0 left-0 z-50 max-h-[84px] w-full"
    >
      <div className="hidden md:block">
        <HeaderDesktop
          links={links}
          actions={
            <ButtonLink
              href="#contact"
              data-size="large"
              data-headerlink="xx"
              className="whitespace-nowrap"
            >
              Pide Cita
            </ButtonLink>
          }
        />
      </div>
      <div className="block md:hidden">
        <HeaderMobile links={links} />
      </div>
    </nav>
  );
};

export default HeaderModule;
