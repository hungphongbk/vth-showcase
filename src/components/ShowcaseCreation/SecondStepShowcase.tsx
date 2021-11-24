import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import ImageUploader from "../ImageUploader";
import { useForm } from "react-hook-form";
import { Showcase } from "../../types/graphql";
import FormInput from "../FormInput";
import PlusIcon from "../../assets/icons/PlusIcon";

type ShowcaseForm = Showcase & {
  image: File;
  brand: string;
};

export default function SecondStepShowcase(): JSX.Element {
  const { showcase, dispatch } = useShowcaseCreation(),
    form = useForm<ShowcaseForm>({
      defaultValues: { ...(showcase as unknown as ShowcaseForm) },
    }),
    { control } = form;
  return (
    <Box>
      <Stack direction={"column"} gap={1}>
        <FormInput name={"image"} control={control} component={ImageUploader}>
          <Stack direction={"column"} alignItems={"center"}>
            <PlusIcon sx={{ color: "black", height: 36, width: 36, mb: 0.5 }} />
            <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
              Banner dự án
            </Typography>
            <Typography>JPEG, JPG - 1000x1000px</Typography>
            <Typography>Tối đa 1MB</Typography>
          </Stack>
        </FormInput>
        <FormInput
          name={"name"}
          control={control}
          variant={"standard"}
          label={"Tên dự án"}
        />
        <FormInput
          name={"description"}
          control={control}
          variant={"standard"}
          label={"Chú thích sản phẩm"}
        />
        <Box
          sx={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            bgcolor: "white",
            p: "20px",
            pt: 1,
          }}
        >
          <Stack direction={"column"} gap={1}>
            <FormInput
              name={"brand"}
              control={control}
              variant={"standard"}
              label={"Thương hiệu"}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
