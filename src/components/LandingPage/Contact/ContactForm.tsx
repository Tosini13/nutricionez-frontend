import { submitContactForm } from "@/app/api/contact";
import { Button } from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import ReCaptcha from "@/components/Form/ReCaptcha";
import Textarea from "@/components/Form/Textarea";
import Image from "next/image";
import { FC, Suspense } from "react";

const inputClassName = "mb-4 sm:mb-0";

const ContactForm: FC = () => (
  <form
    action={submitContactForm}
    data-testid="contact_form"
    className="space-y-8"
  >
    <div className="flex flex-col space-y-8 md:flex-row  md:space-y-0 md:space-x-16">
      <div className="min-w-[300px] space-y-8 lg:min-w-[40%]">
        <Input
          id="name"
          data-testid="contact-input-name"
          placeholder="Nombre"
          name="name"
          containerClassName={inputClassName}
          required
          // error={result?.errors?.name && "Este campo es obligatorio"}
        />
        <Input
          id="surname"
          data-testid="contact-input-surname"
          placeholder="Apellido"
          name="surname"
          containerClassName={inputClassName}
          required
          // error={result?.errors?.surname && "Este campo es obligatorio"}
        />
        <Input
          id="email"
          data-testid="contact-input-email"
          placeholder="E-mail"
          name="email"
          type="email"
          containerClassName={inputClassName}
          required
          // error={result?.errors?.email && "Este campo es obligatorio"}
        />
      </div>
      <div className="flex-grow">
        <Textarea
          id="content"
          data-testid="contact-textarea-content"
          placeholder="¿Cual es tu objetivo?"
          rows={1}
          name="content"
          // error={result?.errors?.content && "Este campo es obligatorio"}
        />
      </div>
    </div>
    <div className="flex justify-center">
      <Suspense fallback={"Loading ReCaptcha"}>
        <ReCaptcha siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
      </Suspense>
    </div>
    <Button
      secondary
      bigger
      type="submit"
      className="mx-auto w-fit px-5 uppercase hover-hover:hover:bg-primary hover-hover:hover:text-white"
    >
      <Image
        className="mr-2"
        src="/assets/icons/send.icon.svg"
        alt="send icon"
        width={25}
        height={23}
      />
      envía tu mensaje
    </Button>
  </form>
);

export default ContactForm;
