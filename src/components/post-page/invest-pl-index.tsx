import { Box, Typography } from "@mui/material";
import bg1 from "../../assets/bg-investor-1.png";
import BudgetIncreaseIcon from "../../assets/icons/BudgetIncreaseIcon";
import { ShowcaseInvestorStatDto } from "../../types/graphql";
import { PLIndexWrapper, StyledBox } from "./styled";
import BudgetTotalIcon from "../../assets/icons/budget-total-icon";
import styles from "./invest.module.css";

export function InvestPlIndex({
  stat,
}: {
  stat: Partial<ShowcaseInvestorStatDto>;
}) {
  return (
    <PLIndexWrapper>
      <Box sx={{ gridArea: "st1" }}>
        <StyledBox bg={bg1} sx={{ bgcolor: "#00B66A" }}>
          <BudgetIncreaseIcon
            sx={{ gridArea: "icon", height: 26, width: 26 }}
          />
          <Typography
            className={styles.TitleBig}
            sx={{
              gridArea: "label",
            }}
          >
            Doanh thu dự kiến <br />1 năm tổng cộng
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.firstYearRevenue}
          </Typography>
        </StyledBox>
      </Box>
      <Box sx={{ gridArea: "nd2" }}>
        <StyledBox bg={bg1} sx={{ bgcolor: "#707070" }}>
          <BudgetIncreaseIcon
            sx={{ gridArea: "icon", height: 26, width: 26 }}
          />
          <Typography
            className={styles.TitleBig}
            sx={{
              gridArea: "label",
            }}
          >
            Doanh thu từ <br />
            chiến dịch Pre-order
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.totalRevenue}
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
            gridGap: "unset",
            gridRowGap: "1px",
          }}
        >
          <Typography
            className={styles.TitleSmall}
            sx={{
              gridArea: "label",
            }}
          >
            Tốc độ tăng truởng mỗi tháng
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 18,
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
            className={styles.TitleBig}
            sx={{
              gridArea: "label",
            }}
          >
            Chi phí quảng cáo trung bình <strong>({stat.adCostRate}%)</strong>
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 18,
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
            className={styles.TitleBig}
            sx={{
              gridArea: "label",
            }}
          >
            Chi phí vận hành từ vaithuhay{" "}
            <strong>({stat.operatingCostRate}%)</strong>
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.operatingCost!}
          </Typography>
        </StyledBox>
      </Box>
      <Box sx={{ gridArea: "th6" }}>
        <StyledBox
          bg={bg1}
          sx={{
            bgcolor: "#00B66A",
            // pt: "5px",
            gridRowGap: "1px",
            gridTemplateAreas: "'label' 'num'",
            alignItems: "start",
            gridTemplateRows: "auto 1fr",
          }}
        >
          <Typography
            className={styles.TitleSmall}
            sx={{
              gridArea: "label",
            }}
          >
            <BudgetTotalIcon
              sx={{
                gridArea: "icon",
                height: "12px !important",
                width: "12px !important",
                display: "inline-block",
                mr: "5px",
              }}
            />
            Giá vốn
            <br />
            sản phẩm
            <br />({stat.adCostRate}%)
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "24px",
              gridArea: "num",
              wordBreak: "break-all",
            }}
          >
            {stat.adCost}
          </Typography>
        </StyledBox>
      </Box>
      <Box sx={{ gridArea: "th7" }}>
        <StyledBox bg={bg1} sx={{ bgcolor: "#00B66A" }}>
          <BudgetIncreaseIcon
            sx={{ gridArea: "icon", height: 26, width: 26 }}
          />
          <Typography
            className={styles.TitleBig}
            sx={{
              gridArea: "label",
            }}
          >
            Lợi nhuận dự kiến <br />
            01 năm (trước thuế)
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.firstYearRevenue}
          </Typography>
        </StyledBox>
      </Box>
    </PLIndexWrapper>
  );
}
