import { useState } from "react";
import {
  Backdrop,
  css,
  SpeedDial,
  SpeedDialAction,
  styled,
} from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import DocumentIcon from "../assets/icons/DocumentIcon";

const ICON_SIZE = 30,
  ACTION_GUTTER = 4;

const StyledSpeedDial = styled(SpeedDial)(
  ({ theme }) => css`
    position: fixed;
    bottom: 16px;
    right: 16px;
    .MuiSpeedDialIcon {
      &-root {
        height: 29px;
      }
      &-icon {
        height: 29px;
        width: 29px;
      }
    }
    .MuiSpeedDial-actions {
      gap: 12px;
    }
    .MuiSpeedDialAction {
      &-staticTooltip {
        display: grid;
        grid-template-columns: 1fr ${ICON_SIZE + 8 + ACTION_GUTTER * 2}px;
        width: 220px;
        margin-left: ${ICON_SIZE + 8 + ACTION_GUTTER * 2 - 220}px;
        background-color: ${theme.palette.primary.main};
        border-radius: 23px;
        &Closed {
          opacity: 0;
        }
      }
      &-staticTooltipLabel,
      &-fab {
        background-color: unset;
        border-radius: unset;
        box-shadow: unset;
      }
      &-fab {
        height: ${ICON_SIZE + 8}px;
        width: ${ICON_SIZE + 8}px;
        min-height: unset;
        margin: ${ACTION_GUTTER}px;
      }
      &-staticTooltipLabel {
        white-space: nowrap;
        position: relative;
        right: unset;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        margin-right: unset;
      }
    }
  `
);

type CreatorAndInvestorActionsProps = {};
export default function CreatorAndInvestorActions(
  props: CreatorAndInvestorActionsProps
): JSX.Element {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Backdrop open={open} sx={{ zIndex: 9 }} />
      <StyledSpeedDial
        ariaLabel="creator and investor speed dial"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction
          key={"qlda"}
          icon={<DocumentIcon sx={{ width: ICON_SIZE, height: ICON_SIZE }} />}
          tooltipTitle={"Quản lý dự án"}
          tooltipOpen
          onClick={handleClose}
        />
        <SpeedDialAction
          key={"htpt"}
          icon={<DocumentIcon sx={{ width: ICON_SIZE, height: ICON_SIZE }} />}
          tooltipTitle={"Hợp tác phát triển"}
          tooltipOpen
          onClick={handleClose}
        />
      </StyledSpeedDial>
    </>
  );
}
