import { MediaDto, Showcase } from "../types/graphql";
import { AspectRatio, FnsDate } from "@hungphongbk/vth-sdk";
import { Box, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
import { ProductInfoSecond } from "./commons";
import { VthCountdown } from "./index";
import React, { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { useRouter } from "next/router";

type ShowcaseItem = Pick<Showcase, "name" | "slug" | "expectedSaleAt"> & {
  image: Pick<MediaDto, "path" | "preloadUrl">;
};
type ShowcaseFeaturedItemProps<T> = { item: T };
export default function ShowcaseFeaturedItem<
  T extends ShowcaseItem = ShowcaseItem
>({ item: node }: ShowcaseFeaturedItemProps<T>): JSX.Element {
  const router = useRouter();
  const itemRef = useRef<HTMLLIElement>(null),
    prefetched = useRef<Promise<any>>();
  const { inViewport } = useInViewport(itemRef);

  useEffect(() => {
    if (inViewport && !prefetched.current) {
      prefetched.current = router.prefetch(`/preview/${node.slug}`);
    }
  }, [inViewport, node.slug, router]);

  return (
    <ImageListItem
      component={"article"}
      ref={itemRef}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        mb: 2,
        boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.1)",
      }}
      onClick={() => router.push(`/preview/${node.slug}`)}
    >
      <AspectRatio>
        <Box sx={{ zIndex: -1 }}>
          <Image
            src={node.image.path}
            alt={node.name}
            layout={"fill"}
            objectFit={"cover"}
            sizes={"50vw"}
            placeholder={"blur"}
            blurDataURL={node.image.preloadUrl}
            priority={true}
          />
        </Box>
      </AspectRatio>
      <ProductInfoSecond>
        <Box
          sx={{
            height: 36,
            width: "100%",
            borderRadius: 18,
            bgcolor: "yellow.main",
            border: "3px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "-26.5px",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontWeight: 600,
              fontSize: 10,
              textAlign: "center",
              lineHeight: "11.74px",
            }}
            component={"h2"}
          >
            {node.name}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 10, my: 0.5 }}>
          Dự kiến ra mắt:{" "}
          <strong>
            <FnsDate
              //TODO remove new Date
              value={node.expectedSaleAt ?? new Date()}
              format={"dd/MM/yyyy"}
            />
          </strong>
        </Typography>
        <Box sx={{ width: "100%", my: 0.5 }}>
          <VthCountdown expectedSaleAt={node.expectedSaleAt ?? new Date()} />
        </Box>
      </ProductInfoSecond>
    </ImageListItem>
  );
}
