import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Box, Button, ButtonProps } from "@mui/material";
import ProductDetailed from "../../src/components/ProductDetailed";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import {
  apolloClient,
  queryShowcasePreview,
  queryShowcases,
} from "../../src/api";
import {
  ShowcasePreviewQuery,
  ShowcasePreviewQueryVariables,
  ShowcasesQuery,
} from "../../src/types/graphql";
import HopTacIcon from "../../src/assets/icons/HopTacIcon";

const BottomButton = ({
    children,
    ...props
  }: PropsWithChildren<Pick<ButtonProps, "startIcon">>) => (
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
        <BottomButton>Đăng ký đặt trước</BottomButton>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await apolloClient.query<
    ShowcasePreviewQuery,
    ShowcasePreviewQueryVariables
  >({
    query: queryShowcasePreview,
    variables: {
      id: context.params!.id as string,
    },
  });

  // noinspection PointlessArithmeticExpressionJS
  return Promise.resolve({
    props: {
      post: data.showcase,
      posts: data.showcase.relatedShowcases,
    },
  });
};

export async function getStaticPaths() {
  const { data } = await apolloClient.query<ShowcasesQuery>({
    query: queryShowcases,
  });
  return {
    paths: data.showcases.map(({ id }) => `/post/${id}`),
    fallback: false,
  };
}
