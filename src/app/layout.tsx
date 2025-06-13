import FooterModule from "@/components/Footer/FooterModule";
import HeaderModule from "@/components/Header/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nutricionista - Esther Zamora",
  description:
    "¿Estás buscando un Dietista Nutricionista online o en Valencia? Puedo ayudarte a mejorar tu salud, mediante un plan de alimentación personalizado. Visita nuestros servicios: sobrepeso, obesidad, diabetes y otras patologías, embarazo y lactancia, alimentación vegetariana y vegana… ¡Aprovecha los descuentos especiales al reservar hoy la cita!",
  keywords:
    "nutricionista, dietista, nutrición, dieta, salud, Valencia, online, consulta nutricional",
  authors: [{ name: "Esther Zamora" }],
  creator: "Esther Zamora",
  publisher: "Esther Zamora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nutricionez.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nutricionista - Esther Zamora",
    description:
      "¿Estás buscando un Dietista Nutricionista online o en Valencia? Puedo ayudarte a mejorar tu salud, mediante un plan de alimentación personalizado.",
    url: "https://nutricionez.com",
    siteName: "Nutricionez",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutricionista - Esther Zamora",
    description:
      "¿Estás buscando un Dietista Nutricionista online o en Valencia? Puedo ayudarte a mejorar tu salud, mediante un plan de alimentación personalizado.",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.className} antialiased bg-[#FFF] text-base text-[#313131]`}
      >
        <HeaderModule />
        {children}
        <FooterModule />
      </body>
    </html>
  );
}
