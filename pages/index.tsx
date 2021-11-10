import type { InferGetStaticPropsType } from "next";
import { Container } from "@mui/material";
import demoData from "../src/assets/data";
import ProductList from "../src/components/ProductList";
import { motion } from "framer-motion";

const MotionContainer = motion(Container);

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MotionContainer
      sx={{ mt: 2, pl: 1, pr: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{}}
    >
      <ProductList posts={posts} />
    </MotionContainer>
  );
}

export default Home;

export const getStaticProps = async () => {
  return Promise.resolve({ props: { posts: demoData } });
};
