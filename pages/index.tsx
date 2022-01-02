import type { GetStaticProps } from "next";
import { Box, Container, Fade, ImageList, Typography } from "@mui/material";
import ShowcaseList from "../src/components/showcase-list";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { MotionBox } from "../src/components/commons";
import Banner from "../src/components/Banner";
import { withApollo } from "../src/api";
import {
  IndexPageQuery,
  ShowcaseEdge,
  ShowcaseStatus,
} from "../src/types/graphql";
import SimpleFilter from "../src/components/indexPage/SimpleFilter";
import { sxFullSizeFixed } from "../src/utils/predefinedSx";
import FilterTuneIcon from "../src/assets/icons/FilterTuneIcon";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { ssrIndex, ssrIndexClient } from "../src/types/graphql.ssr";
import { LoadingIndicator } from "@hungphongbk/vth-sdk";
import { NetworkStatus } from "@apollo/client";
import ShowcaseFeaturedItem from "../src/components/showcase-featured-item";

const FilterPanel = dynamic(() => import("../src/components/filter-panel"), {
  ssr: false,
});

const Home = () => {
  const { data: ssrData } = ssrIndex.usePage(() => ({
      fetchPolicy: "cache-only",
    })),
    {
      data: clientData,
      networkStatus,
      loading,
      fetchMore,
      refetch,
    } = ssrIndexClient.usePage(() => ({
      variables: {
        filter: {},
      },
      notifyOnNetworkStatusChange: true,
    }));
  const data = useMemo(() => {
    return {
      ...ssrData,
      ...clientData,
    } as unknown as IndexPageQuery;
  }, [ssrData, clientData]);
  const posts = data!.showcases.edges,
    featured = data!.featured.edges,
    pageInfo = data!.showcases.pageInfo,
    banner = data!.banner;

  const [openFilter, setOpenFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState<
      ShowcaseStatus | undefined
    >(),
    [statusFiltered, setStatusFiltered] = useState<
      ShowcaseStatus | undefined
    >();

  console.log(networkStatus, loading, statusFilter);

  /**
   * Calculate final filter
   */
  useEffect(() => {
    refetch({
      filter: { status: { eq: statusFilter } },
    }).then(() => setStatusFiltered(statusFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);
  /**
   * Trigger reload API
   */
  // useEffect(() => {
  //   console.log(calculatedFilter);
  //   if (typeof calculatedFilter !== "undefined")
  //     refetch({ filter: calculatedFilter }).then(() => {
  //       setStatusFiltered(statusFilter);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [calculatedFilter]);

  const loadMore = async () => {
    if (!pageInfo.hasNextPage) return;
    await fetchMore({
      variables: {
        filter: { status: { eq: statusFilter } },
        cursor: pageInfo.endCursor,
      },
    });
  };

  return (
    <Container sx={{ mt: 2, pl: 1, pr: 1 }}>
      <NextSeo canonical={"https://showcase.vaithuhay.com"} />
      <Banner banner={banner} />
      <Typography
        sx={{
          fontSize: 15,
          fontWeight: 600,
          textAlign: "center",
          width: "100%",
          my: 2,
          textTransform: "uppercase",
        }}
      >
        Dự án đang chuẩn bị &quot;rời bệ phóng&quot;
      </Typography>
      <ImageList variant={"standard"} cols={2} gap={8} component={"section"}>
        {featured.map(({ node }, index) => (
          <ShowcaseFeaturedItem item={node} key={node.id} />
        ))}
      </ImageList>
      <Box
        sx={{
          my: 0.7,
          maxWidth: "100%",
          overflowX: "scroll",
          overflowY: "visible",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, py: 0.7 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              mt: "-5px",
              mb: "-5px",
              borderRadius: "50%",
              bgcolor: "yellow.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setOpenFilter(true)}
          >
            <FilterTuneIcon sx={{ width: 20, height: 20 }} />
          </Box>
          <SimpleFilter
            filter={statusFilter}
            onFilterChange={setStatusFilter}
          />
        </Box>
      </Box>
      <Box sx={{ minHeight: "75vh", position: "relative" }}>
        <Fade in={networkStatus !== NetworkStatus.ready}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              pt: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LoadingIndicator />
          </Box>
        </Fade>
        <ShowcaseList
          posts={posts as unknown as ShowcaseEdge[]}
          variant={"standard"}
          onLoadMore={loadMore}
        />
      </Box>
      <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99 }}>
        <AnimatePresence>
          {openFilter && (
            <>
              <MotionBox
                sx={{
                  ...sxFullSizeFixed,
                  bgcolor: "rgba(0,0,0,.65)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenFilter(false)}
              />
              <FilterPanel />
            </>
          )}
        </AnimatePresence>
      </Box>
    </Container>
  );
};

// noinspection JSUnusedGlobalSymbols
export default withApollo(ssrIndex.withPage(() => ({}))(Home));

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    ...(await ssrIndex.getServerPage({}, ctx)),
    revalidate: 45,
  };
};
