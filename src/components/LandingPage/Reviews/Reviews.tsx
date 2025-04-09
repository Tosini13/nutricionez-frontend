"use client";
import Section from "@/components/Sections/Section";
import SectionTitle from "@/components/Sections/SectionTitle";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import ArrowsNavigation from "../../Slider/ArrowNavigation";
import ReviewTile from "./ReviewTile";

const mockReviews = [
  {
    author_name: "Rocio Marin Calderón",
    author_url:
      "https://www.google.com/maps/contrib/111467437892017584905/reviews",
    review_url: "https://goo.gl/maps/sQ1YqEzZnk7GjJDt5",
    language: "en-US",
    original_language: "es",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AGNmyxYQQjDFJu2gC-g0LdBqViWPbGfnqXbax7GDpytC=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 4 meses",
    text: "Me ha encantado su trabajo. Muy buen calidad- precio. Es súper amable y profesional. Te presta su ayuda siempre que la necesites y esta muy atenta de tu evolución. Sus dietas son súper completas y fáciles de entender. Un gusto!",
    time: 1674202812000,
    translated: false,
  },
  {
    author_name: "Jorge G",
    author_url:
      "https://www.google.com/maps/contrib/116848803566925354005/reviews",
    review_url: "https://goo.gl/maps/uzrYSCnPEnVLKP5T6",
    language: "en-US",
    original_language: "es",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AGNmyxaMQGpm9BrxA-TAn6pJa3y-aAvbr9NarOK5uOFB=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 4 meses",
    text: "Llevo a los cuidados de Esther desde septiembre, después de un mal año en el cual caí en sobrepeso, he recuperado mi forma y mi salud, con un cambio de casi 10kg entre septiembre y diciembre.\n\nEs una profesional espectacular, atenta, dedicada y resolutiva. Tanto al inicio como en las revisiones siempre te ayuda según tus necesidades: si tienes más o menos tiempo para cocinar o si te gusta más o menos cocinar, alimentos que prefieres comer, suplementación, en resumen un trabajo completo, profesional y muy cercano.\n\nActualmente estoy opositando para policía y voy a continuar con ella hasta el final del trayecto, e incluso después para seguir manteniendo un estilo de vida saludable por supuesto que seguiré con ella.\n\nYa he recomendado sus servicios a varios amigos, desde luego a todos aquellos de mis allegados que busquen un trato falimial y profesional, este es su lugar.",
    time: 1674202812000,
    translated: false,
  },
  {
    author_name: "Carla Sanjuán",
    author_url:
      "https://www.google.com/maps/contrib/108593210570534353183/reviews",
    review_url: "https://goo.gl/maps/gTzixnWr8BgBjtQK6",
    language: "en-US",
    original_language: "es",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ACB-R5T6WkHPvG51ifVPB2AkLt8rqh1wEic_wbn49zEyfQ=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 3 meses",
    text: "Esther es una nutricionista muy profesional, he encontrado en ella lo que en otros nutricionistas y dietista no he encontrado, confianza y sensibilidad. Me esta apoyando mucho en el proceso y dándome consejos útiles para mi día día.  Si buscas mejorar tus hábitos alimenticios o mejorar tu imagen y verte como siempre has querido de forma sana y duradera ella es la indicada.",
    time: 1674202812000,
    translated: false,
  },
  {
    author_name: "Jesús Coriz",
    author_url:
      "https://www.google.com/maps/contrib/107395484148187420364/reviews",
    review_url: "https://goo.gl/maps/mG3epREZY7x4Qg7v9",
    language: "en-US",
    original_language: "es",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ACB-R5RcvbNxhQTfcTtRfn-RfvZoc0OmmP0VXGPC-H6Y=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 3 meses",
    text: "Gran profesional. Dietas muy variadas y un gran trato personal. Recomendada sin ninguna duda.",
    time: 1676881212000,
    translated: false,
  },
  {
    author_name: "Mireia Ramon",
    author_url:
      "https://www.google.com/maps/contrib/109132366564619703724/reviews",
    review_url: "https://goo.gl/maps/zmVHbf6koUPJCkMP7",
    language: "en-US",
    original_language: "es",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ACB-R5S7P1nGoXZod1VaX4YndXTfZOlgqR1mNeg3uxqSYA=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "Hace 3 meses",
    text: "Sericio perfecto y gran profesional. Atenta y siempre pendiente del bienestar y de hacerlo todo a tu medida. Muy contenta!",
    time: 1676881212000,
    translated: false,
  },
];

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

const Reviews: React.FC = () => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  return (
    <Section data-test-id="reviews_module" className="space-y-12">
      <SectionTitle className="text-center">
        Recomendaciones <span className="text-secondary">de mis pacientes</span>
      </SectionTitle>
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
          {mockReviews.map((review) => (
            <SwiperSlide key={`${review.author_name}-${review.time}`}>
              <ReviewTile review={review} />
            </SwiperSlide>
          ))}
          <div className="hidden lg:block">
            <ArrowsNavigation
              firstSlide={isFirstSlide}
              lastSlide={isLastSlide}
            />
          </div>
        </Swiper>
      </div>
    </Section>
  );
};

export default Reviews;
