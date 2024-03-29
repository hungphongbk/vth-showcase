import { Box, NoSsr } from "@mui/material";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "./Link";
import { useRouter } from "next/router";
import { CartDrawer, MenuDrawer } from "./drawers";
import { useContext } from "react";
import { ShowcaseLayoutContext } from "../utils/hooks/useShowcaseLayout";

export default function Header(): JSX.Element | null {
  const router = useRouter();
  const currentPage = /^\/preview/.test(router.pathname) ? "preview" : "post";
  const { isTopBarHidden } = useContext(ShowcaseLayoutContext);
  return isTopBarHidden ? null : (
    <Box
      sx={{
        position: "fixed",
        display: "grid",
        width: "100%",
        height: (theme) => theme.variables.appBarHeight,
        top: 0,
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        background: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.11)",
        zIndex: currentPage === "preview" ? 1 : 12,
      }}
    >
      <Box sx={{ gridColumn: 1 }}>
        <Box
          sx={{
            height: "100%",
            px: 1.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <MenuDrawer />
        </Box>
      </Box>
      <Box
        sx={{
          gridColumn: 2,
          width: "28.8vw",
          height: (theme) => theme.variables.appBarHeight,
          display: "flex",
          alignItems: "center",
        }}
        component={Link}
        href={"/"}
      >
        <Image
          src={logo}
          alt={"vaithuhay showcase"}
          objectFit={"contain"}
          priority
        />
      </Box>
      <Box sx={{ gridColumn: 3, justifySelf: "end" }}>
        <NoSsr>
          <CartDrawer />
        </NoSsr>
      </Box>
    </Box>
  );
}
