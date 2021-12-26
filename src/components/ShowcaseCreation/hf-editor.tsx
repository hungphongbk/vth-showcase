import { Control } from "react-hook-form";
import { HighlightFeature } from "@hungphongbk/vth-sdk";
import React from "react";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import ShowcaseContentCrudAdapter from "./showcase-content-crud-adapter";
import {
  refetchGetHighlightFeaturesOnShowcaseQuery,
  refetchGetOneHighlightFeatureQuery,
  useCreateOneHighlightFeatureMutation,
  useGetHighlightFeaturesOnShowcaseQuery,
  useGetOneHighlightFeatureQuery,
  useUpdateOneHighlightFeatureMutation,
} from "../../types/graphql";

type HfEditorProps = {
  control: Control<any, any>;
};
export default function HfEditor({ control }: HfEditorProps): JSX.Element {
  const { showcase, mode } = useShowcaseCreation(),
    slug = (showcase as any).slug as string;
  return (
    <ShowcaseContentCrudAdapter
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
