"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const FloatingWhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+34601533664"
      accountName="Esther Zamora"
      allowClickAway={false}
      notification
      messageDelay={0}
      avatar="/assets/icons/avatar.svg"
      chatMessage="Hola, ¿en qué puedo ayudarte?"
      statusMessage="Especialista en nutrición"
      placeholder="Escribe un mensaje..."
      buttonStyle={{
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "50%",
      }}
      className="min-w-[76px] min-h-[76px]"
    />
  );
};

export default FloatingWhatsAppButton;
