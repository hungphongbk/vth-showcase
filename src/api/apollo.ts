import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import introspection from "./introspection.json";
import { setContext } from "@apollo/client/link/context";
import { FirebaseAuthService } from "../service";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});
const authLink = setContext(async (_, { headers }) => {
  if (typeof window === "undefined") return headers;

  const { token } = await (await FirebaseAuthService()).getPersistAuth();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
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

export { apolloClient };
