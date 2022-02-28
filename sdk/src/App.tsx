import { useShowcasePortalQuery } from "../../src/types/graphql";
import ShowcasePortalLogo from "./assets/ShowcasePortalLogo";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import bg from "./assets/bg.webp";
import {
  Box,
  CssBaseline,
  GlobalStyles,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  createTheme,
  styled,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import theme from "../../src/theme";
import NewPopup from "./components/new-popup";
import { DeepPartial } from "redux";
import ShowcaseFeaturedList from "../../src/components/showcase-featured-list";

const portalTheme = createTheme(theme, {
  typography: {
    fontFamily: "Montserrat, Arial",
  },
} as DeepPartial<ThemeOptions>);
const Title = styled(Typography)`
  &.MuiTypography-root {
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 139.4%;
    color: white;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;
const globalStyles = (
  <GlobalStyles
    styles={{
      "#showcase-portal": {
        position: "relative",
        zIndex: 1,
      },
      "#showcase-portal+section": {
        zIndex: 0,
      },
    }}
  />
);

export default function App() {
  const { data } = useShowcasePortalQuery();
  const isMobile = useMediaQuery("(max-width: 992px)");
  if (!isMobile) return null;
  if (Math.random() > 0.2) return null;
  return (
    <ThemeProvider theme={portalTheme}>
      <CssBaseline />
      {globalStyles}
      <SnackbarProvider maxSnack={3}>
        <AspectRatio ratio={"752/473"} sx={{ mb: -1, overflowX: "hidden" }}>
          <img
            // @ts-ignore
            src={bg}
            style={{
              position: "absolute",
              top: 26,
              left: 0,
              right: 0,
              bottom: 0,
              objectFit: "contain",
            }}
          />
          <Box sx={{ p: 1, width: "100%" }}>
            <Box sx={{ display: "flex" }}>
              <ShowcasePortalLogo />
              <NewPopup />
            </Box>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Title>DỰ ÁN CHUẨN BỊ "RỜI BỆ PHÓNG"</Title>
            {data && (
              <ShowcaseFeaturedList
                items={data.showcases.edges.map(({ node }) => node)}
                hasSeeMore
                inPortal
              />
            )}
          </Box>
        </AspectRatio>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
