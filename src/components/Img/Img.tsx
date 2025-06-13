import Image from "next/image";

type ImgPropsType = Omit<React.ComponentProps<typeof Image>, "src"> & {
  webPsrc?: string;
  src: string;
  srcType?: string;
  alt: string;
};

const Img: React.FC<ImgPropsType> = ({
  src,
  alt,
  srcType = "image/png",
  webPsrc,
  ...props
}) => {
  return (
    <picture data-test-id="img">
      {webPsrc && <source srcSet={webPsrc} type="image/webp" />}
      <source srcSet={src} type={srcType} />
      <Image src={src} alt={alt} loading="lazy" quality={90} {...props} />
    </picture>
  );
};

export default Img;
