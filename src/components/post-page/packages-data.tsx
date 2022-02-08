import {
  ShowcaseInvestorPackageDto,
  ShowcaseInvestorStatDto,
} from "../../types/graphql";
import { Box, Grid, Stack, styled, Typography } from "@mui/material";

const PercentageBadge = styled(Typography)`
  background: #0fd07f;
  border-radius: 9px;
  font-weight: bold;
  font-size: 13px;
  line-height: 127.9%;
  height: 18px;
  color: white;
  padding-left: 3px;
  padding-right: 3px;
`;
const Line = styled("div")`
  border: 1px dashed #f3f3f3;
  height: 0;
  width: calc(100% - 16px);
  margin-top: 4px;
  margin-bottom: 4px;
`;
function CareButton(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={102}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={102} height={26} rx={13} fill="red" />
      <path
        d="M28.193 18.91a3 3 0 01-1.066.806 3.124 3.124 0 01-1.313.273 3.502 3.502 0 01-1.716-.429c-.52-.277-1.114-.763-1.781-1.456a4.983 4.983 0 01-2.262-.728 4.518 4.518 0 01-1.56-1.651 4.68 4.68 0 01-.56-2.275c0-.884.213-1.681.638-2.392a4.417 4.417 0 011.755-1.677c.745-.407 1.581-.611 2.509-.611.927 0 1.763.204 2.509.611.745.399 1.33.953 1.755 1.664.424.71.637 1.512.637 2.405 0 .72-.143 1.387-.43 2.002a4.584 4.584 0 01-1.195 1.56 4.783 4.783 0 01-1.781.923c.251.269.498.464.74.585.243.121.503.182.78.182.599 0 1.119-.243 1.56-.728l.78.936zm-8.554-5.46c0 .607.138 1.157.416 1.651a3.02 3.02 0 001.144 1.144 3.324 3.324 0 001.638.403c.606 0 1.152-.134 1.638-.403a3.022 3.022 0 001.144-1.144 3.314 3.314 0 00.416-1.651c0-.607-.139-1.153-.416-1.638a2.906 2.906 0 00-1.144-1.144 3.243 3.243 0 00-1.638-.416c-.607 0-1.153.139-1.638.416-.486.269-.867.65-1.144 1.144a3.241 3.241 0 00-.416 1.638zm16.455-2.392V18h-1.547v-.884c-.26.312-.585.555-.975.728-.39.165-.81.247-1.26.247-.928 0-1.66-.256-2.198-.767-.529-.52-.793-1.287-.793-2.301v-3.965h1.625v3.744c0 .624.139 1.092.416 1.404.286.303.69.455 1.21.455.58 0 1.04-.178 1.377-.533.347-.364.52-.884.52-1.56v-3.51h1.625zm4.78-.078c1.022 0 1.802.247 2.34.741.546.485.819 1.222.819 2.21V18h-1.534v-.845c-.2.303-.486.537-.858.702-.364.156-.806.234-1.326.234s-.975-.087-1.365-.26a2.22 2.22 0 01-.91-.741 1.94 1.94 0 01-.312-1.079c0-.624.23-1.122.689-1.495.468-.381 1.2-.572 2.197-.572h1.794v-.104c0-.485-.148-.858-.442-1.118-.286-.26-.715-.39-1.287-.39-.39 0-.776.06-1.157.182-.373.121-.69.29-.95.507l-.636-1.183c.364-.277.801-.49 1.313-.637a5.843 5.843 0 011.625-.221zm-.221 5.928c.407 0 .767-.091 1.079-.273.32-.19.546-.46.676-.806v-.806H40.73c-.936 0-1.404.308-1.404.923 0 .295.117.529.35.702.235.173.56.26.976.26zm9.404-5.928c.876 0 1.578.256 2.106.767.529.511.793 1.27.793 2.275V18h-1.625v-3.77c0-.607-.143-1.062-.429-1.365-.286-.312-.693-.468-1.222-.468-.598 0-1.07.182-1.417.546-.346.355-.52.871-.52 1.547V18h-1.625v-6.942h1.547v.897a2.54 2.54 0 011.014-.728 3.649 3.649 0 011.378-.247zm12.726 6.643c-.19.156-.424.273-.702.351a3.063 3.063 0 01-.858.117c-.762 0-1.352-.2-1.768-.598-.416-.399-.624-.98-.624-1.742V12.41h-1.144v-1.3h1.144V9.524h1.625v1.586h1.86v1.3h-1.86v3.302c0 .338.083.598.247.78.165.173.403.26.715.26.364 0 .668-.095.91-.286l.455 1.157zm3.99-6.643c1.022 0 1.802.247 2.34.741.545.485.818 1.222.818 2.21V18h-1.534v-.845c-.2.303-.485.537-.858.702-.364.156-.806.234-1.326.234s-.975-.087-1.365-.26a2.22 2.22 0 01-.91-.741 1.94 1.94 0 01-.312-1.079c0-.624.23-1.122.69-1.495.467-.381 1.2-.572 2.196-.572h1.794v-.104c0-.485-.147-.858-.442-1.118-.286-.26-.715-.39-1.287-.39-.39 0-.775.06-1.157.182-.373.121-.689.29-.949.507l-.637-1.183c.364-.277.802-.49 1.313-.637a5.843 5.843 0 011.625-.221zm-.222 5.928c.407 0 .767-.091 1.08-.273.32-.19.545-.46.675-.806v-.806H66.63c-.936 0-1.404.308-1.404.923 0 .295.117.529.351.702.234.173.56.26.975.26zm1.508-6.799l-1.144-.962-1.144.962h-1.339l1.742-1.781h1.482l1.742 1.781H68.06zm12.72.871c.875 0 1.568.256 2.08.767.511.503.767 1.261.767 2.275V18H82v-3.77c0-.607-.135-1.062-.403-1.365-.269-.312-.655-.468-1.157-.468-.546 0-.984.182-1.313.546-.33.355-.494.867-.494 1.534V18h-1.625v-3.77c0-.607-.135-1.062-.403-1.365-.269-.312-.655-.468-1.157-.468-.555 0-.997.178-1.326.533-.321.355-.481.871-.481 1.547V18h-1.625v-6.942h1.547v.884c.26-.312.585-.55.975-.715a3.31 3.31 0 011.3-.247c.52 0 .979.1 1.378.299.407.19.728.477.962.858a2.836 2.836 0 011.105-.845c.45-.208.949-.312 1.495-.312z"
        fill="#fff"
      />
    </svg>
  );
}

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
          pb: 1,
        }}
      >
        <Typography sx={{ fontSize: 10, mt: 0.7 }}>
          Lợi nhuận dự kiến 1 năm
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={0.5}
          sx={{ mt: 0.7 }}
        >
          <Typography
            sx={{ fontSize: 15, fontWeight: 600, color: "green.main" }}
          >
            {item.firstYearBenefit}
          </Typography>
          <PercentageBadge>{item.package.benefitRate}%</PercentageBadge>
        </Stack>
        <Line />
        <Typography sx={{ fontSize: 10 }}>
          Cơ hội quy đổi sở hữu
          <br />
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 600,
              color: "green.main",
              display: "inline-block",
            }}
          >
            31%
          </Typography>{" "}
          dự án sau 1 năm
        </Typography>
        <Line />
        <Typography sx={{ fontSize: 10, mb: 0.5 }}>
          Số lượng
          <br />
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            {item.package.count} slot
          </Typography>
        </Typography>
        <CareButton />
      </Box>
    </Box>
  );
}

type PackagesDataProps = {
  stat: Partial<ShowcaseInvestorStatDto>;
};
export default function PackagesData(props: PackagesDataProps): JSX.Element {
  const packages = props.stat.packages ?? [];
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
