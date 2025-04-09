import Paragraph from "@/components/Sections/Paragraph";
import Section from "@/components/Sections/Section";
import SectionTitle from "@/components/Sections/SectionTitle";
import React from "react";
import ContactForm from "./ContactForm";

const ContactModule: React.FC = () => (
  <Section
    data-test-id="contact_module"
    id="contact"
    className="mx-0 max-w-none bg-[#7B4A53] text-white"
  >
    <div className="mx-2 max-w-screen-lg md:mx-auto">
      <SectionTitle className="text-center text-secondary md:text-white">
        Contacto
      </SectionTitle>
      <Paragraph className="mx-auto mb-10 max-w-md text-left text-lg font-medium leading-9 sm:text-center">
        Si tienes alguna duda escríbeme y me pondré en contacto contigo lo antes
        posible
      </Paragraph>
      <ContactForm />
    </div>
  </Section>
);

export default ContactModule;
