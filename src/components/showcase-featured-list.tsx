import ShowcaseFeaturedItem, {
  ShowcaseItemBase,
} from "./showcase-featured-item";
import SlickSlider from "./slick-slider";
import { SxProps } from "@mui/system";

type ShowcaseFeaturedListProps<T extends ShowcaseItemBase = ShowcaseItemBase> =
  {
    items: T[];
    hasSeeMore?: boolean;
    inPortal?: boolean;
    sx?: SxProps;
  };
export default function ShowcaseFeaturedList<
  T extends ShowcaseItemBase = ShowcaseItemBase
>({
  items,
  hasSeeMore,
  sx,
  inPortal,
}: ShowcaseFeaturedListProps<T>): JSX.Element {
  return (
    <SlickSlider slidesToShow={1.17} infinite={false} sx={sx}>
      {items.map((node) => (
        <ShowcaseFeaturedItem
          inPortal={inPortal}
          key={node.id}
          showcase={node}
        />
      ))}
      {hasSeeMore && (
        <ShowcaseFeaturedItem
          showcase={items.slice(-1)[0]!}
          inPortal={inPortal}
          seeMoreUi
          key={"__see-more"}
        />
      )}
    </SlickSlider>
  );
}
