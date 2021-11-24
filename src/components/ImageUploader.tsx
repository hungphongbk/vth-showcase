import React, {
  ChangeEvent,
  EventHandler,
  PropsWithChildren,
  SyntheticEvent,
  useMemo,
} from "react";
import { styled } from "@mui/material/styles";
import { uniqueId } from "lodash";
import AspectRatio, { RatioProps } from "./AspectRatio";
import { Box } from "@mui/material";
import { sxFlexCenter, sxFullSize } from "../utils/predefinedSx";

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
  value?: File;
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

  const preview = useMemo(() => {
    if (!value) return "";
    return URL.createObjectURL(value);
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const nativeEvent = event.nativeEvent || event;
      // @ts-ignore
      const clonedEvent = new nativeEvent.constructor(
        nativeEvent.type,
        nativeEvent
      );

      Object.defineProperty(clonedEvent, "target", {
        writable: true,
        value: { value: event.target.files![0]!, name },
      });
      onChange(clonedEvent);
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
          <Box sx={[sxFullSize, sxFlexCenter]}>{children}</Box>
        </StyledLabel>
      ) : (
        <Box sx={{ "& img": { ...sxFullSize, objectFit: "cover" } }}>
          <img src={preview} alt="preview" />
        </Box>
      )}
    </AspectRatio>
  );
}
