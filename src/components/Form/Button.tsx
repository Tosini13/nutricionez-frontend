import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName = `bg-primary text-white font-semibold flex flex-row items-center justify-center
rounded-full px-10 py-4 font-medium lowercase tracking-wide appearance-button font-semibold uppercase cursor-pointer
transition-all duration-300 ease-out
hover-hover:hover:bg-[#ED8094]`;

const secondaryThemeClassName =
  "bg-secondary hover:bg-secondary-light hover-hover:hover:bg-secondary-light hover-hover:hover:text-secondary";

const alternativeThemeClassName = `bg-transparent text-primary border border-primary  hover-hover:hover:bg-primary hover-hover:hover:text-white`;

const biggerTHemeClassName = "px-12 py-5";

type WithButtonStylePropsType = {
  secondary?: boolean;
  alternative?: boolean;
  bigger?: boolean;
  className?: string;
};

function withButtonStyle<PropsType extends object>(
  Component: React.ComponentType<PropsType>
): React.FC<WithButtonStylePropsType & PropsType> {
  const ComponentWithButtonStyles: React.FC<
    WithButtonStylePropsType & PropsType
  > = ({
    secondary,
    alternative,
    bigger,
    className: customClassName,
    ...props
  }) => {
    const className = twMerge(
      themeClassName,
      secondary ? secondaryThemeClassName : "",
      alternative ? alternativeThemeClassName : "",
      bigger ? biggerTHemeClassName : "",
      customClassName
    );
    return <Component className={className} {...(props as PropsType)} />;
  };

  return ComponentWithButtonStyles;
}

export const Button = withButtonStyle<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props) => <button data-test-id="button" {...props} />);

export const ButtonLink = withButtonStyle<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  }
>((props) => <Link data-test-id="button_link" {...props} />);

export const ALink = withButtonStyle<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  }
>((props) => <a data-test-id="button_link" {...props} />);
