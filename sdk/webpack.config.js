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
            plugins: [
              [
                "babel-plugin-transform-imports",
                {
                  lodash: {
                    transform: "lodash/${member}",
                    preventFullImport: true,
                  },
                },
              ],
              [
                "babel-plugin-direct-import",
                {
                  modules: [
                    "@mui/lab",
                    "@mui/system",
                    "@mui/material",
                    "@mui/icons-material",
                  ],
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
      NEXT_PUBLIC_API_URL: "https://api.showcase-dev.vaithuhay.com",
      NEXT_PUBLIC_HOMEPAGE_URL: "https://showcase-dev.vaithuhay.com",
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
      }),
    ],
  },
};
