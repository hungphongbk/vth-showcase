import { useLoginRequired } from "../../../src/utils/hooks";
import { getShowcaseCreationLayout } from "../../../src/layout/ShowcaseCreationLayout";
import ShowcaseUpdater from "../../../src/components/showcase-management/showcase-updater";

export default function UpdateShowcase(props: any) {
  const { loading } = useLoginRequired();
  if (loading) return null;

  return <ShowcaseUpdater />;
}

UpdateShowcase.getLayout = getShowcaseCreationLayout;
