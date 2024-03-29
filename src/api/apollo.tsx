import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import introspection from "./introspection.json";
import { setContext } from "@apollo/client/link/context";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import store from "../store";
import { NextPage } from "next";
import { relayStylePagination } from "@hungphongbk/vth-sdk";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { sha256 } from "crypto-hash";

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
        "x-vth-from": "showcase-ssr",
      },
    };

  const token = store.getState().auth?.token;
  if (!token) return { headers: { ...headers, "x-vth-from": "showcase" } };

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      "x-vth-from": "showcase",
    },
  };
});

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: from([
    createPersistedQueryLink({ sha256, useGETForHashedQueries: true }),
    authLink,
    httpLink,
  ]),
  connectToDevTools: process.env.NODE_ENV === "development",
  cache: new InMemoryCache({
    ...introspection,
    // ...(typeof window !== "undefined"
    //   ? {
    typePolicies: {
      Showcase: { keyFields: ["slug"] },
      User: { keyFields: ["email"] },
      Query: {
        fields: {
          showcases: relayStylePagination(["@connection", ["filter"]]),
        },
      },
    },
    // }
    // : {}),
  }),
});
export { apolloClient };

export const APOLLO_STATE_PROP_NAME = "apolloState";
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
