"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../Sections/SectionTitle";
import PostTile from "./PostTile";
import { ArticleType } from "./types";

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

type LatestPostsModulePropsType = {
  latestPosts: ArticleType[];
};

const LatestPostsModule: React.FC<LatestPostsModulePropsType> = ({
  latestPosts,
}) => (
  <div data-testid="latest_posts_module">
    <SectionTitle className="text-primary mx-2">The latest</SectionTitle>
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        breakpoints={SLIDER_BREAK_POINTS}
        pagination={{ clickable: true }}
        className="pb-[50px]"
      >
        {latestPosts.map((post) => (
          <SwiperSlide key={post.documentId} className="h-auto">
            <Link
              className="block h-full highlight-none"
              href={`/blog/${post.slug}`}
            >
              <PostTile
                post={post}
                className="h-full data-[role=title]:[&_*]:text-lg data-[role=title]:[&_*]:font-bold"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default LatestPostsModule;
