import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import theme from "../src/theme";

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
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ paddingTop: theme.variables.appBarHeight }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </React.Fragment>
      ),
    };
  } finally {
    sheet.seal();
  }
};
