import { Control, FieldPath } from "react-hook-form";
import { ShowcaseCreateInputDto } from "../../types/graphql";
import { Box } from "@mui/system";
import { ReactElement } from "react";
import { Stack, Tooltip, Typography } from "@mui/material";
import styles from "./p-l-input.module.css";
import NumericInput, { NumericInputProps } from "../numeric-input";

type PLControl = Control<ShowcaseCreateInputDto>;

function PLInputRow({
  control,
  field,
  label,
  tooltip,
  numOfMask = 2,
  suffix,
}: {
  control: PLControl;
  field: FieldPath<ShowcaseCreateInputDto>;
  label: string;
  tooltip: string | ReactElement;
} & Pick<NumericInputProps, "numOfMask" | "suffix">): JSX.Element {
  return (
    <Box className={styles.PLInputRow}>
      <Typography className="font-bold">
        {label}{" "}
        <Tooltip title={tooltip}>
          <span className={styles.QuestionMark}>?</span>
        </Tooltip>
      </Typography>
      <NumericInput
        value={0}
        onChange={() => {}}
        numOfMask={numOfMask}
        suffix={suffix}
      />
    </Box>
  );
}

type PLInputProps = {
  control: PLControl;
};
export default function PLInput(props: PLInputProps): JSX.Element {
  return (
    <Stack gap={2}>
      <PLInputRow
        control={props.control}
        field={"inventory.capitalizationRate"}
        label={"Tỉ lệ giá vốn sản phẩm/giá bán"}
        tooltip={
          "Giá cogs nghĩa là giá đã bao gồm chi phí vận chuyển, nguyên liệu, giá nhập, giá gia công, bao bì đóng gói, tem nhãn giao đến kho Vaithuhay."
        }
        suffix={"%"}
      />
      <PLInputRow
        control={props.control}
        field={"inventory.adCostRate"}
        label={"Tỉ lệ chi phí quảng cáo trung bình (Gồm giảm giá)"}
        tooltip={
          "Chi phí chạy quảng cáo, thương hiệu, booking báo chí, KOLs, chiến lược quảng cáo, đầu tư ban đầu (website, sàn, nhận diện thương hiệu....) "
        }
        suffix={"%"}
      />
      <PLInputRow
        control={props.control}
        field={"inventory.operatingCostRate"}
        label={"Tỉ lệ chi phí vận hành"}
        tooltip={
          "Là chi phí nhân sự bán hàng, đóng gói hàng hóa, nhân viên quảng cáo, nhân sự quản lý được Vaithuhay chi trả, kế toán hạch toán dự án...."
        }
        suffix={"%"}
      />
    </Stack>
  );
}
