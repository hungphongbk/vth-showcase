import { Box, Button, Stack, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import { CommentCreateDto } from "../../../types/graphql";
import { CommentRateSelector, FormInput } from "@hungphongbk/vth-sdk";
import React from "react";

const CommentBox = styled(Box)`
    /* Neutral/Dark White */
    background: #f3f3f3;
    border-radius: 10px;
  `,
  CommentInput = styled((props: any) => <textarea rows={4} {...props} />)`
    width: 100%;
    border: none;
    overflow: auto;
    outline: none;
    resize: none;

    font-size: 11px;
    font-family: inherit;
    background-color: unset;
    padding: 8px;
  `;

type CommentWriteProps = {
  onSubmit: (values: CommentCreateDto) => Promise<any>;
};
const defaultValueFn = () =>
  ({
    content: "",
    rate: [],
  } as CommentCreateDto);

export default function CommentWrite(props: CommentWriteProps): JSX.Element {
  const { control, handleSubmit, reset } = useForm<CommentCreateDto>({
    defaultValues: defaultValueFn(),
  });

  const onSubmit = async (values: CommentCreateDto) => {
    await props.onSubmit(values);
    reset(defaultValueFn());
  };

  return (
    <Stack gap={2}>
      <CommentBox>
        <FormInput
          name={"content"}
          control={control}
          component={CommentInput}
          placeholder={"Viết bình luận của bạn..."}
        />
        <FormInput
          name={"rate"}
          control={control}
          component={CommentRateSelector}
          sx={{ p: 0.5, flexWrap: "wrap" }}
        />
      </CommentBox>
      <Button
        variant={"contained"}
        color={"primary"}
        sx={{ alignSelf: "flex-end", fontSize: 11 }}
        onClick={handleSubmit(onSubmit)}
      >
        Gửi bình luận
      </Button>
    </Stack>
  );
}
