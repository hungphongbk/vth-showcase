import { GetStaticProps } from "next";
import ShowcaseDetailed from "../../src/components/ShowcaseDetailed";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MotionBox } from "../../src/components/commons";
import { addApolloState, apiService, apolloClient } from "../../src/api";
import {
  Showcase,
  ShowcaseEdge,
  ShowcasePreviewDocument,
  ShowcasePreviewQuery,
  ShowcasePreviewQueryVariables,
  useShowcasePreviewQuery,
} from "../../src/types/graphql";
import { useAuthQuery } from "../../src/components/system/useAuthQuery";

export default function PreviewPage({ slug }: { slug: string }) {
  const router = useRouter();

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch("/");
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch(`/post/${slug}`);
  }, [slug, router]);

  const { loading, error, data } = useAuthQuery(useShowcasePreviewQuery, {
    variables: { slug },
  });

  const showcase = data?.showcase as Showcase,
    showcases = data?.showcases.edges as ShowcaseEdge[];

  if (!showcase) return null;

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
      <ShowcaseDetailed
        item={showcase}
        onClick={() => router.back()}
        posts={showcases}
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
  const slug = context.params!.slug as string;
  await apolloClient.query<ShowcasePreviewQuery, ShowcasePreviewQueryVariables>(
    {
      query: ShowcasePreviewDocument,
      variables: {
        slug,
      },
      errorPolicy: "ignore",
    }
  );
  return addApolloState(apolloClient, {
    props: { slug },
    revalidate: 60,
  });
};

// noinspection JSUnusedGlobalSymbols
export async function getStaticPaths() {
  return {
    paths: (await apiService.getAllSlugs()).map((slug) => `/preview/${slug}`),
    fallback: "blocking",
  };
}
