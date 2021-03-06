import { Box, List } from "@mui/material";
import { UserStatusEnum } from "../../../types/graphql";
import { ComponentType, useMemo } from "react";
import CreatorConfirmedIcon from "./CreatorConfirmedIcon";
import InvestorConfirmedIcon from "./InvestorConfirmedIcon";
import { css, styled } from "@mui/material/styles";

export const StyledUpper = styled(Box)(
  ({ theme }) => css`
    border-radius: 0 30px 30px 30px;
    background-color: ${theme.palette.yellow.main};
    padding: 17px 23px;
  `
);

export const RoleIcon = (props: { role: UserStatusEnum }) => {
  const Component = useMemo<ComponentType<any>>(() => {
    switch (props.role) {
      case UserStatusEnum.PendingCreator:
      case UserStatusEnum.ApprovedCreator:
        return CreatorConfirmedIcon;
      case UserStatusEnum.PendingInvestor:
      case UserStatusEnum.ApprovedInvestor:
        return InvestorConfirmedIcon;
      default:
        return () => null;
    }
  }, [props.role]);

  return (
    <Component sx={{ gridArea: "user-role", width: "auto", height: "auto" }} />
  );
};

export const StyledMenuList = styled(List)`
  .MuiListItemIcon-root {
    min-width: ${18 + 22}px;
  }
  .MuiListItemText-primary {
    font-size: 15px;
    font-weight: 600;
  }
`;
