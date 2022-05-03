import { ShowcaseInvestorStatDto } from "../../types/graphql";
import { InvestIndexWrapper, StyledBox } from "./styled";
import { Box, Typography } from "@mui/material";
import bg1 from "../../assets/bg-investor-1.png";
import BudgetIncreaseIcon from "../../assets/icons/BudgetIncreaseIcon";
import ClockwiseIcon from "../../assets/icons/ClockwiseIcon";
import PackagesData from "./packages-data";
import clsx from "clsx";
import styles from "./invest.module.css";

export default function InvestIndex({
  stat,
  disablePackagesData = false,
  className,
}: {
  stat: Partial<ShowcaseInvestorStatDto>;
  disablePackagesData?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <InvestIndexWrapper className={clsx("overflow-x-hidden", className)}>
      <Box sx={{ gridArea: "st1" }}>
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
            Vốn đầu tư ban đầu <br />
            Tồn kho - Vận hành - Quảng cáo
          </Typography>
          <Typography
            className={styles.Value}
            sx={{
              gridArea: "num",
            }}
          >
            {stat.initialCapital}
          </Typography>
        </StyledBox>
      </Box>
      <Box sx={{ gridArea: "nd2" }}>
        <StyledBox bg={bg1} sx={{ bgcolor: "#00B66A" }}>
          <ClockwiseIcon sx={{ gridArea: "icon", height: 26, width: 26 }} />
          <Typography
            className={styles.TitleBig}
            sx={{
              gridArea: "label",
            }}
          >
            Chỉ số vòng quanh vốn
            <br />
            an toàn tương xứng
          </Typography>
          <Typography
            className={styles.Value}
            sx={{
              gridArea: "num",
            }}
          >
            {stat.revolvingInterval} ngày - {stat.revolvingPerDay?.toFixed(2)}
          </Typography>
        </StyledBox>
      </Box>
      {!disablePackagesData && (
        <Box sx={{ gridArea: "rd3", overflow: "scroll", mr: -1 }}>
          <PackagesData stat={stat} />
        </Box>
      )}
    </InvestIndexWrapper>
  );
}
