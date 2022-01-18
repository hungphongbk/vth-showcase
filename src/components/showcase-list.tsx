import React, { createContext, forwardRef } from "react";
import ShowcaseItem from "./showcase-item";
import { ImageList, ImageListProps } from "@mui/material";
import { useRouter } from "next/router";
import { ShowcaseEdge } from "../types/graphql";

export type IdContextType = "main" | "sub";

export const LayoutIdContext = createContext<IdContextType>("main");

type ProductListProps = {
  posts: ShowcaseEdge[];
  variant?: ImageListProps["variant"];
  context?: IdContextType;
  onLoadMore?: () => void | Promise<void>;
};

const ShowcaseList = forwardRef(function ShowcaseList(
  props: ProductListProps,
  ref: any
): JSX.Element {
  const router = useRouter();
  return (
    <LayoutIdContext.Provider value={props.context ?? "main"}>
      <ImageList
        ref={ref}
        variant={props.variant ?? "masonry"}
        cols={2}
        gap={8}
        component={"section"}
      >
        {props.posts.map((item, index) => (
          <ShowcaseItem
            key={item.node.slug}
            item={item.node}
            loadMorePoint={index === props.posts.length - 5}
            onLoadMore={props.onLoadMore}
            prefixRoute={"/preview"}
          />
        ))}
      </ImageList>
    </LayoutIdContext.Provider>
  );
});
export default ShowcaseList;
