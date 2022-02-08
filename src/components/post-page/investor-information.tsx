import { ShowcaseInvestorStatDto } from "../../types/graphql";
import { PLIndex } from "./PLIndex";
import { Box, Tab, Typography } from "@mui/material";
import { useState } from "react";
import { TabContext } from "@mui/lab";
import { StyledTabList, StyledTabPanel } from "./styled";
import InvestIndex from "./InvestIndex";

type InvestorInformationProps = {
  stat: Partial<ShowcaseInvestorStatDto> | null;
};
export default function InvestorInformation({
  stat,
}: InvestorInformationProps): JSX.Element {
  const [tab, setTab] = useState("1");
  const handleChange = (event: any, newValue: any) => {
    setTab(newValue);
  };
  if (!stat) return <></>;
  return (
    <Box sx={{ p: 1 }}>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <StyledTabList onChange={handleChange} variant={"fullWidth"}>
            <Tab
              label={
                <Typography>
                  CHỈ SỐ P&L <br /> DỰ KIẾN CHI TIẾT
                </Typography>
              }
              value={"1"}
            />
            <Tab
              label={
                <Typography>
                  CHỈ SỐ ĐẦU TƯ <br /> DỰ KIẾN
                </Typography>
              }
              value={"2"}
            />
          </StyledTabList>
        </Box>
        <StyledTabPanel value={"1"}>
          <PLIndex stat={stat} />
        </StyledTabPanel>
        <StyledTabPanel value={"2"}>
          <InvestIndex stat={stat} />
        </StyledTabPanel>
      </TabContext>
    </Box>
  );
}
