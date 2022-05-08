import { Control, FieldPath } from "react-hook-form";
import { ShowcaseCreateInputDto } from "../../types/graphql";
import { Box } from "@mui/system";
import { ReactElement } from "react";
import { Stack, Tooltip, Typography } from "@mui/material";
import styles from "./p-l-input.module.css";
import NumericInput, { NumericInputProps } from "../numeric-input";
import { CollapseCardHeader } from "../collapse-card";

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
    <>
      <Stack className="divide-y divide-slate-400 divide-solid">
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
        <PLInputRow
          control={props.control}
          field={"inventory.revolvingInterval"}
          label={"Vòng quay vốn an toàn tương ứng"}
          tooltip={
            "Là thời gian bán hết tồn kho tối thiểu đồng nghĩa với số lần tái sử dụng vốn đầu tư trong 1 năm."
          }
          suffix={"ngày"}
          numOfMask={3}
        />
        <PLInputRow
          control={props.control}
          field={"inventory.expectedGrowthRate"}
          label={"Tốc độ tăng trưởng mỗi tháng kỳ vọng"}
          tooltip={
            "Dựa trên lịch sử bán hàng Pre-order, chúng tôi ước tính tốc độ bán hàng khi chiến dịch Pre-order thành công trong thời gian tương ứng của chiến dịch để scale ra thời gian cho 1 năm. Tuy nhiên chúng tôi đã có tỉ lệ giảm kỳ vọng vì bán Pre-order lúc nào cũng sẽ tốt hơn bán giá niêm yết vì được giảm giá. Chính vì điều này chỉ số đã giảm tỉ lệ rủi ro hơn. "
          }
          suffix={"%"}
        />
      </Stack>
      <CollapseCardHeader header={"các gói đầu tư"} sx={{ px: 0 }} />
    </>
  );
}
