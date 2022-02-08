import { AspectRatio, MediaDto } from "@hungphongbk/vth-sdk";
import LazyLoad from "react-lazyload";

type PreloadImageProps = {
  src: Pick<MediaDto, "path" | "preloadUrl" | "height" | "width">;
};
export default function PreloadImage({ src }: PreloadImageProps): JSX.Element {
  const height = 100;
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
      <LazyLoad once placeholder={<img src={src.preloadUrl} />}>
        <img src={src.path} />
      </LazyLoad>
    </AspectRatio>
  );
}
