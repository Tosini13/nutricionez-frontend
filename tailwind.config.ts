import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        secondary: "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        neutral: "var(--neutral)",
        "neutral-light": "var(--neutral-light)",
        "neutral-contrast": "var(--neutral-contrast)",
        "neutral-contrast-dark": "var(--neutral-contrast-dark)",
        price: "var(--price)",
        main: "var(--main)",
        "main-light": "var(--main-light)",
        black: "var(--black)",
        "gray-dark": "var(--gray-dark)",
        "gray-light": "var(--gray-light)",
        "gray-very-light": "var(--gray-very-light)",
        gray: "var(--gray)",
        "button-disabled-bg": "var(--button-disabled-bg)",
        "button-disabled-text": "var(--button-disabled-text)",
      },
      gradientColorStops: {
        "button-from-bg": "#68A957",
        "button-to-bg": "#74B463",
        "gray-light-opacity0": "rgba(201, 206, 206, 0)",
      },
      screens: {
        "semi-md": "1000px",
        large: "1160px",
        "hover-hover": { raw: "(hover: hover)" },
        "hover-none": { raw: "(hover: none)" },
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
} satisfies Config;
