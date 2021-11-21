import { apolloClient, queryShowcasePreview, queryShowcases } from "./index";
import {
  ShowcasePreviewQuery,
  ShowcasePreviewQueryVariables,
  ShowcasesQuery,
} from "../types/graphql";

export const getAllShowcases = async () => {
  const { data } = await apolloClient.query<ShowcasesQuery>({
    query: queryShowcases,
  });
  return data.showcases.edges.map((edge) => edge.node);
};

export const getShowcasePreview = async (slug: string) => {
  const { data } = await apolloClient.query<
    ShowcasePreviewQuery,
    ShowcasePreviewQueryVariables
  >({
    query: queryShowcasePreview,
    variables: {
      slug,
    },
  });

  return {
    post: data.showcase,
    posts: data.showcases.edges.map((edge) => edge.node),
  };
};
