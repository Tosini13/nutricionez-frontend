import Section from "@/components/Sections/Section";
import SectionTitle from "@/components/Sections/SectionTitle";
import { ENV } from "@/env";
import { StrapiResponseType } from "@/types";
import Faq from "./Faq";

export type FAQType = {
  id: string;
  documentId: string;
  question: string;
  answer: string;
};

const URL_FAQS = "api/nutricionez-faqs";

const FaqModule: React.FC = async () => {
  const { data }: StrapiResponseType<FAQType[]> = await fetch(
    `${ENV.STRAPI_URL}/${URL_FAQS}`,
    {
      cache: "force-cache",
      next: {
        tags: ["faq"],
      },
    }
  ).then((res) => res.json());

  return (
    <Section
      data-test-id="faq_module"
      id="faq"
      className="max-w-screen-lg lg:mx-auto"
    >
      <SectionTitle className="text-center text-secondary">FAQ</SectionTitle>
      <div className="space-y-6">
        {data?.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </Section>
  );
};

export default FaqModule;
