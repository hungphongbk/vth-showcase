import dynamic from "next/dynamic";

export const AuthLoginHandler = dynamic(() => import("./AuthLoginHandler"), {
  ssr: false,
});
