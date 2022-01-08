import { Box, BoxProps, styled } from "@mui/material";
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";
import { TabList, TabPanel } from "@mui/lab";
import { css } from "@mui/material/styles";
import { CommentRateEnum } from "../../types/graphql";

type ImageBoxProps = BoxProps & { bg: ImageProps["src"] };
// eslint-disable-next-line react/display-name
const ImageBox = forwardRef(
  ({ bg, children, ...props }: ImageBoxProps, ref: any) => (
    <Box ref={ref} {...props}>
      <Image src={bg} layout={"fill"} objectFit={"cover"} />
      {children}
    </Box>
  )
);
export const StyledBox = styled(ImageBox)`
  padding: 11px 13px;
  border-radius: 12px;
  position: relative;
  &,
  * {
    color: white;
  }
  display: grid;
  grid-template-areas: "icon label" "num num";
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  align-items: center;
  height: 100%;
  svg {
    height: 26px;
    width: 26px;
  }
`;

export const PLIndexWrapper = styled(Box)`
  display: grid;
  grid-template-areas:
    "st1 st1"
    "nd2 rd3"
    "th4 th6"
    "th5 th6"
    "th7 th7";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(5, 90px);
  grid-gap: 8px;
`;
export const InvestIndexWrapper = styled(Box)`
  display: grid;
  grid-template-areas: "st1" "nd2" "rd3";
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 90px) auto;
  grid-gap: 8px;
  margin: -8px;
  padding: 8px;
`;

export const StyledTabPanel = styled(TabPanel)`
  &.MuiTabPanel-root {
    padding: 10px 8px 10px;
    margin-left: -8px;
    margin-right: -8px;
    background: white;
  }
`;
export const StyledTabList = styled(TabList)(
  ({ theme }) => css`
    .MuiTab-root {
      &,
      .MuiTypography-root {
        font-weight: bold;
      }
    }
    .MuiTab-root.Mui-selected {
      color: ${theme.palette.green.dark};
    }
    .MuiTabs-indicator {
      background-color: ${theme.palette.green.dark};
    }
  `
);

//@ts-ignore
export const CommentRateMaps: Record<
  CommentRateEnum,
  { label: string; color: string }
> = {
  [CommentRateEnum.CoTiemNang]: { label: "Có tiềm năng", color: "#FF9900" },
  [CommentRateEnum.DangTien]: { label: "Đáng tiền", color: "#FFD211" },
  [CommentRateEnum.SieuPham]: { label: "Siêu phẩm", color: "#FF0000" },
};
