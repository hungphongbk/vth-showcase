import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// noinspection ES6PreferShortImport
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apollo";

const portal = document.getElementById("showcase-portal");

if (portal) {
  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    portal
  );
}
