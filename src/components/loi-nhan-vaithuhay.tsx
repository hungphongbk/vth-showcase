import { Box, Button, Dialog, DialogProps } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import styles from "./loi-nhan-vaithuhay.module.css";
import PaperBox, { PaperBoxClose } from "./paper-box";

const BtnClose = styled(Button)`
  border-radius: 50%;
  background-color: #000000;
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
      <PaperBox className="flex flex-col">
        <PaperBoxClose onClick={onClose as any} />
        <Box className={styles.Title}>LỜI NHẮN TỪ VAITHUHAY</Box>
        <Box className={styles.Content}>
          <p className="text-justify">
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
          </p>
          <p className="pt-2">LET&apos;S SHARE TO EARN</p>
          <p className="text-right pb-4 text-xs">Bùi Sơn Tâm | Founder & CEO</p>
        </Box>
      </PaperBox>
    </Dialog>
  );
}
