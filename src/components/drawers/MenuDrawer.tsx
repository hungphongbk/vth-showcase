import React, { useRef, useState } from "react";
import { Portal } from "@mui/material";
import MenuBarIcon from "../../assets/icons/MenuBarIcon";
import { AnimatePresence, motion } from "framer-motion";
import { useAuthInitialized, useOnClickOutside } from "../../utils/hooks";
import { MotionBox } from "../commons";
import MenuPanel from "./MenuPanel";

const MENU_BTN_WIDTH = 59,
  MENU_BTN_HEIGHT = 32;

const MotionMenuBarIcon = motion(MenuBarIcon);

export default function MenuDrawer(): JSX.Element {
  const [openMenu, setOpenMenu] = useState(false),
    { initialized } = useAuthInitialized();

  const doCloseMenu = () => setOpenMenu(false),
    doOpenMenu = () => setOpenMenu(true);

  const ref = useRef();
  useOnClickOutside(ref, doCloseMenu);

  return (
    <>
      {!openMenu && (
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
          {openMenu && (
            <MotionBox
              role={"presentation"}
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                bottom: 0,
                zIndex: 13,
                bgcolor: "rgba(0,0,0,.65)",
              }}
              transition={{ duration: 0.35, ease: "circOut" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MenuPanel ref={ref} onClose={doCloseMenu} />
            </MotionBox>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
