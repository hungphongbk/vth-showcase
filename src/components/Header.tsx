import { Box, NoSsr } from "@mui/material";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "./Link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const MenuDrawer = dynamic(() => import("./MenuDrawer"), { ssr: false });

export default function Header(): JSX.Element {
  const router = useRouter();
  const currentPage = /^\/preview/.test(router.pathname) ? "preview" : "post";

  return (
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
          <NoSsr>
            <MenuDrawer />
          </NoSsr>
        </Box>
      </Box>
      <Box
        sx={{
          gridColumn: 2,
          width: "28.8vw",
          height: (theme) => theme.variables.appBarHeight,
        }}
        component={Link}
        href={"/"}
      >
        <Image src={logo} alt={"logo"} objectFit={"contain"} />
      </Box>
      <Box sx={{ gridColumn: 3 }}></Box>
    </Box>
  );
}
