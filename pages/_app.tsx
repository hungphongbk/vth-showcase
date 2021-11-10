import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../src/theme";
import Header from "../src/components/Header";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useScrollRestoration } from "../src/utils";
import { useRouter } from "next/router";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  useScrollRestoration(router);

  return (
    <React.Fragment>
      <Head>
        <title>Next App</title>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <LayoutGroup>
          <AnimatePresence exitBeforeEnter={false} initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </LayoutGroup>
      </ThemeProvider>
    </React.Fragment>
  );
}
