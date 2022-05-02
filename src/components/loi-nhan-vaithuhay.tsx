import bg1 from "../assets/white-paper-texture 1.png";
import CloseIcon from "../assets/icons/CloseIcon";
import { Box, Button, Dialog, DialogProps } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import ImageBox from "./image-box";

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

type LoiNhanVaithuhayProps = Pick<DialogProps, "open" | "onClose">;
export default function LoiNhanVaithuhay({
  open,
  onClose,
}: LoiNhanVaithuhayProps): JSX.Element {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ style: { borderRadius: 15 } }}
    >
      <PopUpContent bg={bg1}>
        <FooterBox4>
          <H1Box style={{ paddingTop: "40px" }}>LỜI NHẮN TỪ VAITHUHAY</H1Box>
          <H3Box style={{ padding: "10px 15px 0 18px" }}>
            Chúng tôi biết khi chia sẻ các dự án sản phẩm mới của chính mình, dự
            án kinh doanh cho cộng đồng sẽ vô cùng rủi ro cho phía Vaithuhay.
            Tuy nhiên đội ngũ sáng lập Vaithuhay cùng thống nhất cho rằng để
            thành công, một mình là không đủ, một dự án kinh doanh thành công
            bao gồm rất nhiều yếu tố.
            <br />
            Và giấc mơ của chúng tôi không chỉ dừng lại ở biên giới Việt Nam,
            mong muốn đi xa hơn thế nữa đã thôi thúc chúng tôi chia sẻ các sản
            phẩm kinh doanh tiềm năng của chính mình cho cộng đồng thay vì đó tự
            mình kiếm lợi nhuận và để làm được điều đó cần có sự đồng hành của
            các nhà đầu tư, anh em đang tìm cách khởi nghiệp.
            <br />
            <p style={{ paddingTop: "7px" }}>LET&apos;S SHARE TO EARN</p>
            <p
              className="text-right"
              style={{
                paddingBottom: "15px",
                fontSize: "13px",
                lineHeight: "28px",
              }}
            >
              Bùi Sơn Tâm | Founder & CEO
            </p>
          </H3Box>
        </FooterBox4>
        <BtnClose onClick={onClose as any}>
          <CloseIcon />
        </BtnClose>
      </PopUpContent>
    </Dialog>
  );
}
