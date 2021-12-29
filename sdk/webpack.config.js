const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const entryApp = path.resolve(__dirname, "./src/sdk.tsx"),
  buildPath = path.resolve(__dirname, "../public"),
  srcPath = [
    path.resolve(__dirname, "./src"),
    path.resolve(__dirname, "../src"),
  ];

module.exports = {
  mode: process.env.NODE_ENV ?? "development",
  entry: {
    runtime: "regenerator-runtime/runtime.js",
    sdk: entryApp,
  },
  output: {
    path: buildPath,
    filename: "[name].js",
  },
  module: {
    rules: [
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
          },
        },
        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ["node_modules", ...srcPath],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    allowedHosts: ["vaithuhay.com"],
  },
  target: "web",
  plugins: [
    new webpack.EnvironmentPlugin({
      NEXT_PUBLIC_API_URL: "https://api.showcase-dev.vaithuhay.com", // use 'development' unless process.env.NODE_ENV is defined
    }),
  ],
  optimization: {
    minimize: process.env.NODE_ENV !== "development",
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
      }),
    ],
  },
};
