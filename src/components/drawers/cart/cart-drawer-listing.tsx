import { Divider, Grid, Stack, Typography } from "@mui/material";
import React, { ComponentType, useEffect } from "react";
import { useAuthInitialized } from "../../../utils/hooks";
import {
  PreorderCartQuery,
  usePreorderCartLazyQuery,
} from "../../../types/graphql";
import { AspectRatio } from "@hungphongbk/vth-sdk";
import { sxFullSize } from "../../../utils/predefinedSx";
import StatusBadge from "../../StatusBadge";
import { vndCurrency } from "../../../utils/string";

type CartDrawerListingProps = {
  preorders: PreorderCartQuery;
};
const withCartDrawerListing = (
  Component: ComponentType<CartDrawerListingProps>
) => {
  function WithCartDrawerListing(props: unknown) {
    const { isLoggedIn } = useAuthInitialized(),
      [fetchCart, { data }] = usePreorderCartLazyQuery();

    useEffect(() => {
      if (isLoggedIn) {
        // noinspection JSIgnoredPromiseFromCall
        fetchCart();
      }
    }, [isLoggedIn, fetchCart]);

    if (!isLoggedIn || !data) return null;

    return <Component preorders={data!} />;
  }

  return WithCartDrawerListing;
};

const CartDrawerListing = withCartDrawerListing(function CartDrawerListing({
  preorders,
}): JSX.Element {
  return (
    <Stack direction={"column"} alignItems={"stretch"} gap={1}>
      {preorders.preorders.edges.map(({ node: { showcase } }, index) => (
        <Grid key={showcase.slug} container spacing={2}>
          <Grid item xs={4}>
            <AspectRatio
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                "& img": { ...sxFullSize, objectFit: "cover" },
              }}
            >
              <img src={showcase.image.path} alt={showcase.slug} />
            </AspectRatio>
          </Grid>
          <Grid item xs={8}>
            <Stack direction={"column"} gap={0.5} alignItems={"start"}>
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                {showcase.name}
              </Typography>
              <StatusBadge status={showcase.status} outlined />
              <Typography sx={{ fontWeight: 13 }}>
                Giá dự kiến:{" "}
                <strong>
                  {vndCurrency(showcase.expectedSalePrice!.regular)}
                </strong>
              </Typography>
              <Typography sx={{ fontWeight: 13 }}>
                Giá tiên phong:{" "}
                <strong>
                  {vndCurrency(showcase.expectedSalePrice!.pioneer)}
                </strong>
              </Typography>
            </Stack>
          </Grid>
          {index < preorders.preorders.edges.length - 1 && (
            <Grid item xs={12}>
              <Divider />
            </Grid>
          )}
        </Grid>
      ))}
    </Stack>
  );
});

export default CartDrawerListing;
