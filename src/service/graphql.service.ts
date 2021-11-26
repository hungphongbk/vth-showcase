import {
  apolloClient,
  mutationCreateMedia,
  mutationDeleteMedia,
  queryShowcasePreview,
  queryShowcases,
  querySlugs,
} from "../api";
import {
  CreateMediaMutation,
  CreateMediaMutationVariables,
  CursorPaging,
  DeleteMediaMutation,
  DeleteMediaMutationVariables,
  Maybe,
  Media,
  ShowcaseFilter,
  ShowcasePreviewQuery,
  ShowcasePreviewQueryVariables,
  ShowcasesQuery,
  ShowcasesQueryVariables,
  SlugsQuery,
} from "../types/graphql";
import { UploadService } from "./index";

export const getAllSlugs = async () => {
  const { data } = await apolloClient.query<SlugsQuery>({ query: querySlugs });
  return data.slugs;
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
    query: queryShowcases,
    variables: { paging, filter },
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

export const createMedia = async (file: File): Promise<Media> => {
  const mimetype = file.type,
    filename = file.name,
    path = await UploadService.upload(file);

  const { data } = await apolloClient.mutate<
    CreateMediaMutation,
    CreateMediaMutationVariables
  >({
    mutation: mutationCreateMedia,
    variables: {
      input: { id: undefined, mimetype, filename, path },
    },
  });

  return data!.createOneMedia;
};

export const deleteMedia = async (id: string): Promise<void> => {
  await apolloClient.mutate<DeleteMediaMutation, DeleteMediaMutationVariables>({
    mutation: mutationDeleteMedia,
    variables: { id },
  });
};
