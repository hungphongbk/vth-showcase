import { GetStaticProps, InferGetStaticPropsType } from "next";
import demoData from "../../src/assets/data";
import { Box } from "@mui/material";
import ProductDetailed from "../../src/components/ProductDetailed";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PostDetailedPage({
  post,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch("/");
  }, [router]);
  return (
    <Box sx={{ bgcolor: "#f0f0f0" }}>
      <ProductDetailed
        item={post}
        onClick={() => router.back()}
        posts={posts}
      />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // noinspection PointlessArithmeticExpressionJS
  return Promise.resolve({
    props: {
      post: demoData.find(
        (i) => i.id === (context.params!.id as unknown as number) * 1
      )!,
      posts: demoData.filter(
        (i) => i.id !== (context.params!.id as unknown as number) * 1
      ),
    },
  });
};

export async function getStaticPaths() {
  return {
    paths: demoData.map(({ id }) => `/post/${id}`),
    fallback: false,
  };
}
