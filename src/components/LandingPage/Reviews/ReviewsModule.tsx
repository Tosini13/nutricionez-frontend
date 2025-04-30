import Section from "@/components/Sections/Section";
import SectionTitle from "@/components/Sections/SectionTitle";
import { ENV } from "@/env";
import { StrapiResponseType } from "@/types";
import { FC } from "react";
import Reviews from "./Reviews";
import { ReviewType } from "./types";

const URL_REVIEWS = "api/nutricionez-reviews";

type ReviewsModulePropsType = {};

const ReviewsModule: FC<ReviewsModulePropsType> = async () => {
  const { data }: StrapiResponseType<ReviewType[]> = await fetch(
    `${ENV.STRAPI_URL}/${URL_REVIEWS}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return (
    <Section data-testid="reviews_module" className="space-y-12">
      <SectionTitle>Recomendaciones de mis pacientes</SectionTitle>
      <Reviews reviews={data} />
    </Section>
  );
};

export default ReviewsModule;
