import {
  ShowcaseInvestorPackageDto,
  ShowcaseInvestorStatDto,
  useInvestmentPackagesQuery,
} from "../../types/graphql";
import { Box, Grid, Typography } from "@mui/material";

function PackageData({ item }: { item: ShowcaseInvestorPackageDto }) {
  return (
    <Box
      sx={{
        bgcolor: "#F3F3F3",
        borderRadius: "17px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "calc(100% - 16.5px)",
        mt: "16.5px",
      }}
    >
      <Box
        sx={{
          height: 33,
          bgcolor: "yellow.main",
          borderRadius: "16.5px",
          display: "flex",
          alignItems: "center",
          px: 2,
          fontWeight: 600,
          mt: "-16.5px",
        }}
      >
        {item.package.displayName}
      </Box>
      <Typography
        sx={{
          fontSize: 25,
          lineHeight: "30px",
          fontWeight: "bold",
          mt: "13px",
        }}
      >
        {item.package.fundedRate}% vốn
      </Typography>
      <Typography sx={{ fontSize: 15, lineHeight: "18px" }}>
        {item.fund}
      </Typography>
      <Box
        sx={{
          flex: 1,
          bgcolor: "white",
          m: "6px",
          mt: "7px",
          width: "calc(100% - 12px)",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 10, mt: 0.7 }}>
          Lợi nhuận dự kiến 1 năm
        </Typography>
        <Typography sx={{ fontSize: 15, fontWeight: 600, color: "green.main" }}>
          {item.firstYearBenefit}
        </Typography>
      </Box>
    </Box>
  );
}

type PackagesDataProps = {
  stat: Partial<ShowcaseInvestorStatDto>;
};
export default function PackagesData(props: PackagesDataProps): JSX.Element {
  const { data, loading } = useInvestmentPackagesQuery(),
    packages = props.stat.packages ?? [];
  return (
    <Box sx={{ overflowX: "scroll", height: "100%" }}>
      <Grid
        container
        spacing={1}
        sx={{
          width: `${(packages.length || 3) * 60}vw`,
          height: "100%",
        }}
      >
        {packages.map((item) => (
          <Grid item key={item.package.id} xs={4}>
            <PackageData item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
