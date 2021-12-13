import { ShowcaseInvestorStatDto } from "../../types/graphql";
import { PLIndex } from "./PLIndex";
import { Box } from "@mui/material";

type InvestorInformationProps = {
  stat: Partial<ShowcaseInvestorStatDto> | null;
};
export default function InvestorInformation({
  stat,
}: InvestorInformationProps): JSX.Element {
  if (!stat) return <></>;
  return (
    <Box sx={{ p: 1 }}>
      <PLIndex stat={stat} />
    </Box>
  );
}
