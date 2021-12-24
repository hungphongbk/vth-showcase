import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// noinspection ES6PreferShortImport
import { initializeApollo } from "../../src/api/apollo";
import { ApolloProvider } from "@apollo/client";

const portal = document.getElementById("showcase-portal");

if (portal) {
  const client = initializeApollo();
  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    portal
  );
}
