import type { InferGetStaticPropsType } from "next";
import { Container } from "@mui/material";
import demoData from "../src/assets/data";
import ProductList from "../src/components/ProductList";

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container sx={{ mt: 2, pl: 1, pr: 1 }}>
      <ProductList posts={posts} />
    </Container>
  );
}

export default Home;

export const getStaticProps = async () => {
  return Promise.resolve({ props: { posts: demoData } });
};
