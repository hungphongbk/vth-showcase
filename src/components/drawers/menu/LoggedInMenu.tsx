import { Box, styled, Typography } from "@mui/material";
import { css } from "@mui/material/styles";
import { useState } from "react";

const StyledTabs = styled(Box)`
  background: #ffffff;
  border-radius: 25px;
  height: 45px;
  width: calc(100% - 62px);
  margin-top: -25px;
  margin-left: 31px;
  margin-right: 31px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledTab = styled(Typography)<{ isActive: boolean }>`
  color: #d4d4d4;
  font-weight: 700;
  font-size: 13px;
  transition: color 0.1s ease;
  &:before {
    content: "";
    display: inline-block;
    height: 6px;
    width: 6px;
    background-color: ${({ theme }) => theme.palette.yellow.main};
    border-radius: 50%;
    margin-right: 4px;
    transform: translateY(-1px);
    opacity: 0;
    transition: opacity 0.1s ease;
  }
  ${({ isActive }) =>
    isActive === true &&
    css`
      color: black;
      &:before {
        opacity: 1;
      }
    `}
`;

type LoggedInMenuProps = {};
export default function LoggedInMenu(props: LoggedInMenuProps): JSX.Element {
  const [tab, setTab] = useState(0);
  return (
    <>
      <StyledTabs sx={{ mb: 1 }}>
        <StyledTab isActive={tab === 0} onClick={() => setTab(0)}>
          Thông tin
        </StyledTab>
        <StyledTab isActive={tab === 1} onClick={() => setTab(1)}>
          Showcase là gì?
        </StyledTab>
      </StyledTabs>
    </>
  );
}
