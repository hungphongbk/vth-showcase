import { ListEditor, ListEditorProps } from "@hungphongbk/vth-sdk";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  MutationHookOptions,
  MutationTuple,
  QueryHookOptions,
  QueryResult,
} from "@apollo/client/react/types/types";

type QueryHooks<TD = any, TV = any> = (
  baseOptions: QueryHookOptions<TD, TV>
) => QueryResult<TD, TV>;
type MutationHooks<TD = any, TV = any> = (
  baseOptions: MutationHookOptions<TD, TV>
) => MutationTuple<TD, TV>;

type ShowcaseContentCrudAdapterProps = ListEditorProps & {
  mode: "add" | "edit";
  hooks: {
    getAll: [QueryHooks, any];
    refetchAll: any;
    getOneFn?: any;
    refetchOneFn?: any;
    create?: [MutationHooks, any];
    update?: any;
    del?: any;
  };
};

/**
 * Assume passed mode is edit
 * @param name
 * @param hooks
 * @param control
 * @param props
 * @constructor
 */
function InnerAdapter({
  name,
  hooks,
  control,
  ...props
}: Omit<ShowcaseContentCrudAdapterProps, "mode">) {
  const form = useForm({
    defaultValues: {
      [name]: undefined,
    },
  });
  const { data } = hooks.getAll[0](hooks.getAll[1]);
  useEffect(() => {});

  return <></>;
}

export default function ShowcaseContentCrudAdapter({
  mode,
  hooks,
  ...props
}: ShowcaseContentCrudAdapterProps): JSX.Element {
  if (mode === "add") return <ListEditor {...props} />;
  return <InnerAdapter hooks={hooks} {...props} />;
}
