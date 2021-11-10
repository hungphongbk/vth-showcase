import { Divider, ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import { HTMLProps, useEffect, useRef } from "react";
import { MotionBox, MotionTypo, ProductInfo } from "./commons";
import { DataItem } from "../assets/data";
import UserIcon from "../assets/icons/UserIcon";
import StatusBadge from "./StatusBadge";
import { useInViewport } from "react-in-viewport";
import { useRouter } from "next/router";

const MotionImageListItem = motion(ImageListItem);

export default function ProductItem({
  item,
  onClick,
}: { item: DataItem } & HTMLProps<HTMLElement>) {
  const itemRef = useRef<HTMLElement>(),
    router = useRouter();
  const { inViewport } = useInViewport(itemRef),
    prefetched = useRef<Promise<any>>();

  useEffect(() => {
    if (inViewport && !prefetched.current) {
      prefetched.current = router.prefetch(`/preview/${item.id}`);
    }
  }, [inViewport, item.id, router]);

  return (
    <MotionImageListItem
      layout
      // @ts-ignore
      ref={itemRef}
      key={item.id}
      // layoutId={getLayoutId()}
      onClick={onClick}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        mb: "0 !important",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    >
      <MotionBox
        // layoutId={getLayoutId("/thumb-wrapper")}
        sx={{
          flexGrow: 1,
          "& img": {
            objectFit: "cover",
            width: "100%",
            height: "100%",
          },
        }}
      >
        <motion.img
          // layoutId={getLayoutId("/thumb")}
          src={item.image}
          alt={item.title}
        />
      </MotionBox>
      {/*<img src={item.image} alt={item.title} />*/}
      <ProductInfo>
        <MotionTypo
          variant="h6"
          sx={{ textTransform: "uppercase", fontWeight: 600 }}
        >
          {item.title}
        </MotionTypo>
        <StatusBadge status={item.status} />
        <Divider sx={{ mt: 0.5, mb: 0.5 }} />
        <MotionBox
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridGap: 1,
            "& .MuiTypography-root": { lineHeight: 1.5 },
          }}
        >
          <UserIcon sx={{ width: 16, height: 16, mr: 1 }} />
          <MotionTypo>{item.author}</MotionTypo>
        </MotionBox>
      </ProductInfo>
    </MotionImageListItem>
  );
}
