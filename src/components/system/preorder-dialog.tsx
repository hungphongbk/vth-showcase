import React from "react";
import { Box, DialogContent, Stack, styled, Typography } from "@mui/material";
import {
  PreorderRequestInputDto,
  Showcase,
  ShowcaseStatus,
} from "../../types/graphql";
import { TextInput } from "../TextInput";
import { StyledDialog } from "../commons";
import { vndCurrency } from "../../utils/string";
import { useForm } from "react-hook-form";
import { FormInput } from "@hungphongbk/vth-sdk";
import { LoadingButton } from "@mui/lab";

const StyledTextInput = styled(TextInput)`
  input {
    font-size: 11px;
  }
  .MuiOutlinedInput-notchedOutline {
    legend {
      font-size: inherit;
      border: unset;
    }
  }
`;

type PreorderDialogProps = {
  open: boolean;
  showcase: Pick<Showcase, "status" | "slug" | "expectedSalePrice">;
  onClose: (value: PreorderRequestInputDto | undefined) => Promise<void>;
};
export default function PreorderDialog(
  props: PreorderDialogProps
): JSX.Element {
  const price = props.showcase.expectedSalePrice;

  const form = useForm<PreorderRequestInputDto>({
      defaultValues: { name: "", email: "", phoneNumber: "" },
    }),
    { control, formState, handleSubmit } = form;

  return (
    <StyledDialog open={props.open} onClose={() => props.onClose(undefined)}>
      <DialogContent>
        {props.showcase.status === ShowcaseStatus.Coming && (
          <Box
            sx={{
              borderRadius: "13px",
              marginTop: "-60px",
              bgcolor: "yellow.main",
              p: 1,
              mb: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0.4,
            }}
          >
            <Typography sx={{ fontSize: 13 }}>
              Giá bán dự kiến:{" "}
              <Typography sx={{ fontWeight: 600 }} component={"span"}>
                {vndCurrency(price!.regular)}
              </Typography>
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              Giá Tiên Phong:{" "}
              <Typography
                sx={{ fontWeight: 600, fontSize: 18 }}
                component={"span"}
              >
                {vndCurrency(price!.pioneer)}
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                height: 25,
                lineHeight: "25px",
                bgcolor: "black",
                color: "white",
                px: 2,
                borderRadius: "12.5px",
                mb: "-8px",
                transform: "translateY(50%)",
                "& strong": { fontWeight: 600 },
                mt: "-8px",
              }}
            >
              Saving{" "}
              <strong>
                {Math.round(
                  ((price!.regular - price!.pioneer) * 100.0) / price!.regular
                )}
                %
              </strong>
            </Typography>
          </Box>
        )}
        <Typography
          sx={{ textAlign: "center", fontWeight: 600, fontSize: 13, mb: 1 }}
        >
          Đăng ký đặt trước để nhận ngay gói giá Tiên Phong hấp dẫn
        </Typography>
        <Stack direction={"column"} gap={1.5} alignItems={"center"}>
          <FormInput
            control={control}
            component={StyledTextInput}
            name={"name"}
            placeholder={"Họ tên"}
            inputProps={{ autocomplete: "off" }}
          />
          <FormInput
            control={control}
            component={StyledTextInput}
            name={"email"}
            placeholder={"Email"}
            inputProps={{ autocomplete: "off" }}
          />
          <FormInput
            control={control}
            component={StyledTextInput}
            name={"phoneNumber"}
            placeholder={"Số điện thoại"}
            inputProps={{ autocomplete: "off" }}
          />
          <LoadingButton
            loading={formState.isSubmitting}
            variant={"contained"}
            color={"primary"}
            onClick={handleSubmit((value) => props.onClose(value))}
            sx={{ fontWeight: 600 }}
          >
            Đăng ký
          </LoadingButton>
        </Stack>
      </DialogContent>
    </StyledDialog>
  );
}
