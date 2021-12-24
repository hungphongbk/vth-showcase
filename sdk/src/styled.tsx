import { Box, styled } from "@mui/material";

export const StyledSection = styled(Box)`
  position: relative;
  padding: 45px 24px 7px;
  background-color: #e5e5e5;
`;

export const StyledTitle = styled("h1")`
  > span {
    position: relative;
    color: #4f4f4f;
    padding: 0 20px;
    &:before,
    &:after {
      position: absolute;
      width: 140px;
      height: 2px;
      background: #4f4f4f;
      content: "";
      top: 50%;
      transform: translateY(-50%);
    }
    &:before {
      right: 100%;
    }
    &:after {
      left: 100%;
    }
  }
`;
