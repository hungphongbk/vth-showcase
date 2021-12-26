import { PrjUpdateDto } from "../../types/graphql";
import { EventHandler, SyntheticEvent } from "react";
import { Button, Dialog, DialogContent, Stack } from "@mui/material";
import {
  FormInput,
  useOpenCloseState,
  useVthTheme,
} from "@hungphongbk/vth-sdk";
import { useForm } from "react-hook-form";
import { EnhancedMultilineTextField } from "./utils";
import { TimelineItem } from "@mui/lab";

type PrjUpdateItemEditorProps = {
  name: string;
  value?: PrjUpdateDto;
  onChange: EventHandler<SyntheticEvent>;
};
export default function PrjUpdateItemEditor({
  name,
  value,
  onChange,
}: PrjUpdateItemEditorProps) {
  const form = useForm({
      defaultValues: value ?? {},
    }),
    { control, handleSubmit } = form;

  const {
      components: { Dialog, TextField, MultilineTextField },
    } = useVthTheme(),
    [open, doOpenDialog, doCloseDialog] = useOpenCloseState();

  const handleChange = (values: any, event: any) => {
    if (onChange) {
      const nativeEvent = event.nativeEvent || event;
      // @ts-ignore
      const clonedEvent = new nativeEvent.constructor(
        nativeEvent.type,
        nativeEvent
      );

      Object.defineProperty(clonedEvent, "target", {
        writable: true,
        value: {
          value: values,
          name,
        },
      });
      onChange(clonedEvent);
      doCloseDialog();
    }
  };

  return value && value.content ? (
    <TimelineItem></TimelineItem>
  ) : (
    <>
      <Button variant={"contained"} onClick={doOpenDialog}>
        Thêm cập nhật
      </Button>
      <Dialog open={open} onClose={doCloseDialog}>
        <DialogContent>
          <Stack direction={"column"} gap={2}>
            <FormInput
              name={"content"}
              control={control}
              variant={"standard"}
              placeholder={"Chi tiết cập nhật"}
              component={EnhancedMultilineTextField}
            />
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={handleSubmit(handleChange)}
            >
              Lưu
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}
