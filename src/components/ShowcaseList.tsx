import React, { createContext } from "react";
import ShowcaseItem from "./ShowcaseItem";
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
export default function ShowcaseList(props: ProductListProps): JSX.Element {
  const router = useRouter();
  return (
    <LayoutIdContext.Provider value={props.context ?? "main"}>
      <ImageList variant={props.variant ?? "masonry"} cols={2} gap={8}>
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
}
