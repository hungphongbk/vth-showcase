import { PrjUpdateDto } from "../../types/graphql";
import { EventHandler, SyntheticEvent } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import {
  FormInput,
  useOpenCloseState,
  useVthTheme,
} from "@hungphongbk/vth-sdk";
import { useForm } from "react-hook-form";
import { EnhancedMultilineTextField } from "./utils";
import { TimelineItem } from "@mui/lab";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import { format } from "date-fns";
import PrjUpdateIcon from "./PrjUpdateIcon";
import PrjUpdateDelIcon from "./PrjUpdateDelIcon";

type PrjUpdateItemEditorProps = {
  name: string;
  value?: PrjUpdateDto;
  onChange: EventHandler<SyntheticEvent>;
  onUpdate?: (value: PrjUpdateDto) => boolean | Promise<boolean>;
};
export default function PrjUpdateItemEditor({
  name,
  value,
  onChange,
  onUpdate,
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
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ pr: 0 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gridTemplateAreas: '"time action" "content action"',
            gridGap: 6,
          }}
        >
          <Box sx={{ gridArea: "time" }}>
            <Typography sx={{ fontWeight: 600 }}>
              <strong>{format(new Date(value.createdAt), "hh:mm aa")}</strong> |
              Thứ Sáu, ngày 15/10/2021
            </Typography>
          </Box>
          <Typography sx={{ gridArea: "content" }}>{value.content}</Typography>
          <Stack
            gap={0.5}
            sx={{ gridArea: "action", "& svg": { width: 24, height: 24 } }}
          >
            <PrjUpdateIcon />
            <PrjUpdateDelIcon />
          </Stack>
        </Box>
      </TimelineContent>
    </TimelineItem>
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
