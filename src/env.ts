export const ENV = {
  RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
};

if (!ENV.RECAPTCHA_SITE_KEY) {
  console.error(
    "No RECAPTCHA_SITE_KEY found in environment variables. Please set it up."
  );
}
if (!ENV.STRAPI_URL) {
  console.error(
    "No STRAPI_URL found in environment variables. Please set it up."
  );
}
