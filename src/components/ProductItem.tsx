import { Divider, ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import { HTMLProps } from "react";
import { MotionBox, MotionTypo, ProductInfo } from "./commons";
import { DataItem } from "../assets/data";
import UserIcon from "../assets/icons/UserIcon";
import StatusBadge from "./StatusBadge";

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
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        mb: "0 !important",
      }}
    >
      <img src={item.image} alt={item.title} />
      <ProductInfo>
        <MotionTypo
          variant="h6"
          layoutId={`${item.id}/title`}
          sx={{ textTransform: "uppercase", fontWeight: 600 }}
        >
          {item.title}
        </MotionTypo>
        <StatusBadge status={item.status} />
        <Divider sx={{ mt: 0.5, mb: 0.5 }} />
        <MotionBox
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridGap: 1,
            "& .MuiTypography-root": { lineHeight: 1.17 },
          }}
        >
          <UserIcon sx={{ width: 16, height: 16, mr: 1 }} />
          <MotionTypo>{item.author}</MotionTypo>
        </MotionBox>
      </ProductInfo>
    </MotionImageListItem>
  );
}
