import { AnimatePresence } from "framer-motion";
import { MediaBase } from "@hungphongbk/vth-sdk";
import Image from "next/image";
import { Box } from "@mui/material";
import { sxFullSize, sxFullSizeAbsolute } from "../utils/predefinedSx";
import { MotionBox } from "./commons";

type BannerEffectImageProps = {
  direction: number;
  image: MediaBase;
  goBack: () => void;
  goNext: () => void;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function BannerEffectImage({
  direction,
  image,
  goBack,
  goNext,
}: BannerEffectImageProps): JSX.Element {
  return (
    <AnimatePresence initial={false} custom={direction}>
      <MotionBox
        sx={{ ...sxFullSizeAbsolute, p: 1 }}
        key={image.path}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        // @ts-ignore
        onDragEnd={(e, data) => {
          const swipe = swipePower(data.offset.x, data.velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            goNext();
          } else if (swipe > swipeConfidenceThreshold) {
            goBack();
          }
        }}
      >
        <Box
          sx={{
            position: "relative",
            ...sxFullSize,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Image
            src={image.path}
            alt={"ke co tay cong thai hoc"}
            layout={"fill"}
            objectFit={"cover"}
            sizes={"100vw"}
          />
        </Box>
      </MotionBox>
    </AnimatePresence>
  );
}
