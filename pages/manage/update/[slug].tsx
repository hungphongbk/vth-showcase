import { useLoginRequired } from "../../../src/utils/hooks";
import { Box } from "@mui/material";

export default function UpdateShowcase() {
  const { loading } = useLoginRequired();
  if (loading) return null;

  return <Box></Box>;
}
