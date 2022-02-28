const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const entryApp = path.resolve(__dirname, "./src/sdk.tsx"),
  buildPath = path.resolve(__dirname, "../public/sdk"),
  srcPath = [
    path.resolve(__dirname, "./src"),
    path.resolve(__dirname, "../src"),
  ];

module.exports = {
  mode: process.env.NODE_ENV ?? "development",
  entry: {
    sdk: entryApp,
  },
  output: {
    path: buildPath,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.tsx?$/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      modules: false,
                      useBuiltIns: "usage",
                      corejs: 3,
                    },
                  ],
                  [
                    "@babel/preset-react",
                    {
                      runtime: "automatic",
                    },
                  ],
                  "@babel/preset-typescript",
                ],
                plugins: [
                  [
                    "babel-plugin-styled-components",
                    {
                      pure: true,
                    },
                  ],
                ],
              },
            },
            include: srcPath,
            exclude: /node_modules/,
          },
          {
            use: ["style-loader", "css-loader"],
            test: /\.css$/,
          },
          {
            loader: "file-loader",
            test: /\.webp$/,
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules", ...srcPath],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    allowedHosts: ["vaithuhay.com"],
    host: "localhost",
    port: 8080,
    client: {
      progress: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  target: "web",
  plugins: [
    new webpack.EnvironmentPlugin({
      NEXT_PUBLIC_API_URL: "https://api.showcase-dev.vaithuhay.com",
      NEXT_PUBLIC_HOMEPAGE_URL: "https://showcase-dev.vaithuhay.com",
    }),
    new webpack.IgnorePlugin({
      checkResource(resource) {
        if (/framer-motion/.test(resource)) return true;
        return false;
      },
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name: "commons",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
      }),
    ],
    sideEffects: true,
  },
};
