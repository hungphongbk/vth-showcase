import { Box, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { sxFlexCenter, sxFullSize } from "../../utils/predefinedSx";
import { LoadingButton } from "@mui/lab";

const SaveBarBox = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  > div {
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 8px;
    box-shadow: 0px -4px 30px rgba(0, 0, 0, 0.15);
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    position: relative;
    &:before {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 86px;
      width: 86px;
      border-radius: 50%;
      display: block;
      content: "";
      background-color: white;
      z-index: -1;
      box-shadow: 0px 0px 30px rgb(0 0 0 / 11%);
    }
  }
`;
const SaveButtonBox = styled(Box)`
  height: 86px;
  margin-top: -34px;
  width: 86px;
  border-radius: 50%;
  background-color: white;
  padding: 8px;
`;

export default function CreationBottomBar(props: unknown): JSX.Element {
  return (
    <SaveBarBox>
      <div>
        <Box></Box>
        <SaveButtonBox>
          <LoadingButton
            variant={"contained"}
            loading={false}
            color={"primary"}
            sx={{
              borderRadius: "50%",
              ...sxFullSize,
              bgcolor: "yellow.main",
              ...sxFlexCenter,
              boxShadow: "inset 0px -4px 6px rgba(0, 0, 0, 0.1)",
            }}
            loadingIndicator={<CircularProgress color="inherit" size={24} />}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 15 }}>LƯU</Typography>
          </LoadingButton>
        </SaveButtonBox>
        <Box></Box>
      </div>
    </SaveBarBox>
  );
}
