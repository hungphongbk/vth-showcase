import type { InferGetStaticPropsType } from "next";
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import ProductList from "../src/components/ProductList";
import { AnimatePresence, motion } from "framer-motion";
import TuneIcon from "@mui/icons-material/Tune";
import React, { PropsWithChildren, useMemo, useState } from "react";
import { SxProps } from "@mui/system";
import { MotionBox, ProductInfoSecond } from "../src/components/commons";
import FilterPanel from "../src/components/FilterPanel";
import { range } from "lodash";
import { VthCountdown } from "../src/components";
import Banner from "../src/components/Banner";
import { apiService } from "../src/api";
import { ShowcaseEdge } from "../src/types/graphql";

const MotionContainer = motion(Container);

const FilterTag = ({
  sx,
  children,
  ...others
}: PropsWithChildren<{ sx?: SxProps; [key: string]: any }>) => (
  <Box
    sx={{
      height: 27,
      px: 2,
      borderRadius: "13.5px",
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      ...sx,
    }}
    {...others}
  >
    {children}
  </Box>
);

function Home({
  posts: _posts,
  pageInfo: _pageInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState<string | undefined>();

  const [posts, setPosts] = useState(() => _posts),
    [pageInfo, setPageInfo] = useState(() => _pageInfo);

  const loadMore = async () => {
    if (!pageInfo.hasNextPage) return;
    const data = await apiService.getAllShowcases(pageInfo.endCursor);
    setPosts([...posts, ...data.edges]);
    setPageInfo(data.pageInfo);
  };

  // useEffect(() => console.log(pageInfo), [pageInfo]);

  const restPost = useMemo(() => {
    if (!filter) return posts;
    return posts.filter((i) => i.node.status === filter);
  }, [filter, posts]);

  const changeFilter = (value: string) => {
    setFilter(value);
  };

  return (
    <MotionContainer
      sx={{ mt: 2, pl: 1, pr: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{}}
    >
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
      <Box sx={{ my: 1, maxWidth: "100%", overflowX: "scroll" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              bgcolor: "yellow.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setOpenFilter(true)}
          >
            <TuneIcon sx={{ width: 16, height: 16 }} />
          </Box>
          <FilterTag
            sx={
              filter === "coming soon"
                ? { bgcolor: "yellow.main", color: "black" }
                : { bgcolor: "#d5d5d5", color: "white" }
            }
            onClick={() => changeFilter("coming soon")}
          >
            Coming Soon
          </FilterTag>
          <FilterTag
            sx={
              filter === "showcase"
                ? { bgcolor: "yellow.main", color: "black" }
                : { bgcolor: "#d5d5d5", color: "white" }
            }
            onClick={() => changeFilter("showcase")}
          >
            Showcase
          </FilterTag>
          <FilterTag
            sx={
              filter === "idea"
                ? { bgcolor: "yellow.main", color: "black" }
                : { bgcolor: "#d5d5d5", color: "white" }
            }
            onClick={() => changeFilter("idea")}
          >
            Idea
          </FilterTag>
        </Box>
      </Box>
      <AnimatePresence>
        <motion.div
          key={filter ?? "none"}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.15 }}
        >
          <ProductList
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
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
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
    </MotionContainer>
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
