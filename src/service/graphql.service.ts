import { apolloClient } from "../api";
import {
  CursorPaging,
  Maybe,
  ShowcaseFilter,
  ShowcasesDocument,
  ShowcasesQuery,
  ShowcasesQueryVariables,
  SlugsDocument,
  SlugsQuery,
} from "../types/graphql";

export const getAllSlugs = async () => {
  const { data } = await apolloClient.query<SlugsQuery>({
    query: SlugsDocument,
  });
  return data!.slugs;
};

/**
 * Using at home page
 * @param filter
 * @param cursor
 */
export const getAllShowcases = async (
  filter: Maybe<ShowcaseFilter> = undefined,
  cursor?: any
) => {
  // @ts-ignore
  const paging: CursorPaging = {
    first: 20,
  };
  if (cursor) paging.after = cursor;

  const { data } = await apolloClient.query<
    ShowcasesQuery,
    ShowcasesQueryVariables
  >({
    query: ShowcasesDocument,
    variables: { paging, filter },
  });
  return data.showcases;
};
