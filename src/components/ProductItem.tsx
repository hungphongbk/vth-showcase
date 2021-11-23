import { Box, IconButton, ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import { HTMLProps, useCallback, useEffect, useRef, useState } from "react";
import { MotionBox, MotionTypo, ProductInfo } from "./commons";
import UserIcon from "../assets/icons/UserIcon";
import StatusBadge from "./StatusBadge";
import { useInViewport } from "react-in-viewport";
import { useRouter } from "next/router";
import InboxIcon from "@mui/icons-material/Inbox";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { SystemStyleObject } from "@mui/system";
import { usingShowcaseStatusColor } from "../utils/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Showcase } from "../types/graphql";

const MotionImageListItem = motion(ImageListItem);

const sxIcon: SystemStyleObject = { width: 16, height: 16, mr: 1 },
  sxDetailLine: SystemStyleObject = {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridGap: 1,
    "& .MuiTypography-root": { lineHeight: 1.5 },
  };

type ProductItemProps = {
  item: Showcase;
  // use this property to attach cursor point
  // when item with this property has been in viewport, trigger load more
  loadMorePoint?: boolean | undefined;
  onLoadMore?: () => void | Promise<void>;
} & HTMLProps<HTMLElement>;

export default function ProductItem({
  item,
  onClick,
  loadMorePoint,
  onLoadMore,
}: ProductItemProps) {
  const itemRef = useRef<HTMLElement>(),
    router = useRouter();
  const { inViewport } = useInViewport(itemRef),
    prefetched = useRef<Promise<any>>(),
    color = usingShowcaseStatusColor(item.status);

  const [clicked, setClicked] = useState(false);
  const getLayoutId = useCallback(
    (name: string = "") => {
      if (!clicked) return undefined;
      return `detail-${name}`;
    },
    [clicked]
  );

  const handleClick = (e: any) => {
    setClicked(true);
    onClick?.(e);
  };

  useEffect(() => {
    if (inViewport && !prefetched.current) {
      prefetched.current = router.prefetch(`/preview/${item.slug}`);
    }
    if (inViewport && loadMorePoint === true) {
      onLoadMore?.();
    }
  }, [inViewport, item.slug, loadMorePoint, onLoadMore, router]);

  return (
    <MotionImageListItem
      // @ts-ignore
      ref={itemRef}
      key={item.slug}
      layoutId={getLayoutId()}
      onClick={handleClick}
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
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: "20%",
          zIndex: -1,
          "& img": {
            objectFit: "cover",
            width: "100%",
            height: "100%",
          },
        }}
      >
        <motion.img
          layoutId={getLayoutId("image")}
          // layoutId={getLayoutId("/thumb")}
          src={item.image.path}
          alt={item.image.path}
        />
      </MotionBox>
      {/*<img src={item.image} alt={item.title} />*/}
      <ProductInfo>
        <MotionTypo
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: "0.773rem",
            mb: 0.4,
          }}
        >
          {item.name}
        </MotionTypo>
        <StatusBadge status={item.status} />
        <MotionBox
          sx={{
            mt: 0.5,
            display: "grid",
            gridTemplateAreas: '"user user" "count next" "date next"',
            gridTemplateColumns: "1fr auto",
            gridRowGap: 4,
            width: "100%",
          }}
        >
          <Box sx={[sxDetailLine, { gridArea: "user" }]}>
            <UserIcon sx={sxIcon} />
            <MotionTypo>{item.author}</MotionTypo>
          </Box>
          <Box sx={[sxDetailLine, { gridArea: "count" }]}>
            <InboxIcon sx={sxIcon} />
            <MotionTypo>1000 pcs</MotionTypo>
          </Box>
          <Box sx={[sxDetailLine, { gridArea: "date" }]}>
            <AccessTimeFilledIcon sx={sxIcon} />
            <MotionTypo>24/12/2021</MotionTypo>
          </Box>
          <IconButton
            sx={{
              bgcolor: color,
              color: "white",
              gridArea: "next",
              height: 26,
              width: 26,
              alignSelf: "end",
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </MotionBox>
      </ProductInfo>
    </MotionImageListItem>
  );
}
