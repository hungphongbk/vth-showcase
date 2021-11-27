import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import ImageUploader from "../ImageUploader";
import { useForm } from "react-hook-form";
import { Showcase } from "../../types/graphql";
import FormInput from "../FormInput";
import PlusIcon from "../../assets/icons/PlusIcon";
import { CollapseCard } from "../index";
import HighlightFeature from "./HighlightFeature";
import { EnhancedMultilineTextField, EnhancedTextField } from "./styled";
import CreationBottomBar from "./CreationBottomBar";

type ShowcaseForm = Showcase & {
  image: File;
  brand: string;
  brandDesc: string;

  expectedReleaseDate: string;
};

export default function SecondStepShowcase(): JSX.Element {
  const { showcase, dispatch } = useShowcaseCreation(),
    form = useForm<ShowcaseForm>({
      defaultValues: { ...(showcase as unknown as ShowcaseForm) },
    }),
    { control } = form;
  return (
    <>
      <Box sx={{ pb: 10 }}>
        <Stack direction={"column"} gap={2}>
          <FormInput name={"image"} control={control} component={ImageUploader}>
            <Stack direction={"column"} alignItems={"center"}>
              <PlusIcon
                sx={{ color: "black", height: 36, width: 36, mb: 0.5 }}
              />
              <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                Banner dự án
              </Typography>
              <Typography>JPEG, JPG - 1000x1000px</Typography>
              <Typography>Tối đa 1MB</Typography>
            </Stack>
          </FormInput>
          <Stack direction={"column"} gap={1}>
            <FormInput
              name={"name"}
              control={control}
              component={EnhancedTextField}
              variant={"standard"}
              placeholder={"Tên dự án"}
              placeholderColor={"#222"}
            />
            <FormInput
              name={"description"}
              control={control}
              component={EnhancedTextField}
              variant={"standard"}
              placeholder={"Chú thích sản phẩm"}
              placeholderColor={"#222"}
            />
          </Stack>
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
                placeholder={"Thương hiệu"}
                component={EnhancedTextField}
              />
              <FormInput
                name={"brandDesc"}
                control={control}
                placeholder={"Mô tả thương hiệu"}
                component={EnhancedMultilineTextField}
              />

              <FormInput
                name={"expectedQuantity"}
                control={control}
                variant={"standard"}
                placeholder={"Số lượng mục tiêu"}
                component={EnhancedTextField}
              />
              <FormInput
                name={"expectedReleaseDate"}
                control={control}
                variant={"standard"}
                placeholder={"Ngày ra mắt dự kiến"}
                component={EnhancedTextField}
              />
            </Stack>
          </Box>
          <CollapseCard header={"Tính năng nổi bật"} defaultOpen>
            <HighlightFeature />
          </CollapseCard>
        </Stack>
      </Box>
      <CreationBottomBar />
    </>
  );
}
