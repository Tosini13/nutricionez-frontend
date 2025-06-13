import React from "react";
import { twMerge } from "tailwind-merge";

type TSectionTitleProps = React.ButtonHTMLAttributes<HTMLHeadingElement> & {
  Component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

const SectionTitle: React.FC<TSectionTitleProps> = ({
  className,
  Component = "h2",
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () => twMerge("title font-semibold mb-8 text-4xl font-bold", className),
    [className]
  );
  return (
    <Component
      data-testid="sobremi_title"
      className={mergedClassName}
      {...props}
    />
  );
};

export default SectionTitle;
