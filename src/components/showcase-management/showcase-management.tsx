import { Box, CardContent, CardHeader, Grid } from "@mui/material";
import { StyledCard } from "../commons";
import { useDraftShowcasesQuery } from "../../types/graphql";
import Item from "./item";
import { range } from "lodash";

type ShowcaseManagementProps = {};
export default function ShowcaseManagement(
  props: ShowcaseManagementProps
): JSX.Element {
  const { data, loading } = useDraftShowcasesQuery();
  return (
    <Box sx={{ p: 1 }}>
      <StyledCard>
        <CardHeader
          title={"BẢN NHÁP DỰ ÁN"}
          titleTypographyProps={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold",
          }}
        />
        <CardContent sx={{ p: 0 }}>
          <Grid container spacing={1}>
            {loading
              ? range(3).map((index) => (
                  <Grid key={index} item xs={6}>
                    <Item />
                  </Grid>
                ))
              : data!.showcases.edges.map((showcase) => (
                  <Grid key={showcase.node.slug} item xs={6}>
                    <Item item={showcase.node} />
                  </Grid>
                ))}
          </Grid>
        </CardContent>
      </StyledCard>
    </Box>
  );
}
