import React from "react";
import BaseCountdown, { CountdownRendererFn } from "react-countdown";
import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";

function getNthDigit(num: number, nth: number) {
  let str = num + "",
    nthStr = str.charAt(str.length - 1 - nth);

  if (nthStr.length === 0) nthStr = "0";

  // noinspection PointlessArithmeticExpressionJS
  return (nthStr as unknown as number) * 1;
}

const AnimateNumber = (props: {
  number: number;
  sx?: SxProps;
}): JSX.Element => {
  // @ts-ignore
  const [first, second] = (props.number + "").padStart(2, "0");
  return (
    <Box
      sx={{
        ...props.sx,
        borderRadius: "2px",
        fontSize: 15,
        fontWeight: 600,
        color: "white",
        height: "34px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "auto auto" }}>
        <AnimatePresence initial={false}>
          <motion.div
            style={{ gridColumn: 1 }}
            layout
            key={`first-${first}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            {first}
          </motion.div>
          <motion.div
            style={{ gridColumn: 2 }}
            layout
            key={`second-${second}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            {second}
          </motion.div>
        </AnimatePresence>
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
        bgcolor: "#E40000",
        borderRadius: "2px",
      }}
    >
      <AnimateNumber number={props.days} sx={{ gridColumn: 1 }} />
      <Separator sx={{ gridColumn: 2 }} />
      <AnimateNumber number={props.hours} sx={{ gridColumn: 3 }} />
      <Separator sx={{ gridColumn: 4 }} />
      <AnimateNumber number={props.minutes} sx={{ gridColumn: 5 }} />
      <Separator sx={{ gridColumn: 6 }} />
      <AnimateNumber number={props.seconds} sx={{ gridColumn: 7 }} />
    </Box>
  );
};

export default function VthCountdown(props: unknown): JSX.Element {
  return <BaseCountdown date={Date.now() + 500000} renderer={renderer} />;
}
