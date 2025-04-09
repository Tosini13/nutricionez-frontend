"use client";
import { ENV } from "@/env";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

type ReCaptchaPropsType = {
  error?: string | null;
};

const ReCaptcha: React.FC<ReCaptchaPropsType> = ({ error }) => {
  const reCaptchaRef = React.useRef<ReCAPTCHA>(null);

  return (
    <div data-test-id="re_captcha" className="relative">
      <div className="h-[75px] w-[300px]">
        <ReCAPTCHA
          ref={reCaptchaRef}
          sitekey={(ENV.RECAPTCHA_SITE_KEY as string) ?? ""}
        />
      </div>
      {error && (
        <p className="absolute right-0 bottom-0 translate-y-[100%] text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default ReCaptcha;
