import { ShowcaseInvestorStatDto } from "../../types/graphql";
import { InvestIndexWrapper, StyledBox } from "./styled";
import { Box, Typography } from "@mui/material";
import bg1 from "../../assets/bg-investor-1.png";
import BudgetIncreaseIcon from "../../assets/icons/BudgetIncreaseIcon";

export default function InvestIndex({
  stat,
}: {
  stat: Partial<ShowcaseInvestorStatDto>;
}): JSX.Element {
  return (
    <InvestIndexWrapper>
      <Box sx={{ gridArea: "st1" }}>
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
            Vốn đầu tư ban đầu <br />
            Tồn kho - Vận hành - Quảng cáo
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            {stat.initialCapital}
          </Typography>
        </StyledBox>
      </Box>
    </InvestIndexWrapper>
  );
}
