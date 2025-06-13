import React from "react";
import { twMerge } from "tailwind-merge";

type TSectionProps = React.HTMLAttributes<HTMLDivElement> & {
  Component?: "section" | "header";
};

const Section: React.FC<TSectionProps> = ({
  children,
  className,
  Component = "section",
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        "max-w-screen-xl overflow-x-hidden xl:mx-auto pt-8 pb-10 mx-2",
        className
      ),
    [className]
  );
  return (
    <Component className={mergedClassName} {...props}>
      {children}
    </Component>
  );
};

export default Section;
