import type { InferGetStaticPropsType } from "next";
import { Box, Container } from "@mui/material";
import demoData from "../src/assets/data";
import ProductList from "../src/components/ProductList";
import { motion } from "framer-motion";
import TuneIcon from "@mui/icons-material/Tune";
import { PropsWithChildren } from "react";
import { SxProps } from "@mui/system";

const MotionContainer = motion(Container);

const FilterTag = (props: PropsWithChildren<{ sx?: SxProps }>) => (
  <Box
    sx={{
      height: 27,
      px: 2,
      borderRadius: "13.5px",
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      ...props.sx,
    }}
  >
    {props.children}
  </Box>
);

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
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
          >
            <TuneIcon sx={{ width: 16, height: 16 }} />
          </Box>
          <FilterTag sx={{ bgcolor: "#d5d5d5", color: "white" }}>
            Coming Soon
          </FilterTag>
          <FilterTag sx={{ bgcolor: "#FFDE50", color: "black" }}>
            Showcase
          </FilterTag>
          <FilterTag sx={{ bgcolor: "#d5d5d5", color: "white" }}>
            Idea
          </FilterTag>
        </Box>
      </Box>
      <ProductList posts={posts.slice(2)} />
    </MotionContainer>
  );
}

export default Home;

export const getStaticProps = async () => {
  return Promise.resolve({ props: { posts: demoData } });
};
