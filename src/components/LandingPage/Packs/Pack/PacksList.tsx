"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Pack, { PackIndividual } from "./Pack";
import { PackType, PriceType } from "./types";

const SLIDER_BREAK_POINTS = {
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
  990: {
    slidesPerView: 3,
    centeredSlides: false,
  },
  1200: {
    slidesPerView: 4,
    centeredSlides: false,
  },
};

type PacksListPropsType = {
  pricesData?: PriceType[];
  packsData?: PackType[];
};

const PacksList: React.FC<PacksListPropsType> = ({ pricesData, packsData }) => (
  <Swiper
    modules={[Pagination]}
    spaceBetween={15}
    breakpoints={SLIDER_BREAK_POINTS}
    pagination={{ clickable: true }}
    className="secondary"
    initialSlide={1}
  >
    {pricesData && (
      <SwiperSlide className="h-auto">
        <PackIndividual prices={pricesData} />
      </SwiperSlide>
    )}
    {packsData?.map((pack) => (
      <SwiperSlide key={pack.id} className="h-auto">
        <Pack {...pack} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default PacksList;
