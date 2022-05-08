import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import { useForm } from "react-hook-form";
import {
  ShowcaseCreateInputDto,
  useCreateShowcaseMutation,
} from "../../types/graphql";
import PlusIcon from "../../assets/icons/PlusIcon";
import { CollapseCard } from "../index";
import {
  EnhancedMultilineTextField,
  EnhancedTextField,
  useShowcaseCreationSuccess,
} from "./utils";
import {
  FormInput,
  HighlightFeature,
  ImageUploader,
  ListEditor,
} from "@hungphongbk/vth-sdk";
import CreationBottomBar from "./creation-bottom-bar";
import { StyledTimeline } from "../commons";
import PrjUpdateEditor from "./prj-update-editor";
import HfEditor from "./hf-editor";
import styles from "./second-step.module.css";

type ShowcaseForm = ShowcaseCreateInputDto;

export default function SecondStepShowcase(): JSX.Element {
  const { showcase, dispatch, mode } = useShowcaseCreation(),
    callback = useShowcaseCreationSuccess(),
    form = useForm<ShowcaseForm>({
      defaultValues: {
        ...(showcase as unknown as ShowcaseForm),
      },
    }),
    { control, handleSubmit, formState } = form,
    [createShowcase] = useCreateShowcaseMutation();

  const onSave = async (values: ShowcaseForm) => {
    try {
      const { data } = await createShowcase({
          variables: { input: values },
        }),
        { name, slug } = data!.createOneShowcase;
      await callback({ name, slug });
    } catch (e) {}
  };

  return (
    <>
      <Box sx={{ pb: 10 }}>
        <Stack direction={"column"} gap={2}>
          <FormInput name={"image"} control={control} component={ImageUploader}>
            <Stack direction={"column"} alignItems={"center"}>
              <PlusIcon className={styles.PlusIcon} />
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
          <Box className={styles.BrandSection}>
            <Stack direction={"column"} gap={1}>
              <FormInput
                // @ts-ignore
                name={"brand.name"}
                control={control}
                variant={"standard"}
                placeholder={"Thương hiệu"}
                component={EnhancedTextField}
              />
              <FormInput
                // @ts-ignore
                name={"brand.description"}
                control={control}
                placeholder={"Mô tả thương hiệu"}
                component={EnhancedMultilineTextField}
              />
              <FormInput
                name={"expectedSaleAt"}
                control={control}
                variant={"standard"}
                placeholder={"Ngày ra mắt dự kiến"}
                component={EnhancedTextField}
              />
            </Stack>
          </Box>
          <CollapseCard header={"Tính năng nổi bật"} defaultOpen>
            <ListEditor
              name={"highlightFeatures"}
              control={control}
              ItemComponent={(itemProps) => (
                <HighlightFeature
                  {...itemProps}
                  DialogProps={{ maxWidth: "sm", fullWidth: true }}
                />
              )}
              options={{ deletable: true }}
            />
          </CollapseCard>
          <CollapseCard header={"video / hình ảnh"} defaultOpen>
            <HfEditor control={control} />
          </CollapseCard>
          <CollapseCard header={"cập nhật dự án"} defaultOpen>
            <StyledTimeline className="p-0">
              <PrjUpdateEditor control={control} />
            </StyledTimeline>
          </CollapseCard>
        </Stack>
      </Box>
      <CreationBottomBar
        onSave={handleSubmit(onSave)}
        isSaving={formState.isSubmitting}
      />
    </>
  );
}
