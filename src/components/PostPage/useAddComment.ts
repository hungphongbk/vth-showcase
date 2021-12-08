import { useMutation, useQuery } from "@apollo/client";
import {
  CommentCreateDto,
  PostAuthorizedCommentMutation,
  PostAuthorizedCommentMutationVariables,
  QueryCommentsQuery,
  QueryCommentsQueryVariables,
} from "../../types/graphql";
import { postAuthorizedComment, queryComments } from "../../api";
import { useCallback } from "react";

type UseAddCommentProps = {
  slug: string;
};
export const useAddComment = ({ slug }: UseAddCommentProps) => {
  const { data, loading } = useQuery<
    QueryCommentsQuery,
    QueryCommentsQueryVariables
  >(queryComments, { variables: { slug } });
  const [mutate, { loading: adding, error }] = useMutation<
    PostAuthorizedCommentMutation,
    PostAuthorizedCommentMutationVariables
  >(postAuthorizedComment, {
    refetchQueries: [{ query: queryComments, variables: { slug } }],
  });

  const addComment = useCallback(
    (input: CommentCreateDto) => mutate({ variables: { slug, input } }),
    [mutate, slug]
  );

  return { comments: data?.showcase, addComment, loading, adding };
};
