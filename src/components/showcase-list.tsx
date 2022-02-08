import React, { createContext, forwardRef } from "react";
import ShowcaseItem from "./showcase-item";
import { ImageList, ImageListProps } from "@mui/material";
import { ShowcaseEdge } from "../types/graphql";

export type IdContextType = "main" | "sub";

export const LayoutIdContext = createContext<IdContextType>("main");

type ProductListProps = {
  posts: ShowcaseEdge[];
  variant?: ImageListProps["variant"];
  context?: IdContextType;
};

const ShowcaseList = forwardRef(function ShowcaseList(
  props: ProductListProps,
  ref: any
): JSX.Element {
  return (
    <LayoutIdContext.Provider value={props.context ?? "main"}>
      <ImageList
        ref={ref}
        variant={props.variant ?? "masonry"}
        cols={2}
        gap={8}
        component={"section"}
      >
        {props.posts.map((item) => (
          <ShowcaseItem
            key={item.node.slug}
            item={item.node}
            prefixRoute={"/preview"}
          />
        ))}
      </ImageList>
    </LayoutIdContext.Provider>
  );
});
export default ShowcaseList;
