import ShowcaseFeaturedItem, {
  ShowcaseItemBase,
} from "./showcase-featured-item";
import SlickSlider from "./slick-slider";
import { SxProps } from "@mui/system";

type ShowcaseFeaturedListProps<T extends ShowcaseItemBase = ShowcaseItemBase> =
  {
    items: T[];
    hasSeeMore?: boolean;
    sx?: SxProps;
  };
export default function ShowcaseFeaturedList<
  T extends ShowcaseItemBase = ShowcaseItemBase
>({ items, hasSeeMore, sx }: ShowcaseFeaturedListProps<T>): JSX.Element {
  return (
    <SlickSlider slidesToShow={1.17} infinite={false} sx={sx}>
      {items.map((node) => (
        <ShowcaseFeaturedItem key={node.id} showcase={node} />
      ))}
      {hasSeeMore && (
        <ShowcaseFeaturedItem
          showcase={items.slice(-1)[0]!}
          seeMoreUi
          key={"__see-more"}
        />
      )}
    </SlickSlider>
  );
}
