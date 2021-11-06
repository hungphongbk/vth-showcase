import { PanInfo, useAnimation } from "framer-motion";
import { Box, Divider, Typography } from "@mui/material";
import { HTMLProps } from "react";
import { MotionBox, MotionTypo, ProductInfo } from "./commons";
import { DataItem } from "../assets/data";
import UserIcon from "../assets/icons/UserIcon";
import CollapseDetail from "./CollapseDetail";

export default function ProductDetailed({
  item,
  onClick,
}: { item: DataItem } & HTMLProps<HTMLElement>) {
  const controls = useAnimation();

  const handleDragEnd = (event: any, info: PanInfo) => {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    if (offset > 100) {
      onClick?.(event);
    } else {
      controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  };

  // @ts-ignore
  return (
    <>
      <MotionBox
        layoutId={item.id as unknown as string}
        sx={{
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          cursor: "pointer",
          width: "100%",
          "& img": {
            width: "100%",
            userSelect: "none",
          },
          zIndex: 11,
        }}
        drag="y"
        dragDirectionLock
        dragPropagation
        dragConstraints={{ top: 0, bottom: 300 }}
        animate={controls}
        /* @ts-ignore */
        onDragEnd={handleDragEnd}
      >
        <Box sx={{ position: "relative" }}>
          <img src={item.image} alt={item.title} />
          <ProductInfo>
            <MotionTypo variant="h5" layoutId={`${item.id}/title`}>
              {item.title}
            </MotionTypo>
            <Divider sx={{ mt: 0.5, mb: 0.5 }} />
            <MotionBox
              sx={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gridGap: 1,
              }}
            >
              <UserIcon sx={{ width: 16, height: 16, mr: 1 }} />
              <MotionTypo>{item.author}</MotionTypo>
            </MotionBox>
          </ProductInfo>
        </Box>
        <Box sx={{ p: 2, backgroundColor: "white" }}>
          <Typography sx={{ fontSize: 15, mb: 1 }}>
            Thương hiệu: <strong>{item.brand}</strong>
          </Typography>
          <CollapseDetail>{item.description}</CollapseDetail>
        </Box>
      </MotionBox>
      <MotionBox
        sx={{
          position: "fixed",
          zIndex: 10,
          top: 0,
          left: 0,
          padding: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "#FFDE50",
        }}
        onClick={onClick}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
