import React, { useEffect } from "react";
import { Control, useFieldArray } from "react-hook-form";
import { Stack, Typography } from "@mui/material";
import { uniqueId } from "lodash";
import PlusIcon from "../../../assets/icons/PlusIcon";
import { FormInput, ImageUploader } from "@hungphongbk/vth-sdk";

export default function ImageListUploader({
  control,
}: {
  control: Control<any>;
}): JSX.Element {
  const { fields, append } = useFieldArray<any, any, "cid">({
    control,
    keyName: "cid",
    name: "imageLists.0.images",
  });

  useEffect(() => {
    const last = fields[fields.length - 1];
    if (!last || !last.cid) {
      append({ cid: uniqueId() });
    }
  }, [append, fields]);

  return (
    <Stack direction={"column"} alignItems={"stretch"} gap={1}>
      {fields.map((field, index) => (
        <FormInput
          name={`imageLists.0.images.${index}`}
          key={field.cid}
          control={control}
          component={ImageUploader}
          ratio={"130/63"}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <PlusIcon sx={{ color: "black", height: 26, width: 26, mb: 0.5 }} />
            <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
              Thêm hình ảnh
            </Typography>
            <Typography>JPEG, JPG - 1300x630px</Typography>
            <Typography>Tối đa 1MB</Typography>
          </Stack>
        </FormInput>
      ))}
    </Stack>
  );
}
