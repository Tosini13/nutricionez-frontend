import Link from "next/link";
import React from "react";

type TFooterLinkProps = React.LiHTMLAttributes<HTMLLIElement> & {
  title: string;
  href: string;
};

const FooterLink: React.FC<TFooterLinkProps> = ({ title, href }) => (
  <Link
    className={
      "text-primary transition-all duration-150 hover-hover:hover:text-white"
    }
    href={href}
    style={{ fontWeight: 400 }}
  >
    {title}
  </Link>
);

export default FooterLink;
