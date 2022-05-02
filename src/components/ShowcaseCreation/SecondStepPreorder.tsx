import React, { useEffect } from "react";
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
import CreationBottomBar from "./CreationBottomBar";
import { DevTool } from "@hookform/devtools";
import {
  FormInput,
  HighlightFeature,
  ImageUploader,
  ListEditor,
  SimpleTableRoot,
} from "@hungphongbk/vth-sdk";
import { MobileDatePicker } from "@mui/lab";

type ShowcaseForm = ShowcaseCreateInputDto;

export default function SecondStepPreorder(): JSX.Element {
  const { showcase, dispatch } = useShowcaseCreation(),
    callback = useShowcaseCreationSuccess(),
    form = useForm<ShowcaseForm>({
      defaultValues: {
        ...(showcase as unknown as ShowcaseForm),
        inventory: {
          capitalizationRate: 50,
          adCostRate: 17,
          operatingCostRate: 8,
          revolvingInterval: 70,
          expectedGrowthRate: 2,
        },
      },
    }),
    { control, handleSubmit, formState, watch, setValue } = form,
    [createShowcase] = useCreateShowcaseMutation();

  const watchRegularQuantity = watch("expectedQuantity.regular", 0);

  useEffect(() => {
    if (watchRegularQuantity > 0) {
      const pioneer = Math.round(watchRegularQuantity * 0.2),
        promo = Math.round(watchRegularQuantity * 0.3),
        preorder = watchRegularQuantity - (pioneer + promo);
      setValue(
        "expectedQuantity",
        {
          regular: watchRegularQuantity,
          pioneer,
          promo,
          preorder,
        },
        { shouldDirty: true }
      );
    }
  }, [setValue, watchRegularQuantity]);

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
            <FormInput
              name={"expectedSaleAt"}
              control={control}
              // placeholderColor={"#222"}
              component={MobileDatePicker}
              inputFormat="dd/MM/yyyy"
              renderInput={(params: any) => (
                <EnhancedTextField
                  size={"small"}
                  variant={"standard"}
                  placeholder={"Ngày ra mắt dự kiến"}
                  {...params}
                />
              )}
              defaultValue={null}
            />
            <FormInput
              name={"expectedSaleEndAt"}
              control={control}
              // placeholderColor={"#222"}
              component={MobileDatePicker}
              inputFormat="dd/MM/yyyy"
              renderInput={(params: any) => (
                <EnhancedTextField
                  size={"small"}
                  variant={"standard"}
                  placeholder={"Ngày kết thúc dự kiến"}
                  {...params}
                />
              )}
              defaultValue={null}
            />
            <FormInput
              name={"expectedQuantity.regular"}
              control={control}
              variant={"standard"}
              placeholder={"Số lượng dự kiến"}
              // placeholderColor={"#222"}
              component={EnhancedTextField}
              type={"number"}
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
              {/*<FormInput*/}
              {/*  name={"expectedQuantity"}*/}
              {/*  control={control}*/}
              {/*  variant={"standard"}*/}
              {/*  placeholder={"Số lượng mục tiêu"}*/}
              {/*  component={EnhancedTextField}*/}
              {/*  type={"number"}*/}
              {/*/>*/}
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
          {/*<CollapseCard header={"video / hình ảnh"} defaultOpen>*/}
          {/*  <ListEditor*/}
          {/*    name={"imageLists.0.images"}*/}
          {/*    control={control}*/}
          {/*    ItemComponent={(itemProps) => (*/}
          {/*      <ImageUploader {...itemProps}>*/}
          {/*        <Stack direction={"column"} alignItems={"center"}>*/}
          {/*          <PlusIcon*/}
          {/*            sx={{ color: "black", height: 26, width: 26, mb: 0.5 }}*/}
          {/*          />*/}
          {/*          <Typography sx={{ fontSize: 15, fontWeight: 600 }}>*/}
          {/*            Thêm hình ảnh*/}
          {/*          </Typography>*/}
          {/*          <Typography>JPEG, JPG - 1300x630px</Typography>*/}
          {/*          <Typography>Tối đa 1MB</Typography>*/}
          {/*        </Stack>*/}
          {/*      </ImageUploader>*/}
          {/*    )}*/}
          {/*    options={{ deletable: true }}*/}
          {/*  />*/}
          {/*</CollapseCard>*/}
          <CollapseCard header={"giá bán dự kiến"} defaultOpen>
            <SimpleTableRoot rounded sx={{ whiteSpace: "nowrap", mt: -2 }}>
              <table>
                <tr>
                  <td>
                    <Typography sx={{ fontWeight: 600 }}>
                      Giá niêm yết
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <FormInput
                      component={SimpleTableRoot.TextEditor}
                      name={"expectedSalePrice.regular"}
                      control={control}
                      placeholder={"Nhập giá niêm yết"}
                      type={"number"}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography sx={{ fontWeight: 600 }}>
                      Gói Tiên Phong
                    </Typography>
                  </td>
                  <td>
                    <FormInput
                      component={SimpleTableRoot.TextEditor}
                      name={"expectedSalePrice.pioneer"}
                      control={control}
                      placeholder={"Nhập giá"}
                      type={"number"}
                    />
                  </td>
                  <td>
                    <Typography>%</Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography sx={{ fontWeight: 600 }}>Gói Ưu Đãi</Typography>
                  </td>
                  <td>
                    <FormInput
                      component={SimpleTableRoot.TextEditor}
                      name={"expectedSalePrice.promo"}
                      control={control}
                      placeholder={"Nhập giá"}
                      type={"number"}
                    />
                  </td>
                  <td>
                    <Typography>%</Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography sx={{ fontWeight: 600 }}>
                      Gói Đặt Trước
                    </Typography>
                  </td>
                  <td>
                    <FormInput
                      component={SimpleTableRoot.TextEditor}
                      name={"expectedSalePrice.preorder"}
                      control={control}
                      placeholder={"Nhập giá"}
                      type={"number"}
                    />
                  </td>
                  <td>
                    <Typography>%</Typography>
                  </td>
                </tr>
              </table>
            </SimpleTableRoot>
          </CollapseCard>
        </Stack>
      </Box>
      {process.env.NODE_ENV === "development" && <DevTool control={control} />}
      <CreationBottomBar
        onSave={handleSubmit(onSave)}
        isSaving={formState.isSubmitting}
      />
    </>
  );
}
