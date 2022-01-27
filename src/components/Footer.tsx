import React, { forwardRef, useState } from "react";
import { Box, BoxProps, Button, Dialog, styled } from "@mui/material";
import Image, { ImageProps } from "next/image";
import ShowCaseSearchIcon from "../components/drawers/menu/ShowCaseSearchIcon";
import bg1 from "../assets/white-paper-texture 1.png";
import logo from "../assets/Logo Showcase-01.png";
import CloseIcon from "../assets/icons/CloseIcon";
import VthIconButton from "./vth-icon-button";
import { UploadFilledPrimaryIcon } from "@hungphongbk/vth-sdk";

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
  font-style: normal;
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
  font-style: normal;
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
const BtnPostProduct = styled(Button)`
  /* Yellow */
  background: #ffde50;
  border: 3px solid #fff5cb;
  /* Button */
  box-shadow: inset 0px -4px 6px rgba(0, 0, 0, 0.1);
  width: 183px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  bottom: 0;
  justify-content: space-between;
  transform: translate(-50%, 50%);
  &:hover {
    background-color: #ffde50;
  }
`;
const BtnPost = styled(Box)`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const PBox3 = styled(Box)`
  position: relative;
  overflow: hidden;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 158.9%;
  /* or 19px */

  display: flex;
  align-items: center;
  text-align: justify;
  margin: 10px 0 0 0;
  padding: 10px 19px 33px 25px;
`;
const Back = styled(Box)`
  position: relative;
  height: 146px;
  background-color: #ffde50;
  margin: 0;
`;

const PBack = styled(Button)`
  font-style: normal;
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
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  text-align: center;
  color: #3f3f3f;
`;
const H3Box = styled(Box)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 198.4%;

  color: #000000;
  margin-top: 7px;
  position: relative;
`;
const H4Box = styled(Button)`
  font-style: normal;
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
const PopUpContent = styled(ImageBox)`
  svg {
    height: 26px;
    width: 26px;
  }
  background-color: #f0f0f0;
  border-radius: 15px;
  width: 100%;
  position: relative;
`;
const BtnClose = styled(Button)`
  max-width: 20px;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000000;
  position: absolute;
  top: 2%;
  right: 5%;
  color: #ffffff;
  &:hover {
    background-color: #000000;
  }
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
          <VthIconButton
            sx={{ mb: "-19px", mt: "-19px" }}
            labelProps={{ sx: { mx: 2 } }}
            startIcon={
              <UploadFilledPrimaryIcon sx={{ width: 22, height: 22 }} />
            }
          >
            ĐĂNG SẢN PHẨM
          </VthIconButton>
          <WrapperEllipse>
            {" "}
            <BoxEllipse>
              <Ellipse />
            </BoxEllipse>
          </WrapperEllipse>
        </FooterBox2>
        <FooterBox3>
          <PBox3>
            Đây cũng là nơi dành cho các Nhà đầu tư đang tìm kiếm dự án đầu tư/
            kinh doanh, thì việc hợp tác với Vaithuhay vô cùng phù hợp vì chúng
            tôi tự tin về cách giải quyết vấn đề, kinh nghiệm, cách triển khai,
            nguồn vốn cũng như &quot;insight về ngành&quot; sẽ giúp anh/chị đầu
            tư hạn chế rủi ro hơn rất nhiều khi tự mình làm.
            <EllipseBlur
              style={{ left: "10%", bottom: "-8%", filter: "blur(15px)" }}
            />
          </PBox3>
          <BtnPostProduct>
            <BtnPost>
              <ShowCaseSearchIcon style={{ marginRight: "6px" }} />
              TÌM HIỂU THÊM
            </BtnPost>
          </BtnPostProduct>
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
        <PBack> </PBack>
      </Back>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { borderRadius: 15 } }}
      >
        <PopUpContent bg={bg1}>
          <FooterBox4>
            <H1Box style={{ paddingTop: "40px" }}>LỜI NHẮN TỪ VAITHUHAY</H1Box>
            <H3Box style={{ padding: "10px 15px 0 18px" }}>
              Chúng tôi biết khi chia sẻ các dự án sản phẩm mới của chính mình,
              dự án kinh doanh cho cộng đồng sẽ vô cùng rủi ro cho phía
              Vaithuhay. Tuy nhiên đội ngũ sáng lập Vaithuhay cùng thống nhất
              cho rằng để thành công, một mình là không đủ, một dự án kinh doanh
              thành công bao gồm rất nhiều yếu tố.
              <br />
              Và giấc mơ của chúng tôi không chỉ dừng lại ở biên giới Việt Nam,
              mong muốn đi xa hơn thế nữa đã thôi thúc chúng tôi chia sẻ các sản
              phẩm kinh doanh tiềm năng của chính mình cho cộng đồng thay vì đó
              tự mình kiếm lợi nhuận và để làm được điều đó cần có sự đồng hành
              của các nhà đầu tư, anh em đang tìm cách khởi nghiệp.
              <br />
              <p style={{ paddingTop: "7px" }}>LET&apos;S SHARE TO EARN</p>
              <p
                style={{
                  textAlign: "right",
                  paddingBottom: "15px",
                  fontSize: "13px",
                  lineHeight: "28px",
                }}
              >
                Bùi Sơn Tâm | Founder & CEO
              </p>
            </H3Box>
          </FooterBox4>
          <BtnClose onClick={handleClose}>
            <CloseIcon />
          </BtnClose>
        </PopUpContent>
      </Dialog>
    </StyleFooter>
  );
}

export default Footer;
