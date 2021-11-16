import { GetStaticProps, InferGetStaticPropsType } from "next";
import demoData from "../../src/assets/data";
import { Box, Button, IconButton } from "@mui/material";
import ProductDetailed from "../../src/components/ProductDetailed";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
          display: "grid",
          gridTemplateColumns: "1fr 0 1fr",
          p: 1,
          height: 60,
          zIndex: 12,
          bgcolor: "white",
          boxShadow: "0px -4px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Button
          variant={"contained"}
          sx={{
            bgcolor: "#F3F3F3",
            color: "black",
            fontWeight: 600,
            fontSize: 15,
            boxShadow: "none",
          }}
        >
          Hợp tác
        </Button>
        <IconButton
          sx={{
            width: 66,
            height: 66,
            bgcolor: "yellow.main",
            border: "8px solid white",
            ml: "-33px",
            mt: "-22px",
            zIndex: 2,
          }}
        >
          <ShoppingCartIcon sx={{ height: 30, width: 30 }} />
        </IconButton>
        <Button
          variant={"contained"}
          sx={{
            bgcolor: "#F3F3F3",
            color: "black",
            fontWeight: 600,
            fontSize: 15,
            boxShadow: "none",
          }}
        >
          Lưu dự án
        </Button>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // noinspection PointlessArithmeticExpressionJS
  return Promise.resolve({
    props: {
      post: demoData.find(
        (i) => i.id === (context.params!.id as unknown as number) * 1
      )!,
      posts: demoData.filter(
        (i) => i.id !== (context.params!.id as unknown as number) * 1
      ),
    },
  });
};

export async function getStaticPaths() {
  return {
    paths: demoData.map(({ id }) => `/post/${id}`),
    fallback: false,
  };
}
