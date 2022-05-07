import { Control, FieldPath } from "react-hook-form";
import { ShowcaseCreateInputDto } from "../../types/graphql";
import { Box } from "@mui/system";
import { ReactElement } from "react";
import { Tooltip, Typography } from "@mui/material";
import styles from "./p-l-input.module.css";
import NumericInput from "../numeric-input";

type PLControl = Control<ShowcaseCreateInputDto>;

function PLInputRow({
  control,
  field,
  label,
  tooltip,
  numOfMask = 2,
}: {
  control: PLControl;
  field: FieldPath<ShowcaseCreateInputDto>;
  label: string;
  tooltip: string | ReactElement;
  numOfMask?: number;
}): JSX.Element {
  return (
    <Box className={styles.PLInputRow}>
      <Typography className="font-bold">
        {label}{" "}
        <Tooltip title={tooltip}>
          <span className={styles.QuestionMark}>?</span>
        </Tooltip>
      </Typography>
      <NumericInput value={0} onChange={() => {}} numOfMask={numOfMask} />
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
