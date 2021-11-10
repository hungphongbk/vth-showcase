import type { InferGetStaticPropsType } from "next";
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  LinearProgress,
  Typography,
} from "@mui/material";
import ProductList from "../src/components/ProductList";
import { AnimatePresence, motion } from "framer-motion";
import TuneIcon from "@mui/icons-material/Tune";
import React, { PropsWithChildren, useMemo, useState } from "react";
import { SxProps } from "@mui/system";
import { MotionBox, ProductInfoSecond } from "../src/components/commons";
import FilterPanel from "../src/components/FilterPanel";
import demoData from "src/assets/data";

const MotionContainer = motion(Container);

const FilterTag = ({
  sx,
  children,
  ...others
}: PropsWithChildren<{ sx?: SxProps; [key: string]: any }>) => (
  <Box
    sx={{
      height: 27,
      px: 2,
      borderRadius: "13.5px",
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      ...sx,
    }}
    {...others}
  >
    {children}
  </Box>
);

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState<string | undefined>();

  const restPost = useMemo(() => {
    if (!filter) return posts;
    return posts.filter((i) => i.status === filter);
  }, [filter, posts]);

  const changeFilter = (value: string) => {
    if (value !== filter) {
      setFilter(undefined);
      setTimeout(() => setFilter(value), 200);
    } else setFilter(undefined);
  };

  return (
    <MotionContainer
      sx={{ mt: 2, pl: 1, pr: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{}}
    >
      <ImageList variant={"standard"} cols={2} gap={8}>
        <ImageListItem
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            cursor: "pointer",
            mb: 2,
            boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
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
            <img
              // layoutId={getLayoutId("/thumb")}
              src={
                "https://product.hstatic.net/1000069970/product/carpio22_fcc7132be79748e08ffabac9bd65aa4f_large.png"
              }
              alt={"ke co tay cong thai hoc"}
            />
          </Box>
          <ProductInfoSecond>
            <Box
              sx={{
                height: 35,
                borderRadius: 17.5,
                backgroundColor: "#FFDE50",
                border: "3px solid white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "-26px",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  fontWeight: 600,
                  fontSize: 10,
                  textAlign: "center",
                  lineHeight: "11.74px",
                }}
                component={"div"}
              >
                Kê cổ tay công thái học Carpio 2.0 - DeltaHub
              </Typography>
            </Box>
            <Typography sx={{ fontSize: 10, my: 0.5 }}>
              Số lượng đã đặt: <strong>70/250</strong>
            </Typography>
            <Box sx={{ width: "100%", my: 0.5 }}>
              <LinearProgress
                variant="determinate"
                value={7000 / 250}
                sx={{ height: 8, borderRadius: 4.5 }}
              />
            </Box>
            <Typography sx={{ fontSize: 10, my: 0.5 }}>
              Dự kiến ra mắt: <strong>11/15/2021</strong>
            </Typography>
          </ProductInfoSecond>
        </ImageListItem>
      </ImageList>
      <Box sx={{ my: 1, maxWidth: "100%", overflowX: "scroll" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              bgcolor: "#FFDE50",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setOpenFilter(true)}
          >
            <TuneIcon sx={{ width: 16, height: 16 }} />
          </Box>
          <FilterTag
            sx={
              filter === "coming soon"
                ? { bgcolor: "#FFDE50", color: "black" }
                : { bgcolor: "#d5d5d5", color: "white" }
            }
            onClick={() => changeFilter("coming soon")}
          >
            Coming Soon
          </FilterTag>
          <FilterTag
            sx={
              filter === "showcase"
                ? { bgcolor: "#FFDE50", color: "black" }
                : { bgcolor: "#d5d5d5", color: "white" }
            }
            onClick={() => changeFilter("showcase")}
          >
            Showcase
          </FilterTag>
          <FilterTag
            sx={
              filter === "idea"
                ? { bgcolor: "#FFDE50", color: "black" }
                : { bgcolor: "#d5d5d5", color: "white" }
            }
            onClick={() => changeFilter("idea")}
          >
            Idea
          </FilterTag>
        </Box>
      </Box>
      <ProductList posts={restPost} variant={"standard"} />
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99 }}>
        <AnimatePresence>
          {openFilter && (
            <>
              <MotionBox
                sx={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: "rgba(0,0,0,.65)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenFilter(false)}
              />
              <FilterPanel />
            </>
          )}
        </AnimatePresence>
      </Box>
    </MotionContainer>
  );
}

export default Home;

export const getStaticProps = async () => {
  return Promise.resolve({ props: { posts: demoData } });
};
