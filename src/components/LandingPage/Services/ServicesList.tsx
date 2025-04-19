"use client";
import Link from "next/link";
import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceTile from "./ServiceTile";
import { ServiceType } from "./types";

const SLIDER_BREAK_POINTS = {
  1: {
    slidesPerView: 1.2,
    spaceBetween: 15,
    centeredSlides: true,
  },
  350: {
    slidesPerView: 1.3,
    centeredSlides: true,
  },
  450: {
    slidesPerView: 1.5,
    centeredSlides: true,
  },
  580: {
    slidesPerView: 2,
    centeredSlides: false,
  },
  840: {
    slidesPerView: 3,
    centeredSlides: false,
  },
  1100: {
    slidesPerView: 4,
    centeredSlides: false,
  },
};

type ServicesListPropsType = {
  services: ServiceType[];
};

const ServicesList: FC<ServicesListPropsType> = ({ services }) => (
  <div data-testid="services_list">
    <Swiper
      modules={[Pagination, A11y, Navigation]}
      spaceBetween={10}
      breakpoints={SLIDER_BREAK_POINTS}
      pagination={{ clickable: true }}
    >
      {services.map((service) => (
        <SwiperSlide key={service.slug} className="h-auto">
          <Link
            className="h-full highlight-none"
            href={`/services/${service.slug}`}
          >
            <ServiceTile {...service} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default ServicesList;
