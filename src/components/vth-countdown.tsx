import React from "react";
import BaseCountdown, { CountdownRendererFn } from "react-countdown";
import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";

const AnimateNumber = (props: {
  number: number;
  label: string;
  sx?: SxProps;
}): JSX.Element => {
  return (
    <Box
      sx={{
        ...props.sx,
        borderRadius: "2px",
        fontSize: 15,
        fontWeight: 600,
        color: "white",
        height: "26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <span>{(props.number + "").padStart(2, "0")}</span>
        <Typography sx={{ fontSize: 6.5, lineHeight: 0 }}>
          {props.label}
        </Typography>
      </Box>
    </Box>
  );
};

const Separator = (props: { sx?: SxProps }): JSX.Element => (
  <Typography
    sx={{ ...props.sx, color: "white", fontSize: 15, fontWeight: 600 }}
  >
    :
  </Typography>
);

const renderer: CountdownRendererFn = (props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
        gap: "2px",
        alignItems: "center",
        bgcolor: "#FF0000",
        borderRadius: "2px",
        pb: 0.8,
        flex: 1,
      }}
    >
      <AnimateNumber
        number={props.days}
        sx={{ gridColumn: 1 }}
        label={"ngày"}
      />
      <Separator sx={{ gridColumn: 2 }} />
      <AnimateNumber
        number={props.hours}
        sx={{ gridColumn: 3 }}
        label={"giờ"}
      />
      <Separator sx={{ gridColumn: 4 }} />
      <AnimateNumber
        number={props.minutes}
        sx={{ gridColumn: 5 }}
        label={"phút"}
      />
      <Separator sx={{ gridColumn: 6 }} />
      <AnimateNumber
        number={props.seconds}
        sx={{ gridColumn: 7 }}
        label={"giây"}
      />
    </Box>
  );
};

export default function VthCountdown(props: unknown): JSX.Element {
  return <BaseCountdown date={Date.now() + 500000} renderer={renderer} />;
}
