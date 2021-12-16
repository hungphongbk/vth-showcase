import { useLoginRequired } from "../../src/utils/hooks";
import ShowcaseManagement from "../../src/components/showcase-management/showcase-management";

export default function Management() {
  const { loading } = useLoginRequired();
  if (loading) return null;
  return <ShowcaseManagement />;
}
