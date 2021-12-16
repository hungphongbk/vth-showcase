import { Showcase } from "../../types/graphql";
import { Box, Skeleton, styled, Typography } from "@mui/material";
import ModifyShowcaseIconButton from "./ModifyShowcaseIconButton";
import Image from "next/image";
import { DeepPartial } from "redux";

const Wrapper = styled(Box)`
  background: #f3f3f3;
  border-radius: 10px;
  overflow: hidden;
  padding: 13px;
  height: 276px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto;
  grid-row-gap: 6px;
`;

type ItemProps<T = DeepPartial<Showcase>> = {
  item?: T;
};
export default function Item({ item }: ItemProps): JSX.Element {
  if (!item)
    return (
      <Wrapper>
        <Box />
        <Skeleton variant="text" />
        <ModifyShowcaseIconButton sx={{ justifySelf: "center" }} />
      </Wrapper>
    );
  return (
    <Wrapper>
      <Box sx={{ position: "relative", mt: "-13px", ml: "-13px", mr: "-13px" }}>
        <Image src={item.image!.path!} layout={"fill"} objectFit={"cover"} />
      </Box>
      <Typography sx={{ fontSize: 10, justifySelf: "center" }}>
        Ngày cập nhật: 24.10.2021
      </Typography>
      <ModifyShowcaseIconButton sx={{ justifySelf: "center" }} />
    </Wrapper>
  );
}
