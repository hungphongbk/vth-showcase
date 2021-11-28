const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
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
      "showcase.vaithuhay.com",
      "i.imgur.com",
      "product.hstatic.net",
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
});
