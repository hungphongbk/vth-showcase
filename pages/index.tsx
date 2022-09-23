import type { GetStaticProps } from "next";
import { Box, Container, Fade, NoSsr } from "@mui/material";
import ShowcaseList from "../src/components/showcase-list";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { MotionBox } from "../src/components/commons";
import Banner from "../src/components/banner";
import { withApollo } from "../src/api";
import { ShowcaseEdge, ShowcaseStatus } from "../src/types/graphql";
import SimpleFilter from "../src/components/index-page/simple-filter";
import FilterTuneIcon from "../src/assets/icons/FilterTuneIcon";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { ssrIndex, ssrIndexClient } from "../src/types/graphql.ssr";
import { LoadingIndicator } from "@hungphongbk/vth-sdk";
import { NetworkStatus } from "@apollo/client";
import Footer from "../src/components/footer";
import { InfiniteScroll } from "../src/components/infinite-scroll";
import { CreatorAndInvestorActions } from "src/components/system";
import ShowcaseFeatured from "../src/components/index-page/showcase-featured";

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
    };
  }, [ssrData, clientData]);
  const posts = data.showcases?.edges,
    featured = data.featured!.edges,
    pageInfo = data.showcases?.pageInfo,
    banner = data.banner;

  const [openFilter, setOpenFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState<
      ShowcaseStatus | undefined
    >(),
    [statusFiltered, setStatusFiltered] = useState<
      ShowcaseStatus | undefined
    >();

  /**
   * Calculate final filter
   */
  useEffect(() => {
    const filter: any = statusFilter ? { status: { eq: statusFilter } } : {};
    refetch({
      filter,
    }).then(() => setStatusFiltered(statusFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  const loadMore = async () => {
    if (!pageInfo) return;
    if (!pageInfo.hasNextPage) return;
    const filter: any = statusFilter ? { status: { eq: statusFilter } } : {};
    await fetchMore({
      variables: {
        filter,
        cursor: pageInfo.endCursor,
      },
    });
  };

  return (
    <>
      <Container sx={{ mt: 2, pl: 1, pr: 1 }}>
        <NextSeo canonical={"https://showcase.vaithuhay.com"} />
        <Banner banner={banner} />
        <ShowcaseFeatured items={featured.map((i) => i.node)} />
        <Box
          sx={{
            my: 0.7,
            maxWidth: "100%",
            overflowX: "scroll",
            overflowY: "visible",
          }}
        >
          <Box className="flex items-center gap-2" sx={{ py: 0.7 }}>
            <Box
              className="flex items-center justify-center"
              sx={{
                width: 38,
                height: 38,
                mt: "-5px",
                mb: "-5px",
                borderRadius: "50%",
                bgcolor: "yellow.main",
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
              className="absolute inset-x-0 top-0 flex justify-center"
              sx={{
                pt: 3,
              }}
            >
              <LoadingIndicator />
            </Box>
          </Fade>
          {pageInfo && (
            <InfiniteScroll
              next={loadMore}
              hasMore={pageInfo.hasNextPage!}
              threshold={1000}
            >
              <ShowcaseList
                posts={posts as unknown as ShowcaseEdge[]}
                variant={"standard"}
              />
            </InfiniteScroll>
          )}
        </Box>
        <Box className="fixed inset-x-0 bottom-0 z-[99]">
          {/* @ts-ignore */}
          <AnimatePresence>
            {openFilter && (
              <>
                <MotionBox
                  className="fixed inset-0"
                  sx={{
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
      <NoSsr>
        <Footer />
      </NoSsr>
      <CreatorAndInvestorActions />
    </>
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
