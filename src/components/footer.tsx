import React, { forwardRef, useState } from "react";
import { Box, BoxProps, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image, { ImageProps } from "next/image";
import bg1 from "../assets/white-paper-texture 1.png";
import logo from "../assets/Logo Showcase-01.png";
import FooterBackIcon from "../assets/icons/FooterBackIcon";
import { PostProductButton } from "./system";
import InvestorButton from "./system/investor-button";
import LoiNhanVaithuhay from "./loi-nhan-vaithuhay";

type ImageBoxProps = BoxProps & { bg: ImageProps["src"] };
// eslint-disable-next-line react/display-name
const ImageBox = forwardRef(
  ({ bg, children, ...props }: ImageBoxProps, ref: any) => (
    <Box ref={ref} {...props} sx={{ borderRadius: "15px" }}>
      <Image src={bg} layout={"fill"} objectFit={"cover"} />
      {children}
    </Box>
  )
);

const StyleFooter = styled(Box)`
  width: 100%;
  background-color: #505050;
  position: relative;
`;
const WrapperOval = styled(Box)`
  position: absolute;
  content: "";
  width: 100%;
  bottom: 100%;
  left: 0;
`;
const BoxOval = styled(Box)`
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
`;
const Oval = styled(Box)`
  position: absolute;
  width: 150%;
  height: 100vw;
  top: 52.5%;
  left: -25%;
  border-radius: 75%/75vw;
  background-color: #505050;
`;
const StyleBgrFooter = styled(Box)`
  position: relative;
  margin-top: 80px;
  padding-bottom: 130px;
  padding-top: 30px;
  color: #ffffff;
`;
const LogoFooter = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  content: "";
  left: 0;
  top: -4%;
`;
const FooterBox1 = styled(Box)``;
const PBox1 = styled(Box)`
  font-weight: normal;
  font-size: 12px;
  line-height: 158.4%;
  /* or 19px */

  display: flex;
  align-items: center;
  text-align: justify;

  color: #ffffff;

  padding: 6px 30px 17px 29px;
`;
const FooterBox2 = styled(Box)`
  position: relative;
  background: rgba(134, 134, 134, 0.5);
  border: 2px solid #ffffff;
  box-sizing: border-box;
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 13px;
  margin: 17px 27px 0px 29px;
`;
const EllipseBlur = styled(Box)`
  position: absolute;
  bottom: -20%;
  right: 5%;
  width: 43.85px;
  height: 43.85px;
  border-radius: 50%;
  background-color: #ffd520;
  filter: blur(15px);
  z-index: 0;
`;
const Ellipse = styled(Box)`
  position: absolute;
  bottom: 2px;
  right: 0;
  width: 43.85px;
  height: 43.85px;
  border-radius: 50%;
  background-color: #ffd520;
  filter: blur(1px);
  z-index: -4;
`;
const WrapperEllipse = styled(Box)`
  position: absolute;
  right: 5%;
  top: 100%;
  z-index: 4;
`;
const BoxEllipse = styled(Box)`
  position: relative;
  width: 43.85px;
  height: 8px;
  overflow: hidden;
`;
const FooterBox3 = styled(Box)`
  background: rgba(134, 134, 134, 0.5);
  border: 2px solid #ffffff;
  box-sizing: border-box;
  backdrop-filter: blur(23px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 13px;
  margin: 35px 27px 0px 29px;
`;
const PBox2 = styled(Box)`
  font-weight: 500;
  font-size: 12px;
  line-height: 155.4%;
  /* or 19px */
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
  margin: 10px 0 0;
  padding: 0 19px 30px 19px;
`;
const PBox3 = styled(Box)`
  position: relative;
  overflow: hidden;

  font-size: 12px;
  line-height: 158.9%;
  /* or 19px */

  display: flex;
  align-items: center;
  text-align: justify;
  margin: 10px 0 0 0;
  padding: 10px 19px 33px 25px;
  color: #fff;
  font-weight: 500;
`;
const Back = styled(Box)`
  position: relative;
  height: 146px;
  background-color: #ffde50;
  margin: 0;
`;

const PBack = styled(Button)`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  position: absolute;
  bottom: 0;
  left: 25%;
  margin: 0px 0px 11px 3px;
`;
const FooterBox4 = styled(Box)`
  border-radius: 15px;
  margin: 0 8px 0 9px;
  color: #000000;
`;
const H1Box = styled(Box)`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  text-align: center;
  color: #3f3f3f;
`;
const H3Box = styled(Box)`
  font-weight: 500;
  font-size: 12px;
  line-height: 198.4%;

  color: #000000;
  margin-top: 7px;
  position: relative;
`;
const H4Box = styled(Button)`
  font-weight: 500;
  font-size: 12px;
  line-height: 215.9%;
  color: #000000;
  width: 100px;
  height: 23px;
  border-radius: 13.5px;
  border: 1px solid #000000;
  position: absolute;
  right: 9%;
  bottom: 0;
`;
const StyleContent = styled(ImageBox)`
  padding: 29px 13px;
  svg {
    height: 26px;
    width: 26px;
  }
  background-color: #f0f0f0;
  margin-top: 30px;
  width: 96%;
  position: absolute;
  left: 2%;
  z-index: 5;
  bottom: -12%;
`;

function Footer() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyleFooter>
      <WrapperOval>
        <BoxOval>
          <Oval />
        </BoxOval>
      </WrapperOval>
      <StyleBgrFooter>
        <LogoFooter>
          <Image src={logo} alt={"logo"} />
        </LogoFooter>
        <FooterBox1>
          <PBox1>
            Chuy??n trang gi???i thi???u s???n ph???m m???i showcase.vaithuhay.com l?? n??i
            gi??p anh em t??m ki???m c??c ?? t?????ng s???n ph???m m???i l???, ?????c ????o, ph?? h???p
            v???i nhu c???u c???a m??nh m?? ch??a t??m th???y n??i b??n tr??n th??? tr?????ng. ????y
            c??ng l?? n??i tr??nh b??y s???n ph???m s???p ra m???t c???a Vaithuhay v?? l?? c?? h???i
            ????? anh em nhanh tay ?????t tr?????c gi?? h???i g??i Ti??n Phong
          </PBox1>
        </FooterBox1>
        <FooterBox2
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PBox2>
            Ngo??i ra, t???i ????y b???n c?? th??? ????ng t???i s???n ph???m l??n platform ????? ???????c
            Vaithuhay propose c??ng ?????ng h??nh ph??t tri???n d??? ??n
            <EllipseBlur />
          </PBox2>
          <PostProductButton />
          <WrapperEllipse>
            {" "}
            <BoxEllipse>
              <Ellipse />
            </BoxEllipse>
          </WrapperEllipse>
        </FooterBox2>
        <FooterBox3
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PBox3>
            ????y c??ng l?? n??i d??nh cho c??c Nh?? ?????u t?? ??ang t??m ki???m d??? ??n ?????u t??/
            kinh doanh, th?? vi???c ?????u t?? v???i Vaithuhay v?? c??ng ph?? h???p v?? ch??ng
            t??i t??? tin v??? c??ch gi???i quy???t v???n ?????, kinh nghi???m, c??ch tri???n khai,
            ngu???n v???n c??ng nh?? &quot;insight v??? ng??nh&quot; s??? gi??p anh/ch??? ?????u
            t?? h???n ch??? r???i ro h??n r???t nhi???u khi t??? m??nh l??m.
            <EllipseBlur
              style={{ left: "10%", bottom: "-8%", filter: "blur(15px)" }}
            />
          </PBox3>
          <InvestorButton>T??M HI???U TH??M</InvestorButton>
          <WrapperEllipse
            style={{
              left: "10%",
              bottom: "-10px",
              top: "unset",
              right: "unset",
            }}
          >
            {" "}
            <BoxEllipse>
              <Ellipse style={{ filter: "blur(1px)" }} />
            </BoxEllipse>
          </WrapperEllipse>
        </FooterBox3>
        <StyleContent bg={bg1}>
          <FooterBox4>
            <H1Box>L???I NH???N T??? VAITHUHAY</H1Box>
            <H3Box>
              Ch??ng t??i bi???t khi chia s??? c??c d??? ??n s???n ph???m m???i c???a ch??nh m??nh
              ?????n c???ng ?????ng s??? v?? c??ng r???i ro cho ph??a Vaithuhay...
              <H4Box onClick={handleClick}> Xem th??m</H4Box>
            </H3Box>
          </FooterBox4>
        </StyleContent>
      </StyleBgrFooter>
      <Back>
        <PBack sx={{ display: "flex", alignItems: "center" }}>
          <a
            href="vaithuhay.com"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            {" "}
            <FooterBackIcon style={{ margin: "0 6px -2px 0" }} />
            Quay tr??? v??? trang ch???{" "}
          </a>
        </PBack>
      </Back>
      <LoiNhanVaithuhay open={open} onClose={handleClose} />
    </StyleFooter>
  );
}

export default Footer;
