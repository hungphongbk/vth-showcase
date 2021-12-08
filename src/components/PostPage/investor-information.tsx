import { withRole } from "../system/withRole";
import { AuthRoleType } from "../../types/graphql";
import { PLIndex } from "./PLIndex";
import { Box } from "@mui/material";

type InvestorInformationProps = {};
const InvestorInformation = withRole(AuthRoleType.Investor)(
  function InvestorInformation(props: InvestorInformationProps): JSX.Element {
    return (
      <Box sx={{ p: 1 }}>
        <PLIndex />
      </Box>
    );
  }
);

export default InvestorInformation;
