import { Box, BoxProps, Grid, styled, Typography } from "@mui/material";
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";
import bg1 from "../../assets/bg-investor-1.png";
import BudgetIncreaseIcon from "../../assets/icons/BudgetIncreaseIcon";

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
const StyledBox = styled(ImageBox)`
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
`;

export function PLIndex(props: unknown) {
  return (
    <Grid container spacing={1} alignItems={"stretch"}>
      <Grid item xs={12}>
        <StyledBox bg={bg1} sx={{ bgcolor: "#00b66a" }}>
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
            Doanh thu dự kiến <br />1 năm tổng cộng
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            4.500.000.000 VND
          </Typography>
        </StyledBox>
      </Grid>
      <Grid item xs={8}>
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
            Doanh thu từ <br />
            chiến dịch Pre-order
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            500.000.000 VND
          </Typography>
        </StyledBox>
      </Grid>
      <Grid item xs={4}>
        <StyledBox
          bg={bg1}
          sx={{ bgcolor: "#00b66a", gridTemplateAreas: "'label' 'num'" }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 12.5,
              lineHeight: "133.4%",
              gridArea: "label",
            }}
          >
            Tốc độ
            <br /> tăng truởng
            <br /> mỗi tháng
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "24px",
              gridArea: "num",
            }}
          >
            5%
          </Typography>
        </StyledBox>
      </Grid>
    </Grid>
  );
}
