import {
  ApolloClient,
  ApolloProvider,
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
import { NextPage } from "next";

export type ApolloClientContext = unknown;

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});
const authLink = setContext(async (_, { headers }) => {
  if (typeof window === "undefined")
    return {
      headers: {
        ...headers,
        ssr: true,
      },
    };

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

if (typeof window !== "undefined") {
  // @ts-ignore
  window.__APOLLO_CLIENT__ = apolloClient;
}

export { apolloClient };

export const APOLLO_STATE_PROP_NAME = "apolloState";

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
 * @param ctx
 * @param initialState
 */
export function getApolloClient(
  ctx?: ApolloClientContext,
  initialState?: NormalizedCacheObject
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
  return useMemo(() => getApolloClient(state), [state]);
}

export const withApollo = (Comp: NextPage) => {
  function WithApollo(props: any) {
    return (
      <ApolloProvider
        client={getApolloClient(undefined, props[APOLLO_STATE_PROP_NAME])}
      >
        <Comp />
      </ApolloProvider>
    );
  }
  if (process.env.NODE_ENV !== "production")
    WithApollo.displayName = `WithApollo(${Comp.displayName})`;
  return WithApollo;
};
