import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Box, Button, ButtonProps } from "@mui/material";
import ProductDetailed from "../../src/components/ProductDetailed";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useState } from "react";
import { apiService } from "../../src/api";
import HopTacIcon from "../../src/assets/icons/HopTacIcon";
import { PreorderDialog } from "../../src/components";

const BottomButton = ({
    children,
    ...props
  }: PropsWithChildren<Pick<ButtonProps, "startIcon" | "onClick">>) => (
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
        height: 30,
        borderRadius: "15px",
        mt: "-22px",
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
        height: "20px",
        width: "20px",
        borderRadius: "10px",
        bgcolor: "yellow.light",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 2,
        left: 2,
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
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch("/");
  }, [router]);
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ bgcolor: "#f0f0f0" }}>
      <ProductDetailed
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
          height: 30,
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
              <HopTacIcon />
            </IconWrapper>
          }
        >
          Hợp tác
        </BottomButton>
        <BottomButton onClick={() => setOpen(true)}>
          Đăng ký đặt trước
        </BottomButton>
      </Box>
      <PreorderDialog
        open={open}
        price={post.expectedSalePrice}
        onClose={() => setOpen(false)}
      />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // noinspection PointlessArithmeticExpressionJS
  return Promise.resolve({
    props: {
      ...(await apiService.getShowcasePreview(context.params!.slug as string)),
    },
  });
};

// noinspection JSUnusedGlobalSymbols
export async function getStaticPaths() {
  return {
    paths: (await apiService.getAllSlugs()).map((slug) => `/post/${slug}`),
    fallback: false,
  };
}
