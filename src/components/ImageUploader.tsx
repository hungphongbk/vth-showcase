import React, {
  ChangeEvent,
  EventHandler,
  PropsWithChildren,
  SyntheticEvent,
  useState,
} from "react";
import { styled } from "@mui/material/styles";
import { uniqueId } from "lodash";
import AspectRatio, { RatioProps } from "./AspectRatio";
import { Box, CircularProgress } from "@mui/material";
import { sxFlexCenter, sxFullSize } from "../utils/predefinedSx";
import { MediaDto } from "../types/graphql";
import { UploadService } from "../service";

const StyledLabel = styled("label")`
  width: 100%;
  height: 100%;
`;
const UploadInput = styled("input")`
  display: none;
`;

interface UploadEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget &
    Omit<T, "value"> & {
      value: File;
    };
}
type UploadEventHandler<T = Element> = EventHandler<UploadEvent<T>>;
type ImageUploaderProps = Pick<RatioProps, "ratio"> & {
  name?: string | undefined;
  value?: MediaDto;
  onChange?: UploadEventHandler;
  required?: boolean;
};

export default function ImageUploader({
  name,
  value,
  onChange,
  children,
  ratio = undefined,
}: PropsWithChildren<ImageUploaderProps>): JSX.Element {
  const id = uniqueId("file-upload-");
  const [uploading, setUploading] = useState(false);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const nativeEvent = event.nativeEvent || event;
      // @ts-ignore
      const clonedEvent = new nativeEvent.constructor(
        nativeEvent.type,
        nativeEvent
      );

      setUploading(true);
      const file = event.target.files![0]!,
        mimetype = file.type,
        filename = file.name,
        path = await UploadService.upload(file);

      Object.defineProperty(clonedEvent, "target", {
        writable: true,
        value: {
          value: {
            ...(value ?? {}),
            mimetype,
            filename,
            path,
          },
          name,
        },
      });
      onChange(clonedEvent);
      setUploading(false);
    }
  };

  return (
    <AspectRatio
      sx={{ border: 1, borderStyle: "dashed", borderColor: "divider" }}
      ratio={ratio}
    >
      {!value || !value.path ? (
        <StyledLabel htmlFor={id}>
          <UploadInput
            accept={"image/*"}
            id={id}
            type={"file"}
            onChange={handleChange}
          />
          <Box sx={[sxFullSize, sxFlexCenter]}>
            {uploading ? <CircularProgress /> : children}
          </Box>
        </StyledLabel>
      ) : (
        <Box sx={{ "& img": { ...sxFullSize, objectFit: "cover" } }}>
          <img src={value.path ?? ""} alt="preview" />
        </Box>
      )}
    </AspectRatio>
  );
}
