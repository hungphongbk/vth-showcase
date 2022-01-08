import {
  CommentCreateDto,
  refetchQueryCommentsQuery,
  usePostAuthorizedCommentMutation,
  useQueryCommentsQuery,
} from "../../types/graphql";
import { useCallback } from "react";

type UseAddCommentProps = {
  slug: string;
};
export const useAddComment = ({ slug }: UseAddCommentProps) => {
  const { data, loading } = useQueryCommentsQuery({ variables: { slug } });
  const [mutate, { loading: adding, error }] = usePostAuthorizedCommentMutation(
    {
      refetchQueries: [refetchQueryCommentsQuery({ slug })],
    }
  );

  const addComment = useCallback(
    (input: CommentCreateDto) => mutate({ variables: { slug, input } }),
    [mutate, slug]
  );

  return { comments: data?.showcase, addComment, loading, adding };
};
