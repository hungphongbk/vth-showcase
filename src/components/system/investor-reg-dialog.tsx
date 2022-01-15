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
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import bg1 from "../../assets/bg-investor-reg-1.png";
import bg2 from "../../assets/bg-investor-2.png";
import avtInfo from "../../assets/avt_info.png";
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
import IconUser from "src/assets/icons/IconUser";
import PhoneIcon from "src/assets/icons/PhoneIcon";
import Avatar from '@mui/material/Avatar';
import QuestionMarkIcon from "src/assets/icons/QuestionMarkIcon";
import { NoEncryption } from "@mui/icons-material";


type ImageBoxProps = BoxProps;
// eslint-disable-next-line react/display-name
const ImageBox = forwardRef(
  ({ children, ...props }: ImageBoxProps, ref: any) => (
    <Box ref={ref} {...props}>
      <Box sx={sxFullSizeAbsolute}>
        <Box sx={{ position: "relative", ...sxFullSize }}>
          <Image src={bg1} layout={"fill"} objectFit={"cover"} />
          <Image src={bg2} layout={"fill"} objectFit={"cover"} />
          <Image src={avtInfo} layout={"fill"} objectFit={"cover"} />
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
const ContactBox = styled(Box)`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  margin-top: 15px;
  font-style: normal;
  font-weight: bold;
  line-height: 161.9%;
  /* or 24px */
  color: #FFFFFF;
`
const Avt = styled(Box)`
`
const Info = styled(Box)`
`
const InfoDetail = styled(Box)`
display: flex
`
const Phone = styled(Box)`
display: flex
`
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
        sx={{
          position: "absolute", 
          zIndex: 1, 
          top: "-20px",
          left: "50%",
          width: "263px",
          transform: "translateX(-50%)",
          padding: "4px 0",
          textAlign: "center",
          backgroundColor: "rgb(87, 87, 87)",
          borderRadius: "20px",
          fontFamily: "Montserrat",
          fontWeight: 600,
          fontSize: "0.8rem",
          lineHeight: "161.9%",
          color: "rgb(255, 255, 255)",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
          }}>
          Trở thành Investor cùng chúng tôi
        </Box>
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
            fontSize: "0.75rem",
            lineHeight: "18.33px",
            fontWeight: 400,
            color: "#000",
            margin: "15px 0 65px"
          }}
        >
          Nếu bạn đang mong muốn tìm hiểu sâu hơn về việc đầu tư cùng Vaithuhay,
          đăng nhập ngay để hiển thị các thông tin về Doanh thu dự kiến, P&L chi
          tiết của từng dự án, phương án kinh doanh & hình thức hợp tác
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
              paddingLeft: "7px"
            }}>
              Ví dụ <QuestionMarkIcon style={{position: "absolute", top: "2.5px", right: "5px"}} /></button>
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
            style={{border:"1px solid #ABABAB"}}
          />
          <FormInput
            control={control}
            component={TextInput}
            name={"phone"}
            placeholder={"Số điện thoại"}
            style={{border:"1px solid #ABABAB"}}

          />
          <FormInput
            control={control}
            component={TextInput}
            name={"job"}
            placeholder={"Ngành nghề đang hoạt động"}
            style={{border:"1px solid #ABABAB"}}

          />
          <FormInput
            name={"purpose"}
            control={control}
            component={StyledSelect}
            labelId="purpose-label"
            id="purpose"
            fullWidth
            style={{border:"1px solid #ABABAB", borderRadius:"15px"}}

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
            style={{border:"1px solid #ABABAB", borderRadius:"15px"}}
            
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
            style={{border:"1px solid #ABABAB", borderRadius:"15px"}}

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
        <Box sx={{position: "absolute", bottom:"0", right: "0", left:"0", zIndex:"-1"}}>
          <AspectRatio ratio={"357/208"}>
            <Image src={bg2} layout={"fill"} objectFit={"cover"} />
          </AspectRatio>
        </Box>
        <Typography
          sx={{
            width: "100%",
            marginTop: "3rem",
            fontFamily: "Montserrat",
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
          Liên hệ ngay chúng tôi để cùng nhau 
          hợp nhau các dự án của Vaithuhay.com
          </Typography>
          <ContactBox>
              <Avt><Avatar alt="Remy Sharp" sx={{width:62, height:62, marginRight: "11px"}} > <Image src={avtInfo} layout={"fill"} objectFit={"cover"} /> </Avatar> </Avt>
              <Info>
                <h2 style={{fontSize: "15px", margin:"0 0 5px", fontWeight: "700"}}>BÙI SƠN TÂM</h2>
                <InfoDetail><IconUser /> <a href="#" style={{color: "#ffffff", textDecoration:"none", margin:"0 0 5px 8px",fontSize: "0.65rem", fontWeight:"normal"}}>Founder/CEO | Vaithuhay.com</a></InfoDetail>
                <Phone><PhoneIcon /><p style={{margin:"0 0 0 8px",fontSize: "0.65rem", fontWeight:"normal"}}>0902905808</p></Phone>
              </Info>
            </ContactBox>
      </DialogContent>
    </StyledDialog>
  );
}
