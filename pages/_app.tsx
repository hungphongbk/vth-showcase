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
import { Box, TextField } from "@mui/material";
import { sxFullSizeFixed } from "../src/utils/predefinedSx";
import Image from "next/image";
import Head from "next/head";
import store from "../src/store";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
import AuthLoginHandler from "../src/components/system/AuthLoginHandler";
import { StyledDialog } from "../src/components/commons";
import { UploadService } from "../src/service";
import { VthThemeProvider } from "@hungphongbk/vth-sdk";
import CreatorAndInvestorActions from "../src/components/CreatorAndInvestorActions";
import { LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { SWRConfig } from "swr";
import { apolloClient } from "../src/api";
import { ApolloProvider } from "@apollo/client";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps, router } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  const persistor = persistStore(store);

  return (
    <>
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
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
          url: "https://showcase.vaithuhay.com/",
          site_name: "Showcase Vài Thứ Hay",
          title: "Dự án showcase sản phẩm mới tại Vaithuhay",
        }}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {() => (
            <SWRConfig>
              <ApolloProvider client={apolloClient}>
                <VthThemeProvider
                  config={{
                    components: {
                      Dialog: StyledDialog,
                      TextField: TextField,
                      MultilineTextField: TextField,
                    },
                    services: {
                      uploadService: UploadService.upload,
                    },
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <SnackbarProvider maxSnack={3}>
                      <LocalizationProvider dateAdapter={DateAdapter}>
                        <CssBaseline />
                        <Header />
                        <LayoutGroup>
                          <Box sx={[sxFullSizeFixed, { zIndex: -2 }]}>
                            <Image
                              src={"/background.png"}
                              layout="fill"
                              objectFit="cover"
                              quality={70}
                            />
                          </Box>
                          {/*<AnimatePresence exitBeforeEnter={false} initial={false}>*/}
                          {getLayout(
                            <Component {...pageProps} key={router.route} />
                          )}
                          <CreatorAndInvestorActions />
                        </LayoutGroup>
                      </LocalizationProvider>
                    </SnackbarProvider>
                  </ThemeProvider>
                </VthThemeProvider>
                <AuthLoginHandler />
              </ApolloProvider>
            </SWRConfig>
          )}
        </PersistGate>
      </Provider>
    </>
  );
}
