import { AspectRatio, MediaDto } from "@hungphongbk/vth-sdk";
import LazyLoad from "./lazyload-image";
import VthNextImage from "../../../src/components/vth-next-image";

type PreloadImageProps = {
  src: Pick<MediaDto, "path" | "preloadUrl" | "height" | "width">;
  alt: string;
};
export default function ShowcaseFeaturedImage({
  src,
  alt,
}: PreloadImageProps): JSX.Element {
  return (
    <AspectRatio
      ratio={`1/1`}
      sx={{
        borderRadius: "5px",
        overflow: "hidden",
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      }}
    >
      {process.env.NEXT_PUBLIC_SDK ? (
        <LazyLoad placeholder={src.preloadUrl} src={src.path} alt={alt} />
      ) : (
        <VthNextImage
          src={src.path}
          alt={alt}
          layout={"fill"}
          objectFit={"cover"}
          sizes={"50vw"}
          placeholder={"blur"}
          blurDataURL={src.preloadUrl}
        />
      )}
    </AspectRatio>
  );
}
