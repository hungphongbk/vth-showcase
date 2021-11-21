import {
  apolloClient,
  queryShowcasePreview,
  queryShowcases,
  querySlugs,
} from "./index";
import {
  CursorPaging,
  ShowcasePreviewQuery,
  ShowcasePreviewQueryVariables,
  ShowcasesQuery,
  ShowcasesQueryVariables,
  SlugsQuery,
} from "../types/graphql";

export const getAllSlugs = async () => {
  const { data } = await apolloClient.query<SlugsQuery>({ query: querySlugs });
  return data.slugs;
};

export const getAllShowcases = async (cursor?: any) => {
  // @ts-ignore
  const paging: CursorPaging = {
    first: 20,
  };
  if (cursor) paging.after = cursor;

  const { data } = await apolloClient.query<
    ShowcasesQuery,
    ShowcasesQueryVariables
  >({
    query: queryShowcases,
    variables: { paging },
  });
  return data.showcases;
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
    posts: data.showcases.edges,
  };
};
