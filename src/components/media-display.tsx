import { ImageProps } from "next/image";
import { MediaFormatType } from "../types/graphql";
import NextImage from "./next-image";
import YouTube from "react-youtube";
import { MediaBase } from "@hungphongbk/vth-sdk";
import { NoSsr } from "@mui/base";

type MediaDisplayProps<T> = Omit<
  ImageProps,
  "src" | "blurDataURL" | "placeholder"
> & {
  src: T;
};
export default function MediaDisplay<T extends MediaBase = MediaBase>({
  src,
  ...props
}: MediaDisplayProps<T>): JSX.Element {
  if (src.formatType === MediaFormatType.Image)
    return (
      <NextImage
        src={src.path}
        placeholder={"blur"}
        blurDataURL={src.preloadUrl}
        {...props}
      />
    );
  return (
    <NoSsr>
      <YouTube
        className="h-full w-full object-cover"
        containerClassName="h-full w-full object-cover"
        videoId={src.path}
        opts={{
          height: "100%",
          width: "100%",
        }}
        onError={console.error}
      />
    </NoSsr>
  );
}
