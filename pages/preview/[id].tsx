import demoData from "../../src/assets/data";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ProductDetailed from "../../src/components/ProductDetailed";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MotionBox } from "../../src/components/commons";

export default function PreviewPage({
  post,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch("/");
    // noinspection JSIgnoredPromiseFromCall
    router
      .prefetch(`/post/${post.id}`)
      .then(() => console.log("prefetch post"));
  }, [post.id, router]);
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
          bgcolor: "yellow.main",
        }}
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.3 }}
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
