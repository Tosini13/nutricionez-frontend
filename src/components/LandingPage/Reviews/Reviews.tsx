"use client";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import ArrowsNavigation from "../../Slider/ArrowNavigation";
import ReviewTile from "./ReviewTile";
import { ReviewType } from "./types";

const SLIDER_BREAK_POINTS: SwiperOptions["breakpoints"] = {
  1: {
    slidesPerView: 1.2,
    centeredSlides: true,
  },
  380: {
    slidesPerView: 1.3,
    centeredSlides: true,
  },
  450: {
    slidesPerView: 1.5,
    centeredSlides: true,
  },
  640: {
    slidesPerView: 2,
    centeredSlides: false,
  },
  1024: {
    slidesPerView: 3.3,
    centeredSlides: false,
    pagination: {
      el: null,
    },
  },
};

const INITIAL_SLIDE = 0;

type ReviewsPropsType = {
  reviews: ReviewType[];
};

const Reviews: React.FC<ReviewsPropsType> = ({ reviews }) => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  return (
    <div id="reviews-swiper" className="relative max-h-[350px]">
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        spaceBetween={15}
        breakpoints={SLIDER_BREAK_POINTS}
        pagination
        className="swiper-reviews"
        initialSlide={INITIAL_SLIDE}
        onRealIndexChange={({ isBeginning, isEnd }) => {
          setIsFirstSlide(isBeginning);
          setIsLastSlide(isEnd);
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewTile review={review} />
          </SwiperSlide>
        ))}
        <div className="hidden lg:block">
          <ArrowsNavigation firstSlide={isFirstSlide} lastSlide={isLastSlide} />
        </div>
      </Swiper>
    </div>
  );
};

export default Reviews;
