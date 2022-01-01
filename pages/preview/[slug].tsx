import { GetStaticProps } from "next";
import ShowcaseDetailed from "../../src/components/ShowcaseDetailed";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { MotionBox } from "../../src/components/commons";
import { apiService } from "../../src/api";
import { Showcase, ShowcaseEdge } from "../../src/types/graphql";
import { useAuthQuery } from "../../src/components/system/useAuthQuery";
import { NextSeo } from "next-seo";
import { ssrShowcasePreview } from "../../src/types/graphql.ssr";
import { withApollo } from "@apollo/client/react/hoc";

function PreviewPage() {
  const router = useRouter(),
    slug = router.query.slug as string;

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch("/");
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch(`/post/${slug}`);
  }, [slug, router]);

  const { loading, error, data } = useAuthQuery(ssrShowcasePreview.usePage, {
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
      <NextSeo canonical={"https://showcase.vaithuhay.com"} />
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

export default withApollo(
  ssrShowcasePreview.withPage((r) => ({
    variables: { slug: r.query.slug as string },
  }))(PreviewPage)
);

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params!.slug as string;

  return {
    ...(await ssrShowcasePreview.getServerPage(
      { variables: { slug } },
      context
    )),
    revalidate: 45,
  };
};

// noinspection JSUnusedGlobalSymbols
export async function getStaticPaths() {
  return {
    paths: (await apiService.getAllSlugs())
      .filter((slug) => !/^ci-test/.test(slug))
      .map((slug) => `/preview/${slug}`),
    fallback: "blocking",
  };
}
