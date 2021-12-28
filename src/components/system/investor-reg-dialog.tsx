import { StyledDialog, StyledSelect } from "../commons";
import { useRouter } from "next/router";
import React, { forwardRef, useMemo } from "react";
import {
  Box,
  BoxProps,
  Button,
  DialogContent,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import bg1 from "../../assets/bg-investor-reg-1.png";
import {
  sxFullSize,
  sxFullSizeAbsolute,
} from "@hungphongbk/vth-sdk/utils/predefinedSx";
import {
  AspectRatio,
  FormInput,
  SubmitInvestorConstants,
} from "@hungphongbk/vth-sdk";
import { TextInput } from "../TextInput";
import { useForm } from "react-hook-form";
import {
  MutationSubmitInvestorArgs,
  SubmitInvestorInputDto,
} from "../../types/graphql";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

type ImageBoxProps = BoxProps;
// eslint-disable-next-line react/display-name
const ImageBox = forwardRef(
  ({ children, ...props }: ImageBoxProps, ref: any) => (
    <Box ref={ref} {...props}>
      <Box sx={sxFullSizeAbsolute}>
        <Box sx={{ position: "relative", ...sxFullSize }}>
          <Image src={bg1} layout={"fill"} objectFit={"cover"} />
        </Box>
      </Box>
      {children}
    </Box>
  )
);

const SUBMIT_INVESTOR = gql`
  mutation SubmitInvestor($form: SubmitInvestorInputDto!) {
    submitInvestor(form: $form)
  }
`;

type InvestorRegDialogProps = {};
export default function InvestorRegDialog(
  props: InvestorRegDialogProps
): JSX.Element {
  const router = useRouter();

  const [mutate] = useMutation<any, MutationSubmitInvestorArgs>(
    SUBMIT_INVESTOR
  );

  const { control, handleSubmit } = useForm<SubmitInvestorInputDto>({
    defaultValues: {
      purpose: "-",
      method: "-",
      fund: "-",
    },
  });

  const open = useMemo(() => {
    return /#corporate/.test(router.asPath);
  }, [router]);

  const onClose = () =>
      router.push(router.asPath.replace(/#corporate/g, ""), undefined, {
        shallow: true,
      }),
    onSubmit = async (values: SubmitInvestorInputDto) => {
      await mutate({ variables: { form: values } });
      await onClose();
    };

  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogContent sx={{ position: "relative", zIndex: 0 }}>
        <Box
          sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: -1 }}
        >
          <AspectRatio ratio={"357/190"}>
            <Image src={bg1} layout={"fill"} objectFit={"cover"} />
          </AspectRatio>
        </Box>
        <Typography
          sx={{
            textAlign: "justify",
            fontSize: 11.32,
            lineHeight: "18.33px",
            fontWeight: 400,
            color: "#000",
          }}
        >
          Nếu bạn đang mong muốn tìm hiểu sâu hơn về việc đầu tư cùng Vaithuhay,
          đăng nhập ngay để hiển thị các thông tin về Doanh thu dự kiến, P&L chi
          tiết của từng dự án, phương án kinh doanh & hình thức hợp tác
        </Typography>
        <Stack
          direction={"column"}
          gap={1.5}
          alignItems={"center"}
          sx={{ mt: 3.5 }}
        >
          <FormInput
            control={control}
            component={TextInput}
            name={"email"}
            placeholder={"Email"}
          />
          <FormInput
            control={control}
            component={TextInput}
            name={"phone"}
            placeholder={"Số điện thoại"}
          />
          <FormInput
            control={control}
            component={TextInput}
            name={"job"}
            placeholder={"Ngành nghề đang hoạt động"}
          />
          <FormInput
            name={"purpose"}
            control={control}
            component={StyledSelect}
            labelId="purpose-label"
            id="purpose"
            fullWidth
          >
            <MenuItem value={"-"}>
              <Typography sx={{ color: "neutral.placeholderText" }}>
                Mục đích đầu tư
              </Typography>
            </MenuItem>
            {SubmitInvestorConstants.purposes.map((purpose) => (
              <MenuItem key={purpose} value={purpose}>
                {purpose}
              </MenuItem>
            ))}
          </FormInput>
          <FormInput
            name={"method"}
            control={control}
            component={StyledSelect}
            labelId="method-label"
            id="method"
            fullWidth
          >
            <MenuItem value={"-"}>
              <Typography sx={{ color: "neutral.placeholderText" }}>
                Hình thức đầu tư
              </Typography>
            </MenuItem>
            {SubmitInvestorConstants.methods.map((method) => (
              <MenuItem key={method} value={method}>
                {method}
              </MenuItem>
            ))}
          </FormInput>
          <FormInput
            name={"fund"}
            control={control}
            component={StyledSelect}
            labelId="fund-label"
            id="fund"
            fullWidth
          >
            <MenuItem value={"-"}>
              <Typography sx={{ color: "neutral.placeholderText" }}>
                Số vốn có thể tham gia
              </Typography>
            </MenuItem>
            {SubmitInvestorConstants.funds.map((fund) => (
              <MenuItem key={fund} value={fund}>
                {fund}
              </MenuItem>
            ))}
          </FormInput>
          <Button
            variant={"contained"}
            color={"primary"}
            sx={{ fontWeight: 500 }}
            onClick={handleSubmit(onSubmit)}
          >
            Hợp tác ngay
          </Button>
        </Stack>
      </DialogContent>
    </StyledDialog>
  );
}
