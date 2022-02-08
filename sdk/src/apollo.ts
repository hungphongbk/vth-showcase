import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import introspection from "../../src/api/introspection.json";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  headers: {
    "x-vth-from": "showcase-portal",
  },
});

export const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: httpLink,
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
