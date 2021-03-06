import * as React from "react";
import { ReactElement, ReactNode } from "react";
import { Box, CssBaseline, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Header from "../src/components/Header";
import { LayoutGroup } from "framer-motion";
import "intersection-observer";
import { DefaultSeo } from "next-seo";
import { NextPage } from "next";
import { sxFullSizeFixed } from "../src/utils/predefinedSx";
import Image from "next/image";
import Head from "next/head";
import store from "../src/store";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
import { AuthLoginHandler } from "../src/components/system";
import { StyledDialog } from "../src/components/commons";
import { UploadService } from "../src/service";
import { VthThemeProvider } from "@hungphongbk/vth-sdk";
import { LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { ApolloProvider } from "@hungphongbk/apollo-client";
import { useGATrackView } from "../src/utils/hooks";
import { apolloClient } from "../src/api";
import "../styles/globals.css";
import ScrollablePanel from "../src/components/scrollable-panel";
import { appTheme } from "../src/app-theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsExtended = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

export default function MyApp(props: AppPropsExtended) {
  const {
    Component,
    pageProps,
    router,
    emotionCache = clientSideEmotionCache,
  } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const persistor = persistStore(store);
  useGATrackView();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
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
        defaultTitle={"D??? ??n showcase s???n ph???m m???i t???i Vaithuhay"}
        titleTemplate={"%s | D??? ??n showcase s???n ph???m m???i t???i Vaithuhay"}
        description={
          "Chuy??n trang gi???i thi???u s???n ph???m m???i showcase, ch???y pre-order campaign & ph??t tri???n d??? ??n g???i v???n s???n ph???m do ng?????i Vi???t t???o n??n"
        }
        openGraph={{
          type: "website",
          locale: "vi_VN",
          url: "https://showcase.vaithuhay.com/",
          site_name: "Showcase V??i Th??? Hay",
          title: "D??? ??n showcase s???n ph???m m???i t???i Vaithuhay",
        }}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {() => (
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
                <ThemeProvider theme={appTheme}>
                  <SnackbarProvider maxSnack={3}>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                      <CssBaseline />
                      <Header />
                      {/* @ts-ignore */}
                      <LayoutGroup>
                        <Box sx={[sxFullSizeFixed, { zIndex: -2 }]}>
                          {/* eslint-disable-next-line jsx-a11y/alt-text */}
                          <Image
                            src={"/background.png"}
                            layout="fill"
                            objectFit="cover"
                            quality={70}
                            priority
                          />
                        </Box>
                        {/*<AnimatePresence exitBeforeEnter={false} initial={false}>*/}
                        <ScrollablePanel>
                          {getLayout(
                            <Component {...pageProps} key={router.route} />
                          )}
                        </ScrollablePanel>
                      </LayoutGroup>
                    </LocalizationProvider>
                  </SnackbarProvider>
                </ThemeProvider>
              </VthThemeProvider>
              <AuthLoginHandler />
            </ApolloProvider>
          )}
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
}
