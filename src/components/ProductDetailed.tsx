import { Box, Divider, Typography } from "@mui/material";
import { HTMLProps, useCallback, useEffect, useRef, useState } from "react";
import { MotionBox, MotionTypo, ProductInfo, StyledTimeline } from "./commons";
import { DataItem } from "../assets/data";
import UserIcon from "../assets/icons/UserIcon";
import CollapseDetail from "./CollapseDetail";
import StatusBadge from "./StatusBadge";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ProductList, { IdContextType } from "./ProductList";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { CollapseCard } from "./index";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function ProductDetailed({
  item,
  onClick,
  posts,
}: { item: DataItem; posts: DataItem[] } & HTMLProps<HTMLElement>) {
  const router = useRouter();
  const currentPage = /^\/preview/.test(router.pathname) ? "preview" : "post";
  const wrapper = useRef<HTMLElement>(),
    scrollHandler = useRef<any>();

  const [context, setContext] = useState<IdContextType>("sub");

  const onAnimateComplete = useCallback(() => setContext("main"), []);

  const routeChangeStart = useCallback(
      (url) => {
        if (
          (currentPage === "preview" && /^\/preview/.test(url)) ||
          (currentPage === "post" && /^\/post/.test(url))
        )
          scrollHandler.current = () =>
            wrapper.current?.scrollTo({ top: 0, behavior: "smooth" });
      },
      [currentPage]
    ),
    routeChangeEnd = useCallback(() => {
      scrollHandler.current?.();
    }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeEnd);
    return () => {
      setContext("sub");
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeEnd);
    };
  }, [routeChangeEnd, routeChangeStart, router.events]);

  // @ts-ignore
  return (
    <>
      <MotionBox
        //@ts-ignore
        ref={wrapper}
        layoutId={"detail"}
        layout
        sx={{
          position: "relative",
          overflowY: "scroll",
          cursor: "pointer",
          width: "100%",
          height: "100%",
          zIndex: 11,
          padding: 1,
          fontSize: 13,
        }}
        onLayoutAnimationComplete={onAnimateComplete}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: "100%" }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {currentPage === "preview" && (
          <MotionBox
            data-testid={"go-back-button"}
            sx={{
              position: "fixed",
              top: 8,
              left: 8,
              p: 2,
              zIndex: 99,
              color: "white",
            }}
            onClick={onClick}
          >
            <ArrowBackIosRoundedIcon
              sx={{
                fontSize: 32,
              }}
            />
          </MotionBox>
        )}
        <MotionBox
          layoutId={"info"}
          sx={{ borderRadius: 5, overflow: "hidden" }}
        >
          <MotionBox
            sx={{
              position: "relative",
              "& img": {
                width: "100%",
                userSelect: "none",
              },
            }}
          >
            <MotionBox
              // layoutId={`${item.id}/thumb-wrapper`}
              layoutId={"image"}
              sx={{
                "& img": {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <motion.img
                // layoutId={`${item.id}/thumb`}
                src={item.image}
                alt={item.title}
              />
            </MotionBox>
            <motion.div>
              <ProductInfo
                onClick={() =>
                  currentPage === "preview" && router.push(`/post/${item.id}`)
                }
              >
                <MotionTypo
                  variant="h5"
                  sx={{ textTransform: "uppercase", fontWeight: 600 }}
                  layoutId={"name"}
                >
                  {item.title}
                </MotionTypo>
                <motion.div layoutId={"badge"}>
                  <StatusBadge status={item.status} outlined sx={{ mt: 1 }} />
                </motion.div>
                <Divider sx={{ mt: 0.5, mb: 0.5 }} />
                <MotionBox
                  layoutId={"user"}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gridGap: 1,
                  }}
                >
                  <UserIcon sx={{ width: 16, height: 16, mr: 1 }} />
                  <MotionTypo>{item.author}</MotionTypo>
                </MotionBox>
              </ProductInfo>
            </motion.div>
          </MotionBox>
          <MotionBox
            sx={{
              p: 3,
              bgcolor: "white",
            }}
          >
            <Typography sx={{ mb: 1 }}>
              Thương hiệu: <strong>{item.brand}</strong>
            </Typography>
            <CollapseDetail>{item.description}</CollapseDetail>
          </MotionBox>
        </MotionBox>
        {currentPage === "post" && (
          <motion.div layoutId={"main content"}>
            <CollapseCard
              header={"tính năng nổi bật"}
              sx={{ mt: 1 }}
              defaultOpen
            >
              <Typography sx={{ fontSize: 13 }}>
                <strong>TÍNH NĂNG 1</strong>
              </Typography>
              <Typography sx={{ fontSize: 13 }}>
                Earth is the third planet from the Sun and the only astronomical
                object known to harbor life. According to radiometric dating
                estimation. Earth is the third planet from the Sun and the only
                astronomical object known to harbor life. According to
                radiometric dating estimation...
              </Typography>
            </CollapseCard>
            <CollapseCard
              header={"câu chuyện chưa kể"}
              sx={{ mt: 1 }}
              defaultOpen
            >
              <Typography sx={{ fontSize: 13 }}>
                Kể về câu chuyện phía sau dự án của bạn, và những khó khăn bạn
                phải trải qua để đưa sản phẩm đến với người tiêu dùng...
              </Typography>
            </CollapseCard>
            <CollapseCard header={"cập nhật dự án"} sx={{ mt: 1 }} defaultOpen>
              <StyledTimeline sx={{ px: 0 }}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box>
                      <Box>
                        <Typography sx={{ fontWeight: 600 }}>
                          08:25 PM | Thứ Sáu, ngày 15/10/2021
                        </Typography>
                      </Box>
                      <Typography>
                        Earth is the third planet from the Sun and the only
                        astronomical object known to harbor life. According to
                        radiometric dating estimation.
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box>
                      <Box>
                        <Typography sx={{ fontWeight: 600 }}>
                          12:46 AM | Thứ Hai, ngày 18/10/2021
                        </Typography>
                      </Box>
                      <Typography>
                        Earth is the third planet from the Sun and the only
                        astronomical object known to harbor life. According to
                        radiometric dating estimation. Earth is the third planet
                        from the Sun and the only astronomical object...
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: "green.main" }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box>
                      <Box>
                        <Typography sx={{ fontWeight: 600 }}>
                          09:45 AM | Thứ Năm, ngày 21/10/2021
                        </Typography>
                      </Box>
                      <Typography>
                        Earth is the third planet from the Sun and the only
                        astronomical object known to harbor life. According to
                        radiometric dating estimation. Earth is the third planet
                        from the Sun and the only astronomical object...
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </StyledTimeline>
            </CollapseCard>
          </motion.div>
        )}
        <MotionBox
          initial={{ display: "none", opacity: 0 }}
          animate={{ display: "block", opacity: 1 }}
          exit={{ display: "none", opacity: 0 }}
        >
          <Typography
            component={"h3"}
            variant={"h5"}
            sx={{ my: 2, textAlign: "center", fontWeight: 700, fontSize: 20 }}
          >
            DỰ ÁN LIÊN QUAN
          </Typography>
          <ProductList posts={posts} context={context} />
        </MotionBox>
      </MotionBox>
    </>
  );
}
