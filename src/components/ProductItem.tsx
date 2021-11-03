import { ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import { HTMLProps } from "react";
import { MotionTypo, ProductInfo } from "./commons";
import { DataItem } from "../assets/data";

const MotionImageListItem = motion(ImageListItem);

export default function ProductItem({
  item,
  onClick,
}: { item: DataItem } & HTMLProps<HTMLElement>) {
  return (
    <MotionImageListItem
      key={item.id}
      layoutId={item.id as unknown as string}
      onClick={onClick}
      sx={{ borderRadius: 8, overflow: "hidden", cursor: "pointer" }}
    >
      <img src={item.image} alt={item.title} />
      <ProductInfo>
        <MotionTypo variant="h6" layoutId={`${item.id}/title`}>
          {item.title}
        </MotionTypo>
      </ProductInfo>
    </MotionImageListItem>
  );
}
