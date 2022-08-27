import { useCallback, useEffect, useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: string;
}

const LazyloadImage = ({ placeholder, src, ...props }: ImageProps) => {
  const [imgSrc, setSrc] = useState(placeholder || src);

  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);
  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener("load", onLoad);
    return () => {
      img.removeEventListener("load", onLoad);
    };
  }, [src, onLoad]);

  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={imgSrc} src={imgSrc} />;
};

export default LazyloadImage;
