import React, { useMemo, useState } from "react";
import { Portal, SwipeableDrawerProps } from "@mui/material";
import MenuBarIcon from "../assets/icons/MenuBarIcon";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "../utils/hooks";
import { MotionBox } from "./commons";

const MENU_BTN_WIDTH = 59,
  MENU_BTN_HEIGHT = 32,
  MENU_BTN_TOP = (MENU_BTN_WIDTH - MENU_BTN_HEIGHT) / 2.0,
  MENU_BTN_LEFT = 12,
  MENU_BTN_Y_ORIGIN = MENU_BTN_TOP + MENU_BTN_HEIGHT / 2.0,
  MENU_BTN_X_ORIGIN = MENU_BTN_LEFT + MENU_BTN_WIDTH / 2.0;

const MotionMenuBarIcon = motion(MenuBarIcon);

type MenuDrawerProps = Pick<
  SwipeableDrawerProps,
  "open" | "onClose" | "onOpen"
>;
export default function MenuDrawer(): JSX.Element {
  const [open, setOpenMenu] = useState(false);

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
          }}
          onClick={doOpenMenu}
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
              }}
              // transition={{ delay: 0.5 }}
            >
              <MotionBox
                style={{
                  originX: 0.5,
                  originY: 0.5,
                }}
                sx={{
                  position: "fixed",
                  top: MENU_BTN_Y_ORIGIN,
                  left: MENU_BTN_X_ORIGIN,
                  bgcolor: "rgba(30,30,30,.85)",
                  width: "1px",
                  height: "1px",
                  borderRadius: "50%",
                }}
                initial={{ scale: 0 }}
                animate={{ scale: scaleFactor }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.35, ease: "circOut" }}
              />
              <MotionMenuBarIcon
                key={"menu-button"}
                sx={{
                  width: MENU_BTN_WIDTH,
                  height: MENU_BTN_HEIGHT,
                  position: "fixed",
                  top: MENU_BTN_TOP,
                  left: MENU_BTN_LEFT,
                }}
                onClick={doCloseMenu}
              />
            </MotionBox>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
