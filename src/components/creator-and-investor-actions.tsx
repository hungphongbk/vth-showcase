import {
  Backdrop,
  css,
  Fade,
  SpeedDial,
  SpeedDialAction,
  styled,
} from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import DocumentIcon from "../assets/icons/DocumentIcon";
import { useRouter } from "next/router";
import { useInvestorRegDialog } from "./system";
import { useState } from "react";

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
      display: grid;
      grid-gap: 12px;
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

export default function CreatorAndInvestorActionsComponent(): JSX.Element {
  const router = useRouter();
  const { open: openDialog, renderDialog } = useInvestorRegDialog();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUploadNew = async () => {
    await router.push("/manage/create-post");
    handleClose();
  };

  const handleCorporate = async () => {
    await openDialog();
    handleClose();
  };

  return (
    <>
      <Backdrop open={open} sx={{ zIndex: 9 }} />
      <Fade in={!/\/manage\/(create-post|update)/.test(router.asPath)}>
        <StyledSpeedDial
          ariaLabel="creator and investor speed dial"
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          <SpeedDialAction
            key={"htpt"}
            icon={<DocumentIcon sx={{ width: ICON_SIZE, height: ICON_SIZE }} />}
            tooltipTitle={"Hợp tác"}
            tooltipOpen
            onClick={handleCorporate}
          />
          <SpeedDialAction
            key={"qlda"}
            icon={<DocumentIcon sx={{ width: ICON_SIZE, height: ICON_SIZE }} />}
            tooltipTitle={"Đăng sản phẩm"}
            tooltipOpen
            onClick={handleUploadNew}
          />
        </StyledSpeedDial>
      </Fade>
      {renderDialog}
    </>
  );
}
