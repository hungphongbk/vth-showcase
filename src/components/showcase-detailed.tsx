import { Box, Divider, Stack, Typography } from "@mui/material";
import { HTMLProps, ReactNode, useCallback, useEffect, useRef } from "react";
import { MotionBox, MotionTypo, ProductInfoDetailed } from "./commons";
import CollapseDetail from "./collapse-detail";
import StatusBadge from "./StatusBadge";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { CollapseCard, SlickSlider } from "./index";
import { Showcase } from "../types/graphql";
import { CommentSection, PrjUpdateDisplay } from "./post-page";
import { AspectRatio, LookupFilledPrimaryIcon } from "@hungphongbk/vth-sdk";
import VthNextImage from "./vth-next-image";
import ShowcaseRelateds from "./showcase-relateds";
import DetailedUserIcon from "../assets/icons/DetailedUserIcon";
import VthIconButton from "./vth-icon-button";
import { PreorderButton } from "./system";
import ImageListDisplay from "./image-list-display";
import { NoSsr } from "@mui/base";

const testPreview = (str: string) => /^\/preview/.test(str),
  testPost = (str: string) => /^\/post/.test(str);

type ShowcaseDetailedProps = {
  item: Showcase;
  slots?: {
    goBackButton?: ReactNode;
    afterSummary?: ReactNode;
  };
} & HTMLProps<HTMLElement>;
export default function ShowcaseDetailed({
  item,
  slots = {},
}: ShowcaseDetailedProps) {
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
      (url: string) => {
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

  const { goBackButton = undefined, afterSummary = undefined } = slots!;

  // @ts-ignore
  return (
    <>
      <MotionBox
        //@ts-ignore
        ref={wrapper}
        layoutId={"detail-"}
        sx={{
          position: "relative",
          overflowY: "scroll",
          cursor: "pointer",
          width: "100%",
          height: "100%",
          zIndex: 11,
          padding: 1,
          fontSize: 13,
          WebkitTapHighlightColor: "transparent",
        }}
        transition={{ duration: 0.4 }}
      >
        {goBackButton}
        <MotionBox
          layoutId={"info"}
          layout
          sx={{ borderRadius: 5, overflow: "hidden" }}
        >
          <MotionBox
            sx={{
              position: "relative",
            }}
            layoutId={"main-image"}
          >
            <VthNextImage
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
                <Typography sx={{ fontSize: "1.1em", lineHeight: "18px" }}>
                  {item.author.name}
                </Typography>
              </Stack>
            </Box>
            {afterSummary && (
              <>
                <Divider sx={{ mt: 1.2, mb: 1.2 }} />
                {afterSummary}
              </>
            )}
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
                <PreorderButton showcase={item} />
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
                <PrjUpdateDisplay updates={item.updates} />
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
                            <VthNextImage
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
            {(item.imageLists?.[0]?.images.length ?? 0) > 0 && (
              <CollapseCard
                header={"Video / hình ảnh"}
                disableCardStyle
                defaultOpen
              >
                <ImageListDisplay
                  showcase={item}
                  imageList={item.imageLists![0]}
                />
              </CollapseCard>
            )}
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
        <NoSsr>
          <ShowcaseRelateds slug={item.slug} />
        </NoSsr>
      </MotionBox>
    </>
  );
}
