import type { InferGetStaticPropsType } from "next";
import { Box, Container, ImageList } from "@mui/material";
import demoData from "../src/assets/data";
import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import ProductItem from "../src/components/ProductItem";
import ProductDetailed from "../src/components/ProductDetailed";

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selected, setSelected] = useState(-1);
  return (
    <Container sx={{ mt: 2, pl: 1, pr: 1 }}>
      <LayoutGroup>
        <ImageList variant="masonry" cols={2} gap={8}>
          {posts.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
              onClick={() => setSelected(item.id)}
            />
          ))}
        </ImageList>

        <AnimatePresence>
          {selected >= 0 && (
            <Box
              sx={{
                position: "fixed",
                zIndex: 9,
                top: 0,
                left: 0,
                padding: 1,
              }}
            >
              <ProductDetailed
                item={posts.find((i) => i.id === selected)!}
                onClick={() => setSelected(-1)}
              />
            </Box>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </Container>
  );
}

export default Home;

export const getStaticProps = async () => {
  return Promise.resolve({ props: { posts: demoData } });
};
