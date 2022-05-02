import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import theme from "../src/theme";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../src/utils/createEmotionCache";

// https://mui.com/styles/advanced/#next-js
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`/apple-touch-icon.png?v=${process.env.NEXT_PUBLIC_APP_VERSION}`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`/favicon-32x32.png?v=${process.env.NEXT_PUBLIC_APP_VERSION}`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`/favicon-16x16.png?v=${process.env.NEXT_PUBLIC_APP_VERSION}`}
          />
          <link
            rel="manifest"
            href={`/site.webmanifest?v=${process.env.NEXT_PUBLIC_APP_VERSION}`}
          />
          <link
            rel="mask-icon"
            href={`/safari-pinned-tab.svg?v=${process.env.NEXT_PUBLIC_APP_VERSION}`}
            color="#5bbad5"
          />
          <link
            rel="shortcut icon"
            href={`/favicon.ico?v=${process.env.NEXT_PUBLIC_APP_VERSION}`}
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Vaithuhay Showcase"
          />
          <meta name="application-name" content="Vaithuhay Showcase" />
          <meta name="msapplication-TileColor" content="#da532c" />
          {/* PWA primary color */}
          <meta content={theme.palette.primary.main} name="theme-color" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href={process.env.NEXT_PUBLIC_UPLOAD_API_URL}
          />
          <link
            rel="dns-prefetch"
            href={process.env.NEXT_PUBLIC_UPLOAD_API_URL}
          />
          <link rel="preconnect" href={process.env.NEXT_PUBLIC_API_URL} />
          <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_API_URL} />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{
            paddingTop: theme.variables.appBarHeight,
            width: "100%",
            height: "100%",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
