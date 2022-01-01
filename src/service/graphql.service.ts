import {
  apolloClient,
  mutationCreateShowcase,
  mutationDeleteMedia,
} from "../api";
import {
  CreateShowcaseMutation,
  CreateShowcaseMutationVariables,
  CursorPaging,
  DeleteMediaMutation,
  DeleteMediaMutationVariables,
  Maybe,
  ShowcaseCreateInputDto,
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
