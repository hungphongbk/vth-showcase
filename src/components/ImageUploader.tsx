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
import { Media } from "../types/graphql";
import { apiService } from "../api";

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
  value?: Media;
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
      if (typeof value !== "undefined" && value !== null && value.id) {
        await apiService.deleteMedia(value.id);
      }

      Object.defineProperty(clonedEvent, "target", {
        writable: true,
        value: {
          value: await apiService.createMedia(event.target.files![0]!),
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
      {!value ? (
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
