import Paragraph from "@/components/Sections/Paragraph";
import React from "react";
import { twMerge } from "tailwind-merge";

const Answer: React.FC<React.ButtonHTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  const mergedClassName = React.useMemo(
    () =>
      twMerge(
        "max-h-0 px-4 py-0 transition-all duration-150 ease-in-out overflow-hidden box-content text-md leading-7 opacity-0",
        className
      ),
    [className]
  );
  /**
   * @todo
   * add overflow-y-auto without scroll's splash
   */
  return (
    <Paragraph
      data-test-id="faq_answer"
      className={mergedClassName}
      {...props}
    />
  );
};

export default Answer;
