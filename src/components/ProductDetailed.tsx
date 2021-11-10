import { Box, Divider, Typography } from "@mui/material";
import { HTMLProps, useCallback, useEffect, useState } from "react";
import { MotionBox, MotionTypo, ProductInfo } from "./commons";
import { DataItem } from "../assets/data";
import UserIcon from "../assets/icons/UserIcon";
import CollapseDetail from "./CollapseDetail";
import StatusBadge from "./StatusBadge";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ProductList, { IdContextType } from "./ProductList";
import { motion } from "framer-motion";

export default function ProductDetailed({
  item,
  onClick,
  posts,
}: { item: DataItem; posts: DataItem[] } & HTMLProps<HTMLElement>) {
  const [context, setContext] = useState<IdContextType>("sub");

  const onAnimateComplete = useCallback(() => setContext("main"), []);
  useEffect(() => {
    return () => {
      setContext("sub");
    };
  }, []);

  // @ts-ignore
  return (
    <>
      <MotionBox
        // layoutId={`${item.id}`}
        sx={{
          position: "relative",
          overflowY: "scroll",
          cursor: "pointer",
          width: "100%",
          height: "100%",
          zIndex: 11,
          padding: 1,
        }}
        onLayoutAnimationComplete={onAnimateComplete}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: "100%" }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <MotionBox
          data-testid={"go-back-button"}
          sx={{
            position: "fixed",
            top: 8,
            left: 8,
            p: 2,
            zIndex: 99,
            color: "white",
          }}
          onClick={onClick}
        >
          <ArrowBackIosRoundedIcon
            sx={{
              fontSize: 32,
            }}
          />
        </MotionBox>
        <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
          <Box
            sx={{
              position: "relative",
              "& img": {
                width: "100%",
                userSelect: "none",
              },
            }}
          >
            <MotionBox
              layoutId={`${item.id}/thumb-wrapper`}
              sx={{
                "& img": {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <motion.img
                layoutId={`${item.id}/thumb`}
                src={item.image}
                alt={item.title}
              />
            </MotionBox>
            <ProductInfo>
              <MotionTypo
                variant="h5"
                sx={{ textTransform: "uppercase", fontWeight: 600 }}
              >
                {item.title}
              </MotionTypo>
              <StatusBadge status={item.status} outlined sx={{ mt: 1 }} />
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
          <Box
            sx={{
              p: 2,
              bgcolor: "white",
            }}
          >
            <Typography sx={{ fontSize: 15, mb: 1 }}>
              Thương hiệu: <strong>{item.brand}</strong>
            </Typography>
            <CollapseDetail>{item.description}</CollapseDetail>
          </Box>
        </Box>
        <Typography
          component={"h3"}
          variant={"h5"}
          sx={{ my: 2, textAlign: "center", fontWeight: 700, fontSize: 20 }}
        >
          DỰ ÁN LIÊN QUAN
        </Typography>
        <MotionBox
          animate={{ display: "block", opacity: 1 }}
          exit={{ display: "none", opacity: 0 }}
        >
          <ProductList posts={posts} context={context} />
        </MotionBox>
      </MotionBox>
      {/*<div>*/}
      {/*</div>*/}
      <MotionBox
        data-testid={"backdrop"}
        sx={{
          position: "fixed",
          zIndex: 10,
          top: 0,
          left: 0,
          padding: 1,
          width: "100%",
          height: "100%",
          bgcolor: "#FFDE50",
        }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
