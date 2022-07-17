import { Control, FieldValues } from "react-hook-form";
import { ContentCrudAdapter, HighlightFeature } from "@hungphongbk/vth-sdk";
import React from "react";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import {
  refetchGetHighlightFeaturesOnShowcaseQuery,
  refetchGetOneHighlightFeatureQuery,
  useCreateOneHighlightFeatureMutation,
  useGetHighlightFeaturesOnShowcaseQuery,
  useGetOneHighlightFeatureQuery,
  useUpdateOneHighlightFeatureMutation,
} from "../../types/graphql";

type HfEditorProps<T> = {
  control: Control<T>;
};
export default function HfEditor<T>({ control }: HfEditorProps<T>): JSX.Element;
export default function HfEditor({
  control,
}: HfEditorProps<FieldValues>): JSX.Element {
  const { showcase, mode } = useShowcaseCreation(),
    slug = (showcase as any).slug as string;
  return (
    <ContentCrudAdapter
      mode={mode}
      hooks={{
        getAll: [
          useGetHighlightFeaturesOnShowcaseQuery,
          { variables: { slug } },
        ],
        getAllPath: "showcase.highlightFeatures",
        refetchAll: refetchGetHighlightFeaturesOnShowcaseQuery({
          slug,
        }),
        getOneFn: useGetOneHighlightFeatureQuery,
        refetchOneFn: refetchGetOneHighlightFeatureQuery,
        create: [useCreateOneHighlightFeatureMutation, { variables: { slug } }],
        update: [useUpdateOneHighlightFeatureMutation, { variables: { slug } }],
      }}
      name={"highlightFeatures"}
      control={control}
      ItemComponent={(itemProps) => (
        <HighlightFeature
          {...itemProps}
          DialogProps={{ maxWidth: "sm", fullWidth: true }}
        />
      )}
      options={{ deletable: true }}
    />
  );
}
