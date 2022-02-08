import { PrjUpdateDto } from "../../types/graphql";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import { StyledTimeline } from "../commons";

type PrjUpdateDisplayProps = {
  updates: PrjUpdateDto[];
};
export default function PrjUpdateDisplay({
  updates,
}: PrjUpdateDisplayProps): JSX.Element {
  return (
    <StyledTimeline sx={{ px: 0 }}>
      {updates.map((update) => (
        <TimelineItem key={update.id}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box>
              <Box>
                <Typography sx={{ fontWeight: 600 }}>
                  <strong>
                    {format(new Date(update.createdAt), "hh:mm aa")}
                  </strong>{" "}
                  | Thứ Sáu, ngày 15/10/2021
                </Typography>
              </Box>
              <Typography>
                Earth is the third planet from the Sun and the only astronomical
                object known to harbor life. According to radiometric dating
                estimation.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </StyledTimeline>
  );
}
