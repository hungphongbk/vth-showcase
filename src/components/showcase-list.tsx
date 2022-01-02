import React, { createContext, memo } from "react";
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

const compare = (prev: ProductListProps, next: ProductListProps) => {
  if (prev.posts.length !== next.posts.length) return false;
  for (let i = 0; i < prev.posts.length; i++)
    if (prev.posts[i].node.id !== next.posts[i].node.id) return false;
  return true;
};

const ShowcaseList = memo(function ShowcaseList(
  props: ProductListProps
): JSX.Element {
  const router = useRouter();
  return (
    <LayoutIdContext.Provider value={props.context ?? "main"}>
      <ImageList
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
            onClick={() => router.push(`/preview/${item.node.slug}`)}
          />
        ))}
      </ImageList>
    </LayoutIdContext.Provider>
  );
},
compare);
export default ShowcaseList;
