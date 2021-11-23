import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../src/theme";
import Header from "../src/components/Header";
import { LayoutGroup } from "framer-motion";
import "intersection-observer";

export default function MyApp(props: AppProps) {
  const { Component, pageProps, router } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Dự án showcase sản phẩm mới tại Vaithuhay</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <meta
          name="Description"
          content="Chuyên trang giới thiệu sản phẩm mới showcase, chạy pre-order campaign & phát triển dự án gọi vốn sản phẩm do người Việt tạo nên"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <LayoutGroup>
          {/*<AnimatePresence exitBeforeEnter={false} initial={false}>*/}
          <Component {...pageProps} key={router.route} />
          {/*</AnimatePresence>*/}
        </LayoutGroup>
      </ThemeProvider>
    </React.Fragment>
  );
}
