import { GetStaticProps } from "next";
import { Box, Button, ButtonProps } from "@mui/material";
import ShowcaseDetailed from "../../src/components/showcase-detailed";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useState } from "react";
import { apiService, withApollo } from "../../src/api";
import HopTacIcon from "../../src/assets/icons/HopTacIcon";
import BookmarkIcon from "../../src/assets/icons/BookmarkIcon";
import { Showcase, ShowcaseStatus } from "../../src/types/graphql";
import { InvestorInformation } from "../../src/components/PostPage";
import { useAuthQuery } from "../../src/components/system/useAuthQuery";
import { NextSeo } from "next-seo";
import { ssrShowcaseDetail } from "../../src/types/graphql.ssr";
import { PreorderDialog } from "../../src/components/system";

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

function PostDetailedPage() {
  const router = useRouter(),
    slug = router.query.slug as string;
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    router.prefetch("/");
  }, [router]);
  const [open, setOpen] = useState(false);
  const { loading, error, data } = useAuthQuery(
    ssrShowcaseDetail.usePage(() => ({
      fetchPolicy: "cache-and-network",
      variables: { slug },
    }))
  );

  const showcase = data?.showcase as Showcase;

  if (!showcase) return null;

  return (
    <>
      <NextSeo
        title={showcase.name}
        description={showcase.description}
        canonical={`https://showcase.vaithuhay.com/post/${showcase.slug}`}
      />
      <Box sx={{ bgcolor: "#f0f0f0" }}>
        <InvestorInformation stat={data!.showcase.investorStat as any} />
        <ShowcaseDetailed item={showcase} onClick={() => router.push("/")} />
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
            disabled={data!.showcase.status !== ShowcaseStatus.Coming}
          >
            Đăng ký đặt trước
          </BottomButton>
        </Box>
        {data!.showcase.status === ShowcaseStatus.Coming && (
          <PreorderDialog
            open={open}
            showcase={showcase}
            onClose={() => setOpen(false)}
          />
        )}
      </Box>
    </>
  );
}

export default withApollo(
  ssrShowcaseDetail.withPage((r) => ({
    variables: { slug: r.query.slug as string },
  }))(PostDetailedPage)
);

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params!.slug as string;

  return {
    ...(await ssrShowcaseDetail.getServerPage(
      { variables: { slug } },
      context
    )),
    revalidate: 45,
  };
};

// noinspection JSUnusedGlobalSymbols
export async function getStaticPaths() {
  return {
    paths: (await apiService.getAllSlugs())
      .filter((slug) => !/^ci-test/.test(slug))
      .map((slug) => `/post/${slug}`),
    fallback: "blocking",
  };
}
