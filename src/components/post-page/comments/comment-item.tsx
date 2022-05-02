import { DeepPartial } from "react-hook-form";
import { CommentDto } from "../../../types/graphql";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { CommentRateMaps, VaithuhayAvatar } from "@hungphongbk/vth-sdk";
import { SxProps } from "@mui/system";
import { styled } from "@mui/material/styles";

const CommentContent = styled(Box)`
  /* Neutral/Dark White */
  border-radius: 10px;
  padding: 11px 15px;
`;

const CommentChip = styled(Box)`
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  padding-left: 9px;
  padding-right: 9px;
  color: white;
  font-size: 10px;
  line-height: 12px;
`;

type CommentItemProps = {
  comment: DeepPartial<CommentDto>;
  sx?: SxProps;
};
export default function CommentItem({
  comment,
  sx,
}: CommentItemProps): JSX.Element {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "32px 1fr",
        gap: "6px",
        ...sx,
      }}
    >
      {comment.isTopComment ? (
        <VaithuhayAvatar sx={{ height: 32, width: 32, bgcolor: "#6C6C6C" }} />
      ) : (
        <Avatar sx={{ height: 32, width: 32, bgcolor: "#6C6C6C" }}>
          {comment.author?.name![0] ?? "A"}
        </Avatar>
      )}
      <CommentContent
        sx={{ bgcolor: comment.isTopComment ? "#FFF8DC" : "#f3f3f3" }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontStyle:
              typeof comment.author?.name === "undefined" ? "italic" : "normal",
            mb: 0.3,
          }}
        >
          {comment.isTopComment
            ? "Vài thứ hay"
            : comment.author?.name ?? "Người dùng"}
        </Typography>
        {comment.rate!.length > 0 && (
          <Stack gap={1} direction={"row"} sx={{ mb: 1 }}>
            {comment.rate!.map((rate) => {
              const map = CommentRateMaps[rate!];
              return (
                <CommentChip sx={{ bgcolor: map.color }} key={rate}>
                  {map.label}
                </CommentChip>
              );
            })}
          </Stack>
        )}
        <Typography>{comment.content}</Typography>
      </CommentContent>
    </Box>
  );
}
