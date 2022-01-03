import { useShowcasePortalQuery } from "../../src/types/graphql";
import { StyledSection, StyledTitle } from "./styled";
import ShowcaseItem from "./ShowcaseItem";
import SlickSlider from "../../src/components/slick-slider";

export default function App() {
  const { data } = useShowcasePortalQuery();
  return (
    <StyledSection>
      <StyledTitle className="vth-section-title">
        <span>SHOWCASE</span>
      </StyledTitle>
      <SlickSlider>
        {data?.showcases.edges.map(({ node }) => (
          <ShowcaseItem key={node.id} showcase={node} />
        ))}
      </SlickSlider>
    </StyledSection>
  );
}
