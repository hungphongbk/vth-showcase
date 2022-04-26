const withPlugins = require("next-compose-plugins");
const { withSentryConfig } = require("@sentry/nextjs");
const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
  "@mui/lab",
  "@hungphongbk/vth-sdk",
]); // pass the modules you would like to see transpiled
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const moduleExports = withPlugins([withBundleAnalyzer, withTM], {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "showcase-dev.vaithuhay.com",
      "api.showcase-dev.vaithuhay.com",
      "media.showcase-dev.vaithuhay.com",
      "showcase.vaithuhay.com",
      "api.showcase.vaithuhay.com",
      "i.imgur.com",
      "product.hstatic.net",
      ...(process.env.NODE_ENV === "development" ? ["207.148.126.213"] : []),
    ],
  },
  experimental: {
    emotion: true,
    modularizeImports: {
      lodash: {
        transform: "lodash/{{member}}",
      },
      "@mui/material": {
        transform: "@mui/material/{{member}}",
      },
      "@mui/lab": {
        transform: "@mui/lab/{{member}}",
      },
    },
    scrollRestoration: true,
  },
  compiler: {
    styledComponents: true,
  },
  staticPageGenerationTimeout: 300,
  async redirects() {
    return [
      {
        source: "/manage/create-post",
        destination: "/manage/create-post/step1",
        permanent: true,
      },
    ];
  },
});

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
