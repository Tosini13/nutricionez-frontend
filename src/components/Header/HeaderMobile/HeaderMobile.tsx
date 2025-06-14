"use client";

import { LogoIcon } from "@/components/icons";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TLinkType } from "../types";
import HamburgerButton from "./Hamburger";

const headerThemeClassName =
  "relative px-4 py-4 bg-white transition-shadow duration-150 ease-out overflow-hidden";

type HeaderMobileProps = {
  links: Array<TLinkType>;
};

const HeaderMobile: React.FC<HeaderMobileProps> = ({ links }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [isOnTop, setIsOnTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 30) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = React.useMemo(
    () =>
      twMerge(
        headerThemeClassName,
        !isOnTop && !open ? "shadow-md" : "shadow-none",
        open ? "min-h-screen max-h-screen" : "min-h-0 max-h-[71px]"
      ),
    [isOnTop, open]
  );

  return (
    <div ref={ref} data-testid="header_mobile" className={headerClassName}>
      <div className="relative flex items-center justify-between ">
        <Link href="/#home" aria-label="Go to homepage">
          <LogoIcon />
        </Link>
        <HamburgerButton open={open} onClick={() => setOpen((bool) => !bool)} />
      </div>
      <div className="relative mt-10 flex flex-col items-center space-y-8">
        {links.map((link) => (
          <Link
            key={`${link.title}_${link.href}`}
            title={link.title}
            href={link.href}
            className="text-xl text-primary"
            onClick={() => setOpen(() => false)}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderMobile;
