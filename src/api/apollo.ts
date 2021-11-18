import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import introspection from "./introspection.json";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_API_URL}/graphql`,
  }),
  cache: new InMemoryCache(introspection),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  // @ts-ignore
  window.__APOLLO_CLIENT__ = apolloClient;
}

export default apolloClient;
