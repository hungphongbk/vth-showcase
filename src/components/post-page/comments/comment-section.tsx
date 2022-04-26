import CollapseCard from "../../CollapseCard";
import CommentWrite from "./comment-write";
import { useAddComment } from "../useAddComment";
import { Box, Stack } from "@mui/material";
import { useMemo } from "react";
import { chunk } from "lodash";
import SlickSlider from "../../slick-slider";
import CommentItem from "./comment-item";

type CommentSectionProps = { slug: string };
export default function CommentSection(
  props: CommentSectionProps
): JSX.Element {
  const { addComment, comments, loading } = useAddComment({ slug: props.slug }),
    isCommentLoaded = useMemo(() => {
      return (
        typeof comments !== "undefined" && Array.isArray(comments.comments)
      );
    }, [comments]),
    commentsPaged = useMemo(
      () => chunk(comments?.comments?.filter((c) => !c.isTopComment) ?? [], 6),
      [comments]
    ),
    topComment = useMemo(
      () => comments?.comments?.filter((c) => c.isTopComment)[0] ?? undefined,
      [comments]
    );

  return (
    <CollapseCard
      header={"Bình luận / Bình chọn"}
      sx={{ mt: 1, "& .MuiCardContent-root": { pt: 0 } }}
      defaultOpen
    >
      {topComment && <CommentItem comment={topComment} sx={{ mb: 2 }} />}
      <CommentWrite onSubmit={addComment} />
      <Box>
        {isCommentLoaded && (
          <SlickSlider>
            {commentsPaged.map((page, index) => (
              <Box key={index}>
                <Stack gap={2} sx={{ mt: 2 }}>
                  {page.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                  ))}
                </Stack>
              </Box>
            ))}
          </SlickSlider>
        )}
      </Box>
    </CollapseCard>
  );
}
