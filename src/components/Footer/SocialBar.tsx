import Image from "next/image";

type TSocialBarProps = {
  mode?: "dark" | "light";
};

const SocialBar: React.FC<TSocialBarProps> = ({ mode = "light" }) => {
  const classNameImg = mode === "dark" ? "invert" : undefined;
  return (
    <>
      <a
        href="https://instagram.com/ez.nutricion?igshid=YmMyMTA2M2Y="
        target={"_blank"}
        rel="noreferrer"
      >
        <Image
          className={classNameImg}
          src="apps/frontend/public/assets/icons/media/insta_icon.svg"
          alt="instagram icon"
          width={70}
          height={70}
        />
      </a>
      <a href="https://wa.me/34601533664" target={"_blank"} rel="noreferrer">
        <Image
          className={classNameImg}
          src="apps/frontend/public/assets/icons/media/whatsapp_icon.svg"
          alt="WhatsApp icon"
          width={70}
          height={70}
        />
      </a>
    </>
  );
};

export default SocialBar;
