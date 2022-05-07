import { Control, FieldPath } from "react-hook-form";
import { ShowcaseCreateInputDto } from "../../types/graphql";
import { Box } from "@mui/system";
import { ReactElement } from "react";
import { Tooltip, Typography } from "@mui/material";

type PLControl = Control<ShowcaseCreateInputDto>;

function PLInputRow({
  control,
  field,
  label,
  tooltip,
}: {
  control: PLControl;
  field: FieldPath<ShowcaseCreateInputDto>;
  label: string;
  tooltip: string | ReactElement;
}): JSX.Element {
  return (
    <Box className="grid grid-cols-[1fr_auto] gap-2">
      <Typography className="font-bold">
        {label}{" "}
        <Tooltip title={tooltip}>
          <span className="inline-block rounded-full h-4 w-4 bg-black text-white text-center">
            ?
          </span>
        </Tooltip>
      </Typography>
    </Box>
  );
}

type PLInputProps = {
  control: PLControl;
};
export default function PLInput(props: PLInputProps): JSX.Element {
  return (
    <>
      <PLInputRow
        control={props.control}
        field={"inventory.capitalizationRate"}
        label={"Tỉ lệ giá vốn sản phẩm/giá bán"}
        tooltip={
          "Giá cogs nghĩa là giá đã bao gồm chi phí vận chuyển, nguyên liệu, giá nhập, giá gia công, bao bì đóng gói, tem nhãn giao đến kho Vaithuhay."
        }
      />
    </>
  );
}
