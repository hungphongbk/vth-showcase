import { StyledDialog, StyledSelect } from "../commons";
import React from "react";
import {
  Box,
  Button,
  DialogContent,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import bg1 from "../../assets/bg-investor-reg-1.webp";
import bg2 from "../../assets/bg-investor-2.webp";
import avtInfo from "../../assets/avt_info.png";
import {
  AspectRatio,
  FormInput,
  SubmitInvestorConstants,
} from "@hungphongbk/vth-sdk";
import { TextInput } from "../TextInput";
import { useForm } from "react-hook-form";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import IconUser from "src/assets/icons/IconUser";
import PhoneIcon from "src/assets/icons/PhoneIcon";
import Avatar from "@mui/material/Avatar";
import QuestionMarkIcon from "src/assets/icons/QuestionMarkIcon";
import { InvestorRegistrationCreateDto } from "../../types/graphql";
import { styled } from "@mui/material/styles";

const SUBMIT_INVESTOR = gql`
  mutation SubmitInvestor($form: InvestorRegistrationCreateDto!) {
    createOneInvestorRegistrationDto(input: $form) {
      id
    }
  }
`;
const ContactBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-style: normal;
  font-weight: bold;
  line-height: 161.9%;
  /* or 24px */
  color: #ffffff;
`;
const Avt = styled(Box)``;
type InvestorRegDialogProps = {
  close: () => unknown | Promise<unknown>;
};
export default function InvestorRegDialogComponent({
  close,
}: InvestorRegDialogProps): JSX.Element {
  const [mutate] = useMutation<any, { form: InvestorRegistrationCreateDto }>(
    SUBMIT_INVESTOR
  );

  const { control, handleSubmit } = useForm<InvestorRegistrationCreateDto>({
    defaultValues: {
      purpose: "-",
      method: "-",
      fund: "-",
    },
  });

  const onSubmit = async (values: InvestorRegistrationCreateDto) => {
    await mutate({ variables: { form: values } });
    await close();
  };

  return (
    <StyledDialog open={true} onClose={close}>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            zIndex: -1,
            overflow: "hidden",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <AspectRatio ratio={"357/180"}>
            <Image
              src={bg1}
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"bottom"}
            />
          </AspectRatio>
        </Box>
        <Box
          className="absolute z-[1] flex items-center justify-center"
          sx={{
            top: "-20px",
            left: "50%",
            width: "263px",
            transform: "translateX(-50%)",
            padding: "4px 0",
            textAlign: "center",
            backgroundColor: "rgb(87, 87, 87)",
            borderRadius: "20px",
            fontWeight: 600,
            fontSize: "0.8rem",
            lineHeight: "161.9%",
            color: "rgb(255, 255, 255)",
            height: "40px",
          }}
        >
          Trở thành Investor cùng chúng tôi
        </Box>
        <Typography
          className="absolute text-center"
          sx={{
            fontSize: 11.5,
            lineHeight: "18.33px",
            fontWeight: 400,
            color: "#000",
            top: 34,
            left: 20,
            right: 20,
          }}
        >
          Nếu bạn đang mong muốn tìm hiểu sâu hơn về việc đầu tư cùng Vaithuhay,
          đăng nhập ngay để hiển thị các thông tin về Doanh thu dự kiến, P&L chi
          tiết của từng dự án, phương án kinh doanh & hình thức Đầu tư
          <button
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              borderRadius: "9.5px",
              marginLeft: "5px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "10px",
              lineHeight: "161.9%",
              width: "53px",
              position: "relative",
              border: "none",
              textAlign: "left",
              paddingLeft: "7px",
            }}
          >
            Ví dụ{" "}
            <QuestionMarkIcon
              style={{ position: "absolute", top: "2.5px", right: "5px" }}
            />
          </button>
        </Typography>
      </Box>
      <DialogContent sx={{ position: "relative", zIndex: 0, pb: 0 }}>
        <Stack
          direction={"column"}
          gap={1.5}
          alignItems={"center"}
          sx={{ mt: 1 }}
        >
          <FormInput
            control={control}
            component={TextInput}
            name={"email"}
            placeholder={"Email"}
            style={{ border: "1px solid #ABABAB" }}
          />
          <FormInput
            control={control}
            component={TextInput}
            name={"phone"}
            placeholder={"Số điện thoại"}
            style={{ border: "1px solid #ABABAB" }}
          />
          <FormInput
            control={control}
            component={TextInput}
            name={"job"}
            placeholder={"Ngành nghề đang hoạt động"}
            style={{ border: "1px solid #ABABAB" }}
          />
          <FormInput
            name={"purpose"}
            control={control}
            component={StyledSelect}
            labelId="purpose-label"
            id="purpose"
            fullWidth
            style={{ border: "1px solid #ABABAB", borderRadius: "15px" }}
          >
            <MenuItem value={"-"} sx={{ display: "none" }}>
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
            style={{ border: "1px solid #ABABAB", borderRadius: "15px" }}
          >
            <MenuItem value={"-"} sx={{ display: "none" }}>
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
            style={{ border: "1px solid #ABABAB", borderRadius: "15px" }}
          >
            <MenuItem value={"-"} sx={{ display: "none" }}>
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
            Đầu tư ngay
          </Button>
        </Stack>
      </DialogContent>
      <DialogContent
        sx={{ position: "relative", zIndex: 0, p: 0, overflow: "hidden" }}
      >
        <AspectRatio ratio={"357/228"} sx={{ zIndex: "-1" }}>
          <Image
            src={bg2}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"top"}
          />
        </AspectRatio>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            left: "0",
            px: "24px",
            pb: "20px",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              marginTop: "3rem",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "0.75rem",
              lineHeight: "1.7",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Liên hệ ngay chúng tôi để cùng nhau hợp nhau các dự án của
            Vaithuhay.com
          </Typography>
          <ContactBox>
            <Avt>
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 62, height: 62, marginRight: "11px" }}
              >
                {" "}
                <Image src={avtInfo} layout={"fill"} objectFit={"cover"} />{" "}
              </Avatar>{" "}
            </Avt>
            <Box>
              <h2
                style={{
                  fontSize: "15px",
                  margin: "0 0 5px",
                  fontWeight: "700",
                }}
              >
                BÙI SƠN TÂM
              </h2>
              <Box className={"flex"}>
                <IconUser />{" "}
                <a
                  href="#"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    margin: "0 0 5px 8px",
                    fontSize: "0.65rem",
                    fontWeight: "normal",
                  }}
                >
                  Founder/CEO | Vaithuhay.com
                </a>
              </Box>
              {/* PHONE */}
              <Box className={"flex"}>
                <PhoneIcon />
                <p
                  style={{
                    margin: "0 0 0 8px",
                    fontSize: "0.65rem",
                    fontWeight: "normal",
                  }}
                >
                  0902905808
                </p>
              </Box>
            </Box>
          </ContactBox>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
}
