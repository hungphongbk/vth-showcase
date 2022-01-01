const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]); // pass the modules you would like to see transpiled
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(
  withTM({
    swcMinify: true,
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@mui/styled-engine": "@mui/styled-engine-sc",
      };
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      });
      return config;
    },
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
      scrollRestoration: true,
      styledComponent: true,
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
  })
);
