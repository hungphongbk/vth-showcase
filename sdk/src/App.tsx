import { useShowcasePortalQuery } from "../../src/types/graphql";
import { StyledSection, StyledTitle } from "./styled";
import { Typography } from "@mui/material";

export default function App() {
  const { data } = useShowcasePortalQuery();
  return (
    <StyledSection>
      <div className="container">
        <StyledTitle className="vth-section-title">
          <span>SHOWCASE</span>
        </StyledTitle>
        <div>
          {data?.showcases.edges.map(({ node }) => (
            <Typography key={node.slug} variant={"h6"}>
              {node.name}
            </Typography>
          ))}
        </div>
      </div>
    </StyledSection>
  );
}
