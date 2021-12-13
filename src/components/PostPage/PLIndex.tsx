import { Box, Typography } from "@mui/material";
import bg1 from "../../assets/bg-investor-1.png";
import BudgetIncreaseIcon from "../../assets/icons/BudgetIncreaseIcon";
import { ShowcaseInvestorStatDto } from "../../types/graphql";
import { PLIndexWrapper, StyledBox } from "./styled";
import BudgetTotalIcon from "../../assets/icons/budget-total-icon";

export function PLIndex({ stat }: { stat: Partial<ShowcaseInvestorStatDto> }) {
  return (
    <PLIndexWrapper>
      <Box sx={{ gridArea: "st1" }}>
        <StyledBox bg={bg1} sx={{ bgcolor: "#00B66A" }}>
          <BudgetIncreaseIcon
            sx={{ gridArea: "icon", height: 26, width: 26 }}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 13,
              lineHeight: "133.4%",
              gridArea: "label",
            }}
          >
            Doanh thu dự kiến <br />1 năm tổng cộng
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.firstYearRevenue!.toLocaleString("vi-VN")} VND
          </Typography>
        </StyledBox>
      </Box>
      <Box sx={{ gridArea: "nd2" }}>
        <StyledBox bg={bg1} sx={{ bgcolor: "#707070" }}>
          <BudgetIncreaseIcon
            sx={{ gridArea: "icon", height: 26, width: 26 }}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 13,
              lineHeight: "133.4%",
              gridArea: "label",
            }}
          >
            Doanh thu từ <br />
            chiến dịch Pre-order
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.totalRevenue!.toLocaleString("vi-VN")} VND
          </Typography>
        </StyledBox>
      </Box>
      <Box sx={{ gridArea: "rd3" }}>
        <StyledBox
          bg={bg1}
          sx={{
            bgcolor: "#00B66A",
            gridTemplateAreas: "'label' 'num'",
            pt: "5px",
            gridRowGap: "1px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 12.5,
              lineHeight: "133.4%",
              gridArea: "label",
            }}
          >
            Tốc độ
            <br /> tăng truởng
            <br /> mỗi tháng
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.growthRate!}%
          </Typography>
        </StyledBox>
      </Box>
      <Box sx={{ gridArea: "th4" }}>
        <StyledBox
          bg={bg1}
          sx={{
            bgcolor: "red.main",
          }}
        >
          <BudgetTotalIcon sx={{ gridArea: "icon" }} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 12.5,
              lineHeight: "133.4%",
              gridArea: "label",
            }}
          >
            Chi phí quảng cáo trung bình <strong>({stat.adCostRate}%)</strong>
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.adCost!}
          </Typography>
        </StyledBox>
      </Box>
      <Box sx={{ gridArea: "th5" }}>
        <StyledBox
          bg={bg1}
          sx={{
            bgcolor: "red.main",
          }}
        >
          <BudgetTotalIcon sx={{ gridArea: "icon" }} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 12.5,
              lineHeight: "133.4%",
              gridArea: "label",
            }}
          >
            Chi phí vận hành từ vaithuhay{" "}
            <strong>({stat.operatingCostRate}%)</strong>
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.operatingCost!}
          </Typography>
        </StyledBox>
      </Box>
      <Box sx={{ gridArea: "th7" }}>
        <StyledBox bg={bg1} sx={{ bgcolor: "#00B66A" }}>
          <BudgetIncreaseIcon
            sx={{ gridArea: "icon", height: 26, width: 26 }}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 13,
              lineHeight: "133.4%",
              gridArea: "label",
            }}
          >
            Lợi nhuận dự kiến <br />
            01 năm (trước thuế)
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.firstYearRevenue!.toLocaleString("vi-VN")} VND
          </Typography>
        </StyledBox>
      </Box>
    </PLIndexWrapper>
  );
}
