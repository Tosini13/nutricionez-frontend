"use client";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

const runCookieConsent = (setIsConsented: (isConsented: boolean) => void) =>
  CookieConsent.run({
    categories: {
      analytics: {
        enabled: true,
        readOnly: false,
      },
    },
    language: {
      default: "es",
      translations: {
        es: {
          consentModal: {
            description:
              "Acepta nuestras cookies saludables para disfrutar del mejor contenido 🍪",
            acceptAllBtn: "Aceptar todas",
            showPreferencesBtn: "Gestionar mis preferencias",
          },
          preferencesModal: {
            title: "Gestionar preferencias de cookies",
            acceptAllBtn: "Aceptar todas",
            acceptNecessaryBtn: "Rechazar todas",
            savePreferencesBtn: "Aceptar selección actual",
            closeIconLabel: "Cerrar modal",
            sections: [
              {
                title: "¿Quién dijo ... cookies?",
                description: "¡Quiero uno!",
              },
              {
                title: "Cookies estrictamente necesarias",
                description:
                  "Estas cookies son esenciales para el funcionamiento correcto del sitio web y no pueden ser desactivadas.",

                //this field will generate a toggle linked to the 'necessary' category
                linkedCategory: "necessary",
              },
              {
                title: "Rendimiento y análisis",
                description:
                  "Estas cookies recopilan información sobre cómo usas nuestro sitio web. Todos los datos están anonimizados y no pueden ser utilizados para identificarte.",
                linkedCategory: "analytics",
              },
              {
                title: "Más información",
                description:
                  'Para cualquier consulta sobre mi política de cookies y tus opciones, por favor <a href="/#contact">contacta con nosotros</a>',
              },
            ],
          },
        },
      },
    },
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom center",
        flipButtons: false,
        equalWeightButtons: false,
      },
      preferencesModal: {
        layout: "box",
        flipButtons: false,
        equalWeightButtons: false,
      },
    },
    onChange: ({ cookie }) => {
      if (cookie.categories?.includes("analytics")) {
        setIsConsented(true);
      } else {
        setIsConsented(false);
      }
    },
  });

const checkIfAnalyticsIsAccepted = () =>
  CookieConsent.getCookie().categories?.includes("analytics");

const COOKIE_CONSENT_DELAY = 3000;

export default function CookieConsentBanner() {
  const [isConsented, setIsConsented] = useState(() =>
    checkIfAnalyticsIsAccepted()
  );

  useEffect(() => {
    setTimeout(() => {
      runCookieConsent(setIsConsented);
    }, COOKIE_CONSENT_DELAY);
    setIsConsented(checkIfAnalyticsIsAccepted());
  }, []);

  return (
    <>
      {isConsented && <GoogleAnalytics gaId="G-50FD8DLWT6" />}
      <button
        className="bg-primary relative rounded-full h-14 w-14 flex items-center justify-center hover-hover:hover:bg-main transition-all duration-300 shadow-lg"
        onClick={() => CookieConsent.showPreferences()}
      >
        {!isConsented && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1 translate-x-1/4 -translate-y-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
            </svg>
          </span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className="fill-primary-light"
          viewBox="0 0 256 256"
        >
          <path d="M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z"></path>
        </svg>
      </button>
    </>
  );
}
