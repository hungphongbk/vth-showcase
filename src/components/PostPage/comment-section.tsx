import CollapseCard from "../CollapseCard";
import CommentWrite from "./comment-write";
import { useAddComment } from "./useAddComment";
import { Avatar, Box, Stack, styled, Typography } from "@mui/material";

const CommentContent = styled(Box)`
  /* Neutral/Dark White */
  background: #f3f3f3;
  border-radius: 10px;
  padding: 11px 15px;
`;

type CommentSectionProps = { slug: string };
export default function CommentSection(
  props: CommentSectionProps
): JSX.Element {
  const { addComment, comments, loading } = useAddComment({ slug: props.slug });

  return (
    <CollapseCard header={"Bình luận / Bình chọn"} sx={{ mt: 1 }} defaultOpen>
      <CommentWrite onSubmit={addComment} />
      <Stack gap={2} sx={{ mt: 2 }}>
        {typeof comments !== "undefined" &&
          comments.comments.nodes.map((comment) => (
            <Box
              key={comment.id}
              sx={{
                display: "grid",
                gridTemplateColumns: "32px 1fr",
                gap: "6px",
              }}
            >
              <Avatar sx={{ height: 32, width: 32, bgcolor: "#6C6C6C" }}>
                {comment.author?.name[0] ?? "A"}
              </Avatar>
              <CommentContent>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontStyle:
                      typeof comment.author?.name === "undefined"
                        ? "italic"
                        : "normal",
                  }}
                >
                  {comment.author?.name ?? "Người dùng"}
                </Typography>
                <Typography>{comment.content}</Typography>
              </CommentContent>
            </Box>
          ))}
      </Stack>
    </CollapseCard>
  );
}
