import dynamic from "next/dynamic";

export const MenuDrawer = dynamic(() => import("./menu-drawer"), {
  ssr: false,
});

export const CartDrawer = dynamic(() => import("./cart-drawer"), {
  ssr: false,
});
