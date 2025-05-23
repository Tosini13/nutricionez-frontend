import { ButtonIcon } from "@/components/Form/ButtonIcon";
import { useSwiper } from "swiper/react";
import { twMerge } from "tailwind-merge";
import { ArrowLeftIcon } from "../icons";

const arrowButtonContainerClassName =
  "opacity-1 transition-all absolute top-0 z-10 flex h-full items-center justify-center bg-white";

type ArrowsNavigationPropsType = {
  firstSlide: boolean;
  lastSlide: boolean;
};

const ArrowsNavigation: React.FC<ArrowsNavigationPropsType> = ({
  firstSlide,
  lastSlide,
}) => {
  const swiper = useSwiper();
  return (
    <>
      <div
        className={twMerge(
          arrowButtonContainerClassName,
          "left-0 shadow-[20px_0px_30px_15px_rgba(255,255,255,1)]",
          firstSlide && "opacity-0"
        )}
      >
        <ButtonIcon
          className="swiper-button-prev-custom cursor-pointer highlight-none"
          icon={<ArrowLeftIcon />}
          onClick={() => swiper.slidePrev()}
          aria-label="Show previous slide"
        />
      </div>
      <div
        className={twMerge(
          arrowButtonContainerClassName,
          "right-0 shadow-[-20px_0px_30px_15px_rgba(255,255,255,1)]",
          lastSlide && "opacity-0"
        )}
      >
        <ButtonIcon
          className="swiper-button-next-custom cursor-pointer highlight-none"
          icon={<ArrowLeftIcon className="rotate-180" />}
          onClick={() => swiper.slideNext()}
          aria-label="Show next slide"
        />
      </div>
    </>
  );
};

export default ArrowsNavigation;
