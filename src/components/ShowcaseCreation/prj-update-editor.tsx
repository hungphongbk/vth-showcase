import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import { Control } from "react-hook-form";
import {
  refetchAllUpdatesInShowcaseQuery,
  refetchOneUpdateInShowcaseQuery,
  useAllUpdatesInShowcaseQuery,
  useOneUpdateInShowcaseQuery,
  usePostAnUpdateInShowcaseMutation,
  useUpdateOneUpdateInShowcaseMutation,
} from "../../types/graphql";
import PrjUpdateItemEditor from "./prj-update-item-editor";
import React from "react";
import { ContentCrudAdapter } from "@hungphongbk/vth-sdk";

type Props = {
  control: Control<any, any>;
};
export default function PrjUpdateEditor({ control }: Props): JSX.Element {
  const { showcase, mode } = useShowcaseCreation(),
    slug = (showcase as any).slug as string;
  return (
    <ContentCrudAdapter
      mode={mode}
      hooks={{
        getAll: [
          useAllUpdatesInShowcaseQuery,
          {
            variables: { slug },
          },
        ],
        getAllPath: "showcase.updates",
        refetchAll: refetchAllUpdatesInShowcaseQuery({
          slug,
        }),
        getOneFn: useOneUpdateInShowcaseQuery,
        refetchOneFn: refetchOneUpdateInShowcaseQuery,
        create: [
          usePostAnUpdateInShowcaseMutation,
          {
            variables: { slug },
          },
        ],
        update: [
          useUpdateOneUpdateInShowcaseMutation,
          {
            variables: { slug },
          },
        ],
      }}
      name={"updates"}
      control={control}
      ItemComponent={(itemProps) => <PrjUpdateItemEditor {...itemProps} />}
    />
  );
}
