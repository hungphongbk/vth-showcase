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
            Chuyên trang giới thiệu sản phẩm mới showcase.vaithuhay.com là nơi
            giúp anh em tìm kiếm các ý tưởng sản phẩm mới lạ, độc đáo, phù hợp
            với nhu cầu của mình mà chưa tìm thấy nơi bán trên thị trường. Đây
            cũng là nơi trình bày sản phẩm sắp ra mắt của Vaithuhay và là cơ hội
            để anh em nhanh tay đặt trước giá hời gói Tiên Phong
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
            Ngoài ra, tại đây bạn có thể đăng tải sản phẩm lên platform để được
            Vaithuhay propose cùng đồng hành phát triển dự án
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
            Đây cũng là nơi dành cho các Nhà đầu tư đang tìm kiếm dự án đầu tư/
            kinh doanh, thì việc Đầu tư với Vaithuhay vô cùng phù hợp vì chúng
            tôi tự tin về cách giải quyết vấn đề, kinh nghiệm, cách triển khai,
            nguồn vốn cũng như &quot;insight về ngành&quot; sẽ giúp anh/chị đầu
            tư hạn chế rủi ro hơn rất nhiều khi tự mình làm.
            <EllipseBlur
              style={{ left: "10%", bottom: "-8%", filter: "blur(15px)" }}
            />
          </PBox3>
          <InvestorButton>TÌM HIỂU THÊM</InvestorButton>
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
            <H1Box>LỜI NHẮN TỪ VAITHUHAY</H1Box>
            <H3Box>
              Chúng tôi biết khi chia sẻ các dự án sản phẩm mới của chính mình
              đến cộng đồng sẽ vô cùng rủi ro cho phía Vaithuhay...
              <H4Box onClick={handleClick}> Xem thêm</H4Box>
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
            Quay trở về trang chủ{" "}
          </a>
        </PBack>
      </Back>
      <LoiNhanVaithuhay open={open} onClose={handleClose} />
    </StyleFooter>
  );
}

export default Footer;
