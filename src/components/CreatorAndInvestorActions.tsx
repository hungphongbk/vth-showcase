import { useState } from "react";
import { Backdrop } from "@mui/material";
import { SpeedDial } from "@mui/lab";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

type CreatorAndInvestorActionsProps = {};
export default function CreatorAndInvestorActions(
  props: CreatorAndInvestorActionsProps
): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        // onClose={handleClose}
        // onOpen={handleOpen}
        open={open}
      ></SpeedDial>
    </>
  );
}
