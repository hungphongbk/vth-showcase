import { useShowcasePortalQuery } from "../../src/types/graphql";
import ShowcaseItem from "./ShowcaseItem";
import SlickSlider from "../../src/components/slick-slider";
import ShowcasePortalLogo from "./assets/ShowcasePortalLogo";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import bg from "./assets/bg.webp";
import { Box, styled, Typography } from "@mui/material";

const Title = styled(Typography)`
  &.MuiTypography-root {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 139.4%;
    color: white;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export default function App() {
  const { data } = useShowcasePortalQuery();
  return (
    <AspectRatio ratio={"752/473"} sx={{ mb: -1, overflow: "hidden" }}>
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
      <Box sx={{ m: 1, width: "100%" }}>
        <ShowcasePortalLogo />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Title>DỰ ÁN CHUẨN BỊ "RỜI BỆ PHÓNG"</Title>
        <SlickSlider>
          {data?.showcases.edges.map(({ node }) => (
            <ShowcaseItem key={node.id} showcase={node} />
          ))}
        </SlickSlider>
      </Box>
    </AspectRatio>
  );
}
