import React, { useState } from "react";
import AspectRatio from "../AspectRatio";
import { sxFlexCenter, sxFullSize } from "../../utils/predefinedSx";
import { Box, Button, DialogContent, Stack, Typography } from "@mui/material";
import PlusIcon from "../../assets/icons/PlusIcon";
import { StyledDialog } from "../commons";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import ImageUploader from "../ImageUploader";
import { EnhancedMultilineTextField, EnhancedTextField } from "./styled";

export default function HighlightFeature(): JSX.Element {
  const [open, setOpen] = useState(false),
    // TODO type highlight dto here
    form = useForm(),
    { control } = form;
  return (
    <>
      <AspectRatio
        ratio={"307/160"}
        sx={{ border: 1, borderStyle: "dashed", borderColor: "divider" }}
      >
        <Box sx={[sxFullSize, sxFlexCenter]} onClick={() => setOpen(true)}>
          <Stack direction={"column"} alignItems={"center"}>
            <PlusIcon sx={{ color: "black", height: 26, width: 26, mb: 0.5 }} />
            <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
              Thêm tính năng
            </Typography>
          </Stack>
        </Box>
      </AspectRatio>
      <StyledDialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Stack direction={"column"} gap={2}>
            <FormInput
              name={"name"}
              control={control}
              variant={"standard"}
              placeholder={"Tính năng"}
              component={EnhancedTextField}
            />

            <FormInput
              name={"description"}
              control={control}
              variant={"standard"}
              placeholder={"Mô tả tính năng"}
              component={EnhancedMultilineTextField}
            />

            <FormInput
              name={"image"}
              control={control}
              component={ImageUploader}
              ratio={"130/63"}
            >
              <Stack direction={"column"} alignItems={"center"}>
                <PlusIcon
                  sx={{ color: "black", height: 26, width: 26, mb: 0.5 }}
                />
                <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                  Hình ảnh minh hoạ
                </Typography>
                <Typography>JPEG, JPG - 1300x630px</Typography>
                <Typography>Tối đa 1MB</Typography>
              </Stack>
            </FormInput>
            <Button variant={"contained"} color={"primary"}>
              Lưu
            </Button>
          </Stack>
        </DialogContent>
      </StyledDialog>
    </>
  );
}
