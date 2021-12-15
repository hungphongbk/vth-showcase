import React, { useMemo, useState } from "react";
import { Portal } from "@mui/material";
import MenuBarIcon from "../../assets/icons/MenuBarIcon";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "../../utils/hooks";
import { MotionBox } from "../commons";
import MenuPanel from "./MenuPanel";
import { useAppSelector } from "../../store";

const MENU_BTN_WIDTH = 59,
  MENU_BTN_HEIGHT = 32,
  MENU_BTN_TOP = (MENU_BTN_WIDTH - MENU_BTN_HEIGHT) / 2.0,
  MENU_BTN_LEFT = 12,
  MENU_BTN_Y_ORIGIN = MENU_BTN_TOP + MENU_BTN_HEIGHT / 2.0,
  MENU_BTN_X_ORIGIN = MENU_BTN_LEFT + MENU_BTN_WIDTH / 2.0;

const MotionMenuBarIcon = motion(MenuBarIcon);

export default function MenuDrawer(): JSX.Element {
  const [open, setOpenMenu] = useState(false),
    initialized = useAppSelector((state) => state.auth.initialized);

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const scaleFactor = useMemo(() => {
    return (
      Math.sqrt(
        (windowWidth - MENU_BTN_X_ORIGIN) ** 2 +
          (windowHeight - MENU_BTN_Y_ORIGIN) ** 2
      ) * 2
    );
  }, [windowHeight, windowWidth]);

  const doCloseMenu = () => setOpenMenu(false),
    doOpenMenu = () => setOpenMenu(true);
  return (
    <>
      {!open && (
        // <motion.div key={"menu-button"}>
        <MotionMenuBarIcon
          key={"menu-button"}
          sx={{
            width: MENU_BTN_WIDTH,
            height: MENU_BTN_HEIGHT,
            opacity: initialized ? 1 : 0.5,
          }}
          onClick={() => initialized && doOpenMenu()}
        />
        // </motion.div>
      )}

      <Portal>
        <AnimatePresence exitBeforeEnter>
          {open && (
            <MotionBox
              role={"presentation"}
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 13,
                bgcolor: "rgba(0,0,0,.65)",
              }}
              transition={{ duration: 0.35, ease: "circOut" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MenuPanel />
            </MotionBox>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
