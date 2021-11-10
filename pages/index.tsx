import type { InferGetStaticPropsType } from "next";
import { Box, Container } from "@mui/material";
import ProductList from "../src/components/ProductList";
import { AnimatePresence, motion } from "framer-motion";
import TuneIcon from "@mui/icons-material/Tune";
import React, { PropsWithChildren, useMemo, useState } from "react";
import { SxProps } from "@mui/system";
import { MotionBox } from "../src/components/commons";
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
    const p = posts.slice(2);
    if (!filter) return p;
    return p.filter((i) => i.status === filter);
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
      <ProductList posts={posts.slice(0, 2)} variant={"standard"} />
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
