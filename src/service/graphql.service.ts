import {
  apolloClient,
  mutationCreateShowcase,
  mutationDeleteMedia,
  queryShowcasePreview,
  queryShowcases,
} from "../api";
import {
  CreateShowcaseMutation,
  CreateShowcaseMutationVariables,
  CursorPaging,
  DeleteMediaMutation,
  DeleteMediaMutationVariables,
  Maybe,
  Showcase,
  ShowcaseCreateInputDto,
  ShowcaseEdge,
  ShowcaseFilter,
  ShowcasePreviewQuery,
  ShowcasePreviewQueryVariables,
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
    post: data.showcase as Showcase,
    posts: data.showcases.edges as ShowcaseEdge[],
  };
};

export const deleteMedia = async (id: string): Promise<void> => {
  await apolloClient.mutate<DeleteMediaMutation, DeleteMediaMutationVariables>({
    mutation: mutationDeleteMedia,
    variables: { id },
  });
};

export const createShowcase = async (
  form: ShowcaseCreateInputDto
): Promise<CreateShowcaseMutation["createOneShowcase"]> => {
  const { data } = await apolloClient.mutate<
    CreateShowcaseMutation,
    CreateShowcaseMutationVariables
  >({
    mutation: mutationCreateShowcase,
    variables: { input: form },
  });
  return data!.createOneShowcase;
};
