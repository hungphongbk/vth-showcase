import React from "react";
import { Box } from "@mui/material";
import bgr1 from "../../../assets/bg-investor-1.png";
import { StyledBoxBase } from "../../post-page/styled";
import { PostProductButton } from "../../system";
import InvestorButton from "../../system/investor-button";
import { styled } from "@mui/material/styles";

const StyledTab1 = styled(Box)`
  font-weight: normal;
  font-size: 12px;
  line-height: 155.4%;
  display: flex;
  align-items: center;
  text-align: justify;
  padding: 11px 27px 11px 22px;
  color: #000000;
`;
function ShowCaseTab() {
  return (
    <Box
      sx={{ height: "calc(100% - 150px)", overflowY: "scroll", pb: "200px" }}
    >
      <Box>
        <div>
          <StyledTab1>
            Chuyên trang giới thiệu sản phẩm mới showcase.vaithuhay.com là nơi
            giúp anh em tìm kiếm các ý tưởng sản phẩm mới lạ, độc đáo, phù hợp
            với nhu cầu của mình mà chưa tìm thấy nơi bán trên thị trường. Đây
            cũng là nơi trình bày sản phẩm sắp ra mắt của Vaithuhay và là cơ hội
            để anh em nhanh tay đặt trước giá hời gói Tiên Phong.
          </StyledTab1>
        </div>
        <StyledBoxBase
          bg={bgr1}
          sx={{
            bgcolor: "#707070",
            margin: "0px 24px 35px 22px",
            py: "1px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              pt: "11px",
              pb: "32px",
              px: "4px",
              fontWeight: 500,
              textAlign: "justify",
            }}
          >
            Ngoài ra, tại đây bạn có thể đăng tải sản phẩm lên platform để được
            Vaithuhay propose cùng đồng hành phát triển dự án
          </Box>
          <PostProductButton />
        </StyledBoxBase>
        <StyledBoxBase
          bg={bgr1}
          sx={{
            bgcolor: "#707070",
            py: "1px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: "0px 24px 0 22px",
          }}
        >
          <Box
            sx={{
              pt: "11px",
              pb: "32px",
              px: "4px",
              fontWeight: 500,
              textAlign: "justify",
              color: "white",
            }}
          >
            Đây cũng là nơi dành cho các Nhà đầu tư đang tìm kiếm dự án đầu tư/
            kinh doanh, thì việc Đầu tư với Vaithuhay vô cùng phù hợp vì chúng
            tôi tự tin về cách giải quyết vấn đề, kinh nghiệm, cách triển khai,
            nguồn vốn cũng như &quot;insight về ngành&quot; sẽ giúp anh/chị đầu
            tư hạn chế rủi ro hơn rất nhiều khi tự mình làm.
          </Box>
          <InvestorButton>TÌM HIỂU THÊM</InvestorButton>
        </StyledBoxBase>
      </Box>
    </Box>
  );
}

export default ShowCaseTab;
