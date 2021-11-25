import type { InferGetStaticPropsType } from "next";
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
import FilterPanel from "../src/components/FilterPanel";
import { range } from "lodash";
import { VthCountdown } from "../src/components";
import Banner from "../src/components/Banner";
import { apiService } from "../src/api";
import {
  Maybe,
  ShowcaseEdge,
  ShowcaseFilter,
  ShowcaseStatus,
} from "../src/types/graphql";
import SimpleFilter from "../src/components/indexPage/SimpleFilter";
import { sxFullSizeFixed } from "../src/utils/predefinedSx";
import FilterTuneIcon from "../src/assets/icons/FilterTuneIcon";

function Home({
  posts: _posts,
  pageInfo: _pageInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [openFilter, setOpenFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState<
      ShowcaseStatus | undefined
    >(),
    [statusFiltered, setStatusFiltered] = useState<
      ShowcaseStatus | undefined
    >();

  const [calculatedFilter, setCalculatedFilter] = useState<
    Maybe<ShowcaseFilter> | undefined
  >(undefined);

  /**
   * Calculate final filter
   */
  useEffect(() => {
    if (
      typeof statusFilter === "undefined" &&
      typeof calculatedFilter !== "undefined"
    )
      setCalculatedFilter(undefined);
    if (typeof statusFilter !== "undefined") {
      // @ts-ignore
      setCalculatedFilter({ status: { eq: statusFilter } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  /**
   * Trigger reload API
   */
  useEffect(() => {
    apiService.getAllShowcases(calculatedFilter).then((data) => {
      setStatusFiltered(statusFilter);
      setPosts(data.edges);
      setPageInfo(data.pageInfo);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculatedFilter]);

  const [posts, setPosts] = useState(() => _posts),
    [pageInfo, setPageInfo] = useState(() => _pageInfo);

  const loadMore = async () => {
    if (!pageInfo.hasNextPage) return;
    const data = await apiService.getAllShowcases(
      calculatedFilter,
      pageInfo.endCursor
    );
    setPosts([...posts, ...data.edges]);
    setPageInfo(data.pageInfo);
  };

  // useEffect(() => console.log(pageInfo), [pageInfo]);

  const restPost = useMemo(() => {
    if (!statusFilter) return posts;
    return posts.filter((i) => i.node.status === statusFilter);
  }, [statusFilter, posts]);

  return (
    <Container sx={{ mt: 2, pl: 1, pr: 1 }}>
      <Banner sx={{ mt: -2, mx: -1 }} />
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
        {range(0, 2).map((index) => (
          <ImageListItem
            key={index}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              cursor: "pointer",
              mb: 2,
              boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              // layoutId={getLayoutId("/thumb-wrapper")}
              sx={{
                flexGrow: 1,
                "& img": {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <img
                // layoutId={getLayoutId("/thumb")}
                src={
                  "https://product.hstatic.net/1000069970/product/carpio22_fcc7132be79748e08ffabac9bd65aa4f_large.png"
                }
                alt={"ke co tay cong thai hoc"}
              />
            </Box>
            <ProductInfoSecond>
              <Box
                sx={{
                  height: 35,
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
                  Kê cổ tay công thái học Carpio 2.0 - DeltaHub
                </Typography>
              </Box>
              <Typography sx={{ fontSize: 10, my: 0.5 }}>
                Dự kiến ra mắt: <strong>15/11/2021</strong>
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
}

// noinspection JSUnusedGlobalSymbols
export default Home;

export const getStaticProps = async () => {
  const { edges, pageInfo } = await apiService.getAllShowcases();
  return Promise.resolve({
    props: { posts: edges, pageInfo },
  });
};
