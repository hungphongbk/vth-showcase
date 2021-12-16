import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import introspection from "./introspection.json";
import { setContext } from "@apollo/client/link/context";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import { useMemo } from "react";
import store from "../store";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});
const authLink = setContext(async (_, { headers }) => {
  if (typeof window === "undefined") return headers;

  const token = store.getState().auth?.token;
  if (!token) return headers;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    ...introspection,
    ...(typeof window !== "undefined"
      ? {
          typePolicies: {
            Showcase: { keyFields: ["slug"] },
            User: { keyFields: ["email"] },
          },
        }
      : {}),
  }),
});

if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  // @ts-ignore
  window.__APOLLO_CLIENT__ = apolloClient;
}

export { apolloClient };

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

/**
 * Only use for App
 * @param initialState
 */
export function initializeApollo(
  initialState: NormalizedCacheObject | null = null
) {
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    apolloClient.cache.restore(data);
  }

  return apolloClient;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  return useMemo(() => initializeApollo(state), [state]);
}
