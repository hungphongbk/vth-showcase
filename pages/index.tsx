import type { GetStaticProps } from "next";
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import ShowcaseList from "../src/components/ShowcaseList";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { MotionBox, ProductInfoSecond } from "../src/components/commons";
import { AspectRatio, VthCountdown } from "../src/components";
import Banner from "../src/components/Banner";
import { withApollo } from "../src/api";
import {
  IndexPageQuery,
  Maybe,
  ShowcaseEdge,
  ShowcaseFilter,
  ShowcaseStatus,
} from "../src/types/graphql";
import SimpleFilter from "../src/components/indexPage/SimpleFilter";
import { sxFullSizeFixed } from "../src/utils/predefinedSx";
import FilterTuneIcon from "../src/assets/icons/FilterTuneIcon";
import dynamic from "next/dynamic";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ssrIndex, ssrIndexClient } from "../src/types/graphql.ssr";
import { FnsDate } from "@hungphongbk/vth-sdk";

const FilterPanel = dynamic(() => import("../src/components/FilterPanel"), {
  ssr: false,
});

const Home = () => {
  const ssrData = ssrIndex.usePage(() => ({ fetchPolicy: "cache-only" })).data,
    {
      data: clientData,
      fetchMore,
      refetch,
    } = ssrIndexClient.usePage(() => ({
      variables: {
        filter: {},
      },
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

  const [calculatedFilter, setCalculatedFilter] = useState<
    Maybe<ShowcaseFilter>
  >({});

  /**
   * Calculate final filter
   */
  useEffect(() => {
    if (
      typeof statusFilter === "undefined" &&
      typeof calculatedFilter !== "undefined"
    )
      setCalculatedFilter({});
    if (typeof statusFilter !== "undefined") {
      // @ts-ignore
      setCalculatedFilter({
        status: { eq: statusFilter },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  /**
   * Trigger reload API
   */
  useEffect(() => {
    if (typeof calculatedFilter !== "undefined")
      refetch({ filter: calculatedFilter }).then(() => {
        setStatusFiltered(statusFilter);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculatedFilter]);

  const loadMore = async () => {
    if (!pageInfo.hasNextPage) return;
    await fetchMore({
      variables: {
        filter: calculatedFilter,
        cursor: pageInfo.endCursor,
      },
    });
  };

  const restPost = useMemo(() => {
    if (!statusFilter) return posts;
    return posts.filter((i: any) => i.node.status === statusFilter);
  }, [statusFilter, posts]);

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
      <ImageList variant={"standard"} cols={2} gap={8}>
        {featured.map(({ node }, index) => (
          <ImageListItem
            key={node.id}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              cursor: "pointer",
              mb: 2,
              boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <AspectRatio>
              <Box sx={{ zIndex: -1 }}>
                <Image
                  src={node.image.path}
                  alt={node.name}
                  layout={"fill"}
                  objectFit={"cover"}
                  sizes={"50vw"}
                  placeholder={"blur"}
                  blurDataURL={node.image.preloadUrl}
                />
              </Box>
            </AspectRatio>
            <ProductInfoSecond>
              <Box
                sx={{
                  height: 35,
                  width: "100%",
                  borderRadius: 17.5,
                  bgcolor: "yellow.main",
                  border: "3px solid white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-26px",
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: 600,
                    fontSize: 10,
                    textAlign: "center",
                    lineHeight: "11.74px",
                  }}
                  component={"div"}
                >
                  {node.name}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: 10, my: 0.5 }}>
                Dự kiến ra mắt:{" "}
                <strong>
                  <FnsDate value={node.expectedSaleAt} format={"dd/MM/yyyy"} />
                </strong>
              </Typography>
              <Box sx={{ width: "100%", my: 0.5 }}>
                <VthCountdown />
              </Box>
            </ProductInfoSecond>
          </ImageListItem>
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
      <AnimatePresence>
        <motion.div
          key={statusFiltered ?? "none"}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.15 }}
        >
          <ShowcaseList
            posts={restPost as unknown as ShowcaseEdge[]}
            variant={"standard"}
            onLoadMore={loadMore}
          />
        </motion.div>
      </AnimatePresence>
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
