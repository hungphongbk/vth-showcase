import React from "react";
import { DataItem } from "../assets/data";
import ProductItem from "./ProductItem";
import { ImageList, ImageListProps } from "@mui/material";
import { useRouter } from "next/router";

export default function ProductList(props: {
  posts: DataItem[];
  variant?: ImageListProps["variant"];
}): JSX.Element {
  const router = useRouter();
  return (
    <ImageList variant={props.variant ?? "masonry"} cols={2} gap={8}>
      {props.posts.map((item) => (
        <ProductItem
          key={item.id}
          item={item}
          onClick={() => router.push(`/preview/${item.id}`)}
        />
      ))}
    </ImageList>
  );
}
