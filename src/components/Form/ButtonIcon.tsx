import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

const className =
  "group block h-[50px] w-[50px] rounded-full bg-primary-light p-3 transition-all duration-300 hover-hover:hover:bg-primary [&_path]:transition-all [&_path]:duration-300 [&_path]:hover-hover:hover:fill-[#FFF]";

type AButtonIconPropsType = LinkProps & {
  icon: React.ReactNode;
  className?: string;
};

const AButtonIcon: React.FC<AButtonIconPropsType> = ({
  icon,
  className: customClassName,
  ...props
}) => {
  return (
    <Link
      data-testid="button_icon"
      className={twMerge(className, customClassName)}
      {...props}
    >
      {icon}
    </Link>
  );
};

export default AButtonIcon;

type ButtonIconPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
};

export const ButtonIcon: React.FC<ButtonIconPropsType> = ({
  icon,
  className: customClassName,
  ...props
}) => {
  return (
    <button
      data-testid="button_icon"
      className={twMerge(className, customClassName)}
      {...props}
    >
      {icon}
    </button>
  );
};
