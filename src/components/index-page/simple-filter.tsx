import { ShowcaseStatus } from "../../types/graphql";
import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Backdrop,
  Box,
  Popover,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import {
  usingShowcaseStatusColor,
  usingShowcaseStatusIcon,
  usingShowcaseStatusLabel,
} from "../../utils/colors";
import { sxFlexCenter } from "../../utils/predefinedSx";

const descriptions = {
  [ShowcaseStatus.Coming]:
    "Là dự án kinh doanh đã sẵn sàng ra mắt người dùng, tuy nhiên chúng tôi cần thời gian chuẩn bị một số khâu cuối cùng để đưa sản phẩm ra mắt chỉn chu nhất đến tay khách hàng.",
  [ShowcaseStatus.Showcase]:
    "Là dự án kinh doanh chúng tôi đang hoàn thiện quy trình sản xuất/nhập khẩu, sản phẩm chưa có ngày dự kiến ra mắt, tuy nhiên sẽ sớm & được cập nhật liên tục.",
  [ShowcaseStatus.Idea]:
    "Là ý tưởng kinh doanh mong muốn được quý khách hàng đánh giá tiền khả thi giúp chúng tôi mạnh dạn đầu tư sản xuất/nhập khẩu đưa sản phẩm đến tay người tiêu dùng sớm nhất.",
} as const;

type SimpleFilterProps = {
  filter: ShowcaseStatus | undefined;
  onFilterChange: (value: ShowcaseStatus | undefined) => void | Promise<void>;
};

const FilterTag = styled(Box)`
  height: 27px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 13.5px;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-transform: capitalize;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15); ;
`;

export default function SimpleFilter(props: SimpleFilterProps): JSX.Element {
  const [open, setOpen] = useState(false),
    anchorEl = useRef<Element | undefined>();

  useEffect(() => {
    if (typeof props.filter !== "undefined") {
      setTimeout(() => setOpen(true), 500);
    }
  }, [props.filter]);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Stack direction={"row"} gap={1} alignItems={"center"} ref={anchorEl}>
        {[
          ShowcaseStatus.Coming,
          ShowcaseStatus.Showcase,
          ShowcaseStatus.Idea,
        ].map((status) => (
          <FilterTag
            key={status as unknown as string}
            sx={
              props.filter === status
                ? { bgcolor: usingShowcaseStatusColor(status), color: "black" }
                : { bgcolor: "#d0d0d0", color: "white" }
            }
            onClick={() =>
              props.onFilterChange(props.filter === status ? undefined : status)
            }
          >
            {usingShowcaseStatusLabel(status)}
          </FilterTag>
        ))}
      </Stack>
      <Backdrop
        sx={{ zIndex: (theme: Theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)}
      >
        <Popover
          open={open}
          anchorEl={anchorEl.current}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          PaperProps={{
            sx: {
              mt: 2,
              ml: 1,
              border: 2,
              borderColor: usingShowcaseStatusColor(
                props.filter ?? ShowcaseStatus.Coming
              ),
              borderRadius: "11px",
              overflowX: "visible",
              overflowY: "visible",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 34,
              height: 34,
              borderRadius: "50%",
              mt: "-17px",
              ml: "-17px",
              bgcolor: usingShowcaseStatusColor(
                props.filter ?? ShowcaseStatus.Coming
              ),
              ...sxFlexCenter,
            }}
          >
            {usingShowcaseStatusIcon(props.filter ?? ShowcaseStatus.Coming, {
              color: "white",
            })}
          </Box>
          <Typography sx={{ p: 2, pl: 2.5 }}>
            {descriptions[props.filter ?? ShowcaseStatus.Coming]}
          </Typography>
        </Popover>
      </Backdrop>
    </>
  );
}
