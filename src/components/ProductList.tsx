import React, { createContext } from "react";
import { DataItem } from "../assets/data";
import ProductItem from "./ProductItem";
import { ImageList, ImageListProps } from "@mui/material";
import { useRouter } from "next/router";

export type IdContextType = "main" | "sub";

export const LayoutIdContext = createContext<IdContextType>("main");

export default function ProductList(props: {
  posts: DataItem[];
  variant?: ImageListProps["variant"];
  context?: IdContextType;
}): JSX.Element {
  const router = useRouter();
  return (
    <LayoutIdContext.Provider value={props.context ?? "main"}>
      <ImageList variant={props.variant ?? "masonry"} cols={2} gap={8}>
        {props.posts.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            onClick={() => router.push(`/preview/${item.id}`)}
          />
        ))}
      </ImageList>
    </LayoutIdContext.Provider>
  );
}
