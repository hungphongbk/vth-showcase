import dynamic from "next/dynamic";

export const MenuDrawer = dynamic(() => import("./MenuDrawer"), { ssr: false });

export const CartDrawer = dynamic(() => import("./CartDrawer"), { ssr: false });
