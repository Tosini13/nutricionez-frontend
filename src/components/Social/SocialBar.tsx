"use client";

import dynamic from "next/dynamic";
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";

const DynamicCookieConsentBanner = dynamic(
  () => import("@/components/CookieConsent/CookieConsentBanner"),
  { ssr: false }
);

const SocialBar = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      <DynamicCookieConsentBanner />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default SocialBar;
