import { GetStaticProps } from "next";
import ShowcaseDetailed from "../../src/components/showcase-detailed";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { MotionBox } from "../../src/components/commons";
import { apiService, withApollo } from "../../src/api";
import { Showcase } from "../../src/types/graphql";
import { useAuthQuery } from "../../src/components/system/useAuthQuery";
import { NextSeo } from "next-seo";
import { ssrShowcasePreview } from "../../src/types/graphql.ssr";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

function PreviewPage() {
  const router = useRouter(),
    slug = router.query.slug as string;

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch("/");
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch(`/post/${slug}`);
  }, [slug, router]);

  const { data } = useAuthQuery(
    ssrShowcasePreview.usePage(() => ({
      fetchPolicy: "cache-and-network",
      variables: { slug },
    }))
  );

  const showcase = data?.showcase as Showcase;

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
        slots={{
          goBackButton: (
            <Box
              data-testid={"go-back-button"}
              sx={{
                position: "fixed",
                top: 8,
                left: 8,
                p: 2,
                zIndex: 99,
                color: "white",
              }}
              onClick={() => router.back()}
            >
              <ArrowBackIosRoundedIcon
                sx={{
                  fontSize: 32,
                }}
              />
            </Box>
          ),
        }}
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
