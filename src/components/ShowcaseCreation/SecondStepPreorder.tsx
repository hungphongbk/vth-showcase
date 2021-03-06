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
                Banner d??? ??n
              </Typography>
              <Typography>JPEG, JPG - 1000x1000px</Typography>
              <Typography>T???i ??a 1MB</Typography>
            </Stack>
          </FormInput>
          <Stack direction={"column"} gap={1}>
            <FormInput
              name={"name"}
              control={control}
              component={EnhancedTextField}
              variant={"standard"}
              placeholder={"T??n d??? ??n"}
              placeholderColor={"#222"}
            />
            <FormInput
              name={"description"}
              control={control}
              component={EnhancedTextField}
              variant={"standard"}
              placeholder={"Ch?? th??ch s???n ph???m"}
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
                  placeholder={"Ng??y ra m???t d??? ki???n"}
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
                  placeholder={"Ng??y k???t th??c d??? ki???n"}
                  {...params}
                />
              )}
              defaultValue={null}
            />
            <FormInput
              name={"expectedQuantity.regular"}
              control={control}
              variant={"standard"}
              placeholder={"S??? l?????ng d??? ki???n"}
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
                placeholder={"Th????ng hi???u"}
                component={EnhancedTextField}
              />
              <FormInput
                // @ts-ignore
                name={"brand.description"}
                control={control}
                placeholder={"M?? t??? th????ng hi???u"}
                component={EnhancedMultilineTextField}
              />
              {/*<FormInput*/}
              {/*  name={"expectedQuantity"}*/}
              {/*  control={control}*/}
              {/*  variant={"standard"}*/}
              {/*  placeholder={"S??? l?????ng m???c ti??u"}*/}
              {/*  component={EnhancedTextField}*/}
              {/*  type={"number"}*/}
              {/*/>*/}
            </Stack>
          </Box>
          <CollapseCard header={"T??nh n??ng n???i b???t"} defaultOpen>
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
          {/*<CollapseCard header={"video / h??nh ???nh"} defaultOpen>*/}
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
          {/*            Th??m h??nh ???nh*/}
          {/*          </Typography>*/}
          {/*          <Typography>JPEG, JPG - 1300x630px</Typography>*/}
          {/*          <Typography>T???i ??a 1MB</Typography>*/}
          {/*        </Stack>*/}
          {/*      </ImageUploader>*/}
          {/*    )}*/}
          {/*    options={{ deletable: true }}*/}
          {/*  />*/}
          {/*</CollapseCard>*/}
          <CollapseCard header={"gi?? b??n d??? ki???n"} defaultOpen>
            <SimpleTableRoot rounded sx={{ whiteSpace: "nowrap", mt: -2 }}>
              <table>
                <tr>
                  <td>
                    <Typography sx={{ fontWeight: 600 }}>
                      Gi?? ni??m y???t
                    </Typography>
                  </td>
                  <td colSpan={2}>
                    <FormInput
                      component={SimpleTableRoot.TextEditor}
                      name={"expectedSalePrice.regular"}
                      control={control}
                      placeholder={"Nh???p gi?? ni??m y???t"}
                      type={"number"}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography sx={{ fontWeight: 600 }}>
                      G??i Ti??n Phong
                    </Typography>
                  </td>
                  <td>
                    <FormInput
                      component={SimpleTableRoot.TextEditor}
                      name={"expectedSalePrice.pioneer"}
                      control={control}
                      placeholder={"Nh???p gi??"}
                      type={"number"}
                    />
                  </td>
                  <td>
                    <Typography>%</Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography sx={{ fontWeight: 600 }}>G??i ??u ????i</Typography>
                  </td>
                  <td>
                    <FormInput
                      component={SimpleTableRoot.TextEditor}
                      name={"expectedSalePrice.promo"}
                      control={control}
                      placeholder={"Nh???p gi??"}
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
                      G??i ?????t Tr?????c
                    </Typography>
                  </td>
                  <td>
                    <FormInput
                      component={SimpleTableRoot.TextEditor}
                      name={"expectedSalePrice.preorder"}
                      control={control}
                      placeholder={"Nh???p gi??"}
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
