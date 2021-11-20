import { GetStaticProps, InferGetStaticPropsType } from "next";
import ProductDetailed from "../../src/components/ProductDetailed";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MotionBox } from "../../src/components/commons";
import {
  apolloClient,
  queryShowcasePreview,
  queryShowcases,
} from "../../src/api";
import {
  ShowcasePreviewQuery,
  ShowcasePreviewQueryVariables,
  ShowcasesQuery,
} from "../../src/types/graphql";

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
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await apolloClient.query<
    ShowcasePreviewQuery,
    ShowcasePreviewQueryVariables
  >({
    query: queryShowcasePreview,
    variables: {
      id: context.params!.id as string,
    },
  });

  // noinspection PointlessArithmeticExpressionJS
  return Promise.resolve({
    props: {
      post: data.showcase,
      posts: data.showcase.relatedShowcases,
    },
  });
};

export async function getStaticPaths() {
  const { data } = await apolloClient.query<ShowcasesQuery>({
    query: queryShowcases,
  });
  return {
    paths: data.showcases.map(({ id }) => `/preview/${id}`),
    fallback: false,
  };
}
