import demoData from "../../src/assets/data";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ProductDetailed from "../../src/components/ProductDetailed";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PreviewPage({
  post,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch("/");
  }, [router]);
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 9,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflowY: "scroll",
      }}
    >
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
    paths: demoData.map(({ id }) => `/preview/${id}`),
    fallback: false,
  };
}
