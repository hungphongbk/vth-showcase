import { Box, Fade, Typography } from "@mui/material";
import ShowcaseList from "./showcase-list";
import { SwitchTransition } from "react-transition-group";
import { useShowcaseRelatedsLazyQuery } from "../types/graphql";
import { useEffect } from "react";

type ShowcaseRelatedsProps = {
  slug: string;
};
export default function ShowcaseRelateds({
  slug,
}: ShowcaseRelatedsProps): JSX.Element {
  const [fetchRelateds, { data: relateds, networkStatus }] =
    useShowcaseRelatedsLazyQuery({
      variables: { slug },
      notifyOnNetworkStatusChange: true,
    });

  useEffect(() => {
    setTimeout(() => fetchRelateds(), 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
