import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import { useForm } from "react-hook-form";
import { MediaInput, Showcase, User } from "../../types/graphql";
import PlusIcon from "../../assets/icons/PlusIcon";
import { CollapseCard } from "../index";
import { EnhancedMultilineTextField, EnhancedTextField } from "./styled";
import CreationBottomBar from "./CreationBottomBar";
import { DevTool } from "@hookform/devtools";
import { apiService } from "../../api";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import {
  FormInput,
  HighlightFeature,
  ImageUploader,
  ListEditor,
} from "@hungphongbk/vth-sdk";

type ShowcaseForm = Omit<Showcase, "author" | "image"> & {
  author: Omit<User, "showcasePosts">;
  image: MediaInput;
};

export default function SecondStepShowcase(): JSX.Element {
  const router = useRouter();
  const { showcase, dispatch } = useShowcaseCreation(),
    form = useForm<ShowcaseForm>({
      defaultValues: {
        ...(showcase as unknown as ShowcaseForm),
      },
    }),
    { control, handleSubmit, formState } = form;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSave = async (values: ShowcaseForm) => {
    try {
      const { name, slug } = await apiService.createShowcase(values);
      await router.prefetch(`/post/${slug}`);
      enqueueSnackbar(
        <>
          Showcase <strong>{name}</strong> được tạo thành công!
        </>,
        {
          variant: "success",
          action: (key) => (
            <Button
              variant={"contained"}
              onClick={async () => {
                await router.push(`/post/${slug}`);
                closeSnackbar(key);
              }}
            >
              Xem
            </Button>
          ),
        }
      );
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
                name={"brand.name"}
                control={control}
                variant={"standard"}
                placeholder={"Thương hiệu"}
                component={EnhancedTextField}
              />
              <FormInput
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
            <ListEditor
              name={"imageList.0.images"}
              control={control}
              ItemComponent={(itemProps) => (
                <ImageUploader {...itemProps}>
                  <Stack direction={"column"} alignItems={"center"}>
                    <PlusIcon
                      sx={{ color: "black", height: 26, width: 26, mb: 0.5 }}
                    />
                    <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                      Thêm hình ảnh
                    </Typography>
                    <Typography>JPEG, JPG - 1300x630px</Typography>
                    <Typography>Tối đa 1MB</Typography>
                  </Stack>
                </ImageUploader>
              )}
              options={{ deletable: true }}
            />
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
