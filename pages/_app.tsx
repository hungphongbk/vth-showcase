import * as React from "react";
import { ReactElement, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import theme from "../src/theme";
import Header from "../src/components/Header";
import { LayoutGroup } from "framer-motion";
import "intersection-observer";
import { DefaultSeo } from "next-seo";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps, router } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <React.Fragment>
      <DefaultSeo
        {...(process.env.NEXT_PUBLIC_SEO_OFF_INDEX === "true"
          ? {
              dangerouslyDisableGooglebot: true,
              dangerouslySetAllPagesToNoIndex: true,
              dangerouslySetAllPagesToNoFollow: true,
            }
          : {})}
        title={"Dự án showcase sản phẩm mới tại Vaithuhay"}
        description={
          "Chuyên trang giới thiệu sản phẩm mới showcase, chạy pre-order campaign & phát triển dự án gọi vốn sản phẩm do người Việt tạo nên"
        }
        openGraph={{
          type: "website",
          locale: "vi_VN",
          url: "https://www.url.ie/",
          site_name: "Showcase Vài Thứ Hay",
          title: "Dự án showcase sản phẩm mới tại Vaithuhay",
        }}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <LayoutGroup>
          {/*<AnimatePresence exitBeforeEnter={false} initial={false}>*/}
          {getLayout(<Component {...pageProps} key={router.route} />)}
          {/*</AnimatePresence>*/}
        </LayoutGroup>
      </ThemeProvider>
    </React.Fragment>
  );
}
