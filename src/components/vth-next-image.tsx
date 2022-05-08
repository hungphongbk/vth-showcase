import Image, { ImageProps } from "next/image";

type NextImageProps = {};
export default function VthNextImage(
  props: Omit<ImageProps, "unoptimized">
): JSX.Element {
  return <Image {...props} unoptimized />;
}
