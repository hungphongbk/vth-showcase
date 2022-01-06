import { Box, Divider, Stack, Typography } from "@mui/material";
import { HTMLProps, useCallback, useEffect, useRef, useState } from "react";
import {
  MotionBox,
  MotionTypo,
  ProductInfoDetailed,
  StyledTimeline,
} from "./commons";
import CollapseDetail from "./CollapseDetail";
import StatusBadge from "./StatusBadge";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { CollapseCard, SlickSlider } from "./index";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Showcase } from "../types/graphql";
import { CommentSection } from "./PostPage";
import {
  AspectRatio,
  LookupFilledPrimaryIcon,
  PreorderFilledPrimaryIcon,
} from "@hungphongbk/vth-sdk";
import { format } from "date-fns";
import NextImage from "./NextImage";
import ShowcaseRelateds from "./showcase-relateds";
import DetailedUserIcon from "../assets/icons/DetailedUserIcon";
import VthIconButton from "./vth-icon-button";
import PreorderDialog from "./system/preorder-dialog";

const testPreview = (str: string) => /^\/preview/.test(str),
  testPost = (str: string) => /^\/post/.test(str);

export default function ShowcaseDetailed({
  item,
  onClick,
}: { item: Showcase } & HTMLProps<HTMLElement>) {
  const router = useRouter();
  const currentPage: "preview" | "post" | undefined = testPreview(
    router.pathname
  )
    ? "preview"
    : testPost(router.pathname)
    ? "post"
    : undefined;
  const wrapper = useRef<HTMLElement>(),
    scrollHandler = useRef<any>();

  const routeChangeStart = useCallback(
      (url) => {
        if (
          (currentPage === "preview" && testPreview(url)) ||
          (currentPage === "post" && testPost(url))
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
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeEnd);
    };
  }, [routeChangeEnd, routeChangeStart, router.events]);

  const [open, setOpen] = useState(false);

  // @ts-ignore
  return (
    <>
      <MotionBox
        //@ts-ignore
        ref={wrapper}
        layoutId={"detail-"}
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
        // initial={{ x: "100%", opacity: 0 }}
        // animate={{ x: 0, opacity: "100%" }}
        // exit={{ x: 0, opacity: 0 }}
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
            }}
            layoutId={"main-image"}
          >
            <NextImage
              src={item.image.path}
              alt={item.image.path}
              width={item.image.width}
              height={item.image.height}
              objectFit={"cover"}
              sizes={"100vw"}
              placeholder={"blur"}
              blurDataURL={item.image.preloadUrl}
              priority
            />
            <motion.div>
              <ProductInfoDetailed
                onClick={() =>
                  currentPage === "preview" && router.push(`/post/${item.slug}`)
                }
              >
                <MotionTypo
                  // @ts-ignore
                  component={"h1"}
                  variant="h5"
                  sx={{ textTransform: "uppercase", fontWeight: 600 }}
                  layoutId={"name"}
                >
                  {item.name}
                </MotionTypo>
                <motion.div layoutId={"badge"}>
                  <StatusBadge
                    status={item.status}
                    outlined
                    sx={{ mt: 1 }}
                    large
                  />
                </motion.div>
              </ProductInfoDetailed>
            </motion.div>
          </MotionBox>
          <MotionBox
            sx={{
              p: 3,
              bgcolor: "white",
            }}
          >
            <Typography sx={{ mb: 1, fontSize: 15 }}>
              Thương hiệu: <strong>{item.brand.name}</strong>
            </Typography>
            <CollapseDetail>{item.description}</CollapseDetail>
            <Divider sx={{ mt: 1.2, mb: 1.2 }} />
            <Box
              sx={{
                display: "grid",
                gridTemplateAreas: "'user count' 'user release'",
                gridGap: 1,
              }}
            >
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                sx={{ gridArea: "user" }}
              >
                <DetailedUserIcon />
                <Typography sx={{ fontSize: "15px", lineHeight: "18px" }}>
                  {item.author.name}
                </Typography>
              </Stack>
            </Box>
            {currentPage === "preview" && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  gridGap: 12,
                  mt: 2,
                }}
              >
                <VthIconButton
                  sx={{ flexGrow: 1 }}
                  startIcon={
                    <LookupFilledPrimaryIcon sx={{ width: 22, height: 22 }} />
                  }
                  fullWidth
                  onClick={() => router.push(`/post/${item.slug}`)}
                >
                  XEM THÊM
                </VthIconButton>
                <VthIconButton
                  sx={{ flexGrow: 1 }}
                  startIcon={
                    <PreorderFilledPrimaryIcon sx={{ width: 22, height: 22 }} />
                  }
                  fullWidth
                  onClick={() => setOpen(true)}
                >
                  ĐĂNG KÝ ĐẶT TRƯỚC
                </VthIconButton>
                <PreorderDialog
                  open={open}
                  showcase={item}
                  onClose={() => setOpen(false)}
                />
              </Box>
            )}
          </MotionBox>
        </MotionBox>
        {currentPage === "post" && (
          <motion.div layoutId={"main content"}>
            {item.updates.length > 0 && (
              <CollapseCard
                header={"cập nhật dự án"}
                sx={{ mt: 1 }}
                defaultOpen
              >
                <StyledTimeline sx={{ px: 0 }}>
                  {item.updates.map((update) => (
                    <TimelineItem key={update.id}>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600 }}>
                              <strong>
                                {format(new Date(update.createdAt), "hh:mm aa")}
                              </strong>{" "}
                              | Thứ Sáu, ngày 15/10/2021
                            </Typography>
                          </Box>
                          <Typography>
                            Earth is the third planet from the Sun and the only
                            astronomical object known to harbor life. According
                            to radiometric dating estimation.
                          </Typography>
                        </Box>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </StyledTimeline>
              </CollapseCard>
            )}
            <CollapseCard
              header={"tính năng nổi bật"}
              sx={{ mt: 1 }}
              defaultOpen
            >
              <SlickSlider>
                {item.highlightFeatures.map((hf, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: "2px",
                      pb: 1,
                      display: "block !important",
                      height: "100%",
                    }}
                  >
                    <Stack
                      gap={2}
                      alignItems={"stretch"}
                      sx={{ height: "100%" }}
                    >
                      <Typography sx={{ fontSize: 13 }}>
                        <strong>{hf.name}</strong>
                      </Typography>
                      <Typography sx={{ fontSize: 13 }}>
                        {hf.description}
                      </Typography>
                      <AspectRatio
                        ratio={`${hf.image.width}/${hf.image.height}`}
                        sx={{ mt: "auto" }}
                      >
                        <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
                          <Box sx={{ position: "relative" }}>
                            <NextImage
                              src={hf.image.path}
                              alt={hf.name}
                              width={hf.image.width}
                              height={hf.image.height}
                              objectFit={"cover"}
                              sizes={"100vw"}
                              placeholder={"blur"}
                              blurDataURL={hf.image.preloadUrl}
                            />
                          </Box>
                        </Box>
                      </AspectRatio>
                    </Stack>
                  </Box>
                ))}
              </SlickSlider>
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
            <CommentSection slug={item.slug} />
          </motion.div>
        )}
        <ShowcaseRelateds slug={item.slug} />
      </MotionBox>
    </>
  );
}
