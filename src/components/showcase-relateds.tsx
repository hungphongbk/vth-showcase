import { useShowcaseRelatedsQuery } from "../types/graphql";
import { Box, Fade, Typography } from "@mui/material";
import ShowcaseList from "./showcase-list";
import { SwitchTransition } from "react-transition-group";

type ShowcaseRelatedsProps = {
  slug: string;
};
export default function ShowcaseRelateds({
  slug,
}: ShowcaseRelatedsProps): JSX.Element {
  const { data: relateds, networkStatus } = useShowcaseRelatedsQuery({
    variables: { slug },
    ssr: false,
    notifyOnNetworkStatusChange: true,
  });
  return (
    <Box
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <Typography
        component={"h3"}
        variant={"h5"}
        sx={{ my: 2, textAlign: "center", fontWeight: 700, fontSize: 20 }}
      >
        DỰ ÁN LIÊN QUAN
      </Typography>
      <SwitchTransition>
        <Fade key={networkStatus}>
          <ShowcaseList
            //@ts-ignore
            posts={relateds?.showcases?.edges ?? []}
          />
        </Fade>
      </SwitchTransition>
    </Box>
  );
}
