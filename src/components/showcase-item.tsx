import { Box, IconButton, ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import { HTMLProps, useCallback, useRef, useState } from "react";
import { MotionBox, MotionTypo, ProductInfo } from "./commons";
import StatusBadge from "./StatusBadge";
import InboxIcon from "@mui/icons-material/Inbox";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { SystemStyleObject } from "@mui/system";
import { usingShowcaseStatusColor } from "../utils/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Showcase } from "../types/graphql";
import VthNextImage from "./vth-next-image";
import Link from "./Link";
import styles from "./showcase-item.module.css";

const MotionImageListItem = motion(ImageListItem);

const sxDetailLine: SystemStyleObject = {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridGap: 1,
  "& .MuiTypography-root": { lineHeight: 1.5 },
};

type ProductItemProps = {
  item: Showcase;
  prefixRoute: string;
} & HTMLProps<HTMLElement>;

export default function ShowcaseItem({
  prefixRoute,
  item,
  onClick,
}: ProductItemProps) {
  const itemRef = useRef<HTMLElement>();
  const color = usingShowcaseStatusColor(item.status);

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
        width: "100%",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      component={"article"}
    >
      <Link
        href={`${prefixRoute}/${item.slug}`}
        noLinkStyle
        aria-label={item.name}
        sx={{
          flex: "1 1 100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MotionBox
          // layoutId={getLayoutId("/thumb-wrapper")}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: "30%",
            zIndex: -1,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            overflow: "hidden",
            // "& img": {
            //   objectFit: "cover",
            //   width: "100%",
            //   height: "100%",
            // },
          }}
        >
          <VthNextImage
            // layoutId={getLayoutId("/thumb")}
            src={item.image.path}
            alt={item.name}
            layout={"fill"}
            objectFit={"cover"}
            sizes={"50vw"}
            placeholder={"blur"}
            blurDataURL={item.image.preloadUrl}
          />
        </MotionBox>
        {/*<img src={item.image} alt={item.title} />*/}
        <ProductInfo>
          <MotionTypo
            variant="h6"
            //@ts-ignore
            component={"h2"}
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "0.75rem",
              mb: 0.4,
            }}
            title={item.name}
          >
            {item.name}
          </MotionTypo>
          <StatusBadge status={item.status} className="mt-1" />
          <MotionBox
            className="mt-2 grid w-full"
            sx={{
              gridTemplateAreas: '"count next" "date next"',
              gridTemplateColumns: "1fr auto",
              gridRowGap: 4,
              width: "100%",
            }}
          >
            <Box className={styles.DetailLine} sx={{ gridArea: "count" }}>
              <InboxIcon className={styles.Icon} />
              <MotionTypo>1000 pcs</MotionTypo>
            </Box>
            <Box className={styles.DetailLine} sx={{ gridArea: "date" }}>
              <AccessTimeFilledIcon className={styles.Icon} />
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
      </Link>
    </MotionImageListItem>
  );
}
