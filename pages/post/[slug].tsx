import { GetStaticProps } from "next";
import { Box, Button, ButtonProps } from "@mui/material";
import ShowcaseDetailed from "../../src/components/ShowcaseDetailed";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useState } from "react";
import { apiService } from "../../src/api";
import HopTacIcon from "../../src/assets/icons/HopTacIcon";
import BookmarkIcon from "../../src/assets/icons/BookmarkIcon";
import dynamic from "next/dynamic";
import { ShowcaseStatus } from "../../src/types/graphql";
import { getShowcasePreview } from "../../src/service/graphql.service";
import { ReturnPromiseType } from "../../src/types/util.type";
import { InvestorInformation } from "../../src/components/PostPage";

const PreorderDialog = dynamic(
  () => import("../../src/components/PreorderDialog"),
  { ssr: false }
);

const BottomButton = ({
    children,
    ...props
  }: PropsWithChildren<
    Pick<ButtonProps, "startIcon" | "onClick" | "disabled">
  >) => (
    <Button
      variant={"contained"}
      sx={{
        bgcolor: "yellow.main",
        border: 3,
        borderColor: "yellow.light",
        color: "black",
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 15,
        boxShadow: "none",
        flex: "auto",
        height: 35,
        borderRadius: "17.5px",
        mt: "-24px",
        position: "relative",
      }}
      {...props}
    >
      {children}
    </Button>
  ),
  IconWrapper = (props: PropsWithChildren<unknown>) => (
    <Box
      sx={{
        height: "22px",
        width: "22px",
        borderRadius: "11px",
        bgcolor: "yellow.light",
        "& .Mui-disabled &": {
          bgcolor: "#f3f3f3",
          "& > svg": { color: "rgba(0,0,0,0.26)" },
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 3.25,
        left: 3.5,
        "& > svg": {
          display: "block",
        },
      }}
    >
      {props.children}
    </Box>
  );

export default function PostDetailedPage({
  post,
  posts,
}: ReturnPromiseType<typeof getShowcasePreview>) {
  const router = useRouter();
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch("/");
  }, [router]);
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ bgcolor: "#f0f0f0" }}>
      <InvestorInformation />
      <ShowcaseDetailed
        item={post}
        onClick={() => router.push("/")}
        posts={posts}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-evenly",
          gap: 1,
          p: 1,
          px: 3,
          height: 35,
          zIndex: 12,
          bgcolor: "white",
          boxShadow: "0px -4px 30px rgba(0, 0, 0, 0.15)",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <BottomButton
          startIcon={
            <IconWrapper>
              <HopTacIcon
                sx={{ color: "yellow.main", transform: "translateX(1px)" }}
              />
            </IconWrapper>
          }
        >
          Hợp tác
        </BottomButton>
        <BottomButton
          onClick={() => setOpen(true)}
          startIcon={
            <IconWrapper>
              <BookmarkIcon sx={{ color: "yellow.main", width: 10 }} />
            </IconWrapper>
          }
          disabled={post.status !== ShowcaseStatus.Coming}
        >
          Đăng ký đặt trước
        </BottomButton>
      </Box>
      {post.status === ShowcaseStatus.Coming && (
        <PreorderDialog
          open={open}
          showcase={post}
          onClose={() => setOpen(false)}
        />
      )}
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // noinspection PointlessArithmeticExpressionJS
  return {
    props: {
      ...(await apiService.getShowcasePreview(context.params!.slug as string)),
    },
    revalidate: 60,
  };
};

// noinspection JSUnusedGlobalSymbols
export async function getStaticPaths() {
  return {
    paths: (await apiService.getAllSlugs()).map((slug) => `/post/${slug}`),
    fallback: "blocking",
  };
}
