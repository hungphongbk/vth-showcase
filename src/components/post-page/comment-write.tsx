import {
  Box,
  Button,
  css,
  Stack,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { CommentCreateDto } from "../../types/graphql";
import { FormInput } from "@hungphongbk/vth-sdk";
import React from "react";
import { CommentRateMaps } from "./styled";

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
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => css`
    .MuiToggleButtonGroup-grouped {
      margin: ${theme.spacing(0.5)};
      border: 0;

      &.Mui-selected {
        color: white;
      }
      text-transform: capitalize;
      height: 20px;
      padding: 0 10px;

      &:not(:first-of-type) {
        border-radius: 10px;
      }
      &:first-of-type {
        border-radius: 10px;
      }
    }
  `
);
const StyledToggleButton = styled(ToggleButton)<{ selectedColor: string }>(
  ({ selectedColor }) => css`
    font-size: 11px;
    &.Mui-selected {
      &,
      &:hover {
        background-color: ${selectedColor};
      }
    }
  `
);

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
          component={StyledToggleButtonGroup}
          sx={{ p: 0.5 }}
        >
          {Object.entries(CommentRateMaps).map(([_enum, { label, color }]) => (
            <StyledToggleButton key={_enum} selectedColor={color} value={_enum}>
              {label}
            </StyledToggleButton>
          ))}
        </FormInput>
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
