import { GetStaticProps, InferGetStaticPropsType } from "next";
import ProductDetailed from "../../src/components/ProductDetailed";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MotionBox } from "../../src/components/commons";
import { apiService } from "../../src/api";

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
      .prefetch(`/post/${post.slug}`)
      .then(() => console.log("prefetch post"));
  }, [post.slug, router]);
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
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // noinspection PointlessArithmeticExpressionJS
  return Promise.resolve({
    props: {
      ...(await apiService.getShowcasePreview(context.params!.slug as string)),
    },
  });
};

// noinspection JSUnusedGlobalSymbols
export async function getStaticPaths() {
  return {
    paths: (await apiService.getAllShowcases()).map(
      ({ slug }) => `/preview/${slug}`
    ),
    fallback: false,
  };
}
