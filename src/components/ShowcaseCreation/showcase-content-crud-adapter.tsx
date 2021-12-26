import { ListEditor, ListEditorProps } from "@hungphongbk/vth-sdk";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  MutationHookOptions,
  MutationTuple,
  QueryHookOptions,
  QueryResult,
} from "@apollo/client/react/types/types";
import { cloneDeep, get, omit } from "lodash";

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
    getAllPath: string;
    refetchAll: any;
    getOneFn?: any;
    refetchOneFn?: any;
    create: [MutationHooks, any];
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
  control: _,
  options,
  ...props
}: Omit<ShowcaseContentCrudAdapterProps, "mode">) {
  const form = useForm({
      defaultValues: {
        [name]: [],
      },
    }),
    { setValue, control } = form;
  const [getAllHookFn, getAllHookArg] = hooks.getAll;
  const [createMutationHookFn, createMutationHookArgs] = hooks.create,
    [createMutation] = createMutationHookFn({
      ...createMutationHookArgs,
      refetchQueries: [hooks.refetchAll],
    });
  const { data, loading: fetchingAll } = getAllHookFn(getAllHookArg);
  useEffect(() => {
    if (data && !fetchingAll)
      setValue(name, cloneDeep(get(data, hooks.getAllPath)));
  });

  return (
    <ListEditor
      name={name}
      control={control}
      options={{
        ...options,
        onAppend: async (value) => {
          await createMutation({ variables: { input: omit(value, ["id"]) } });
          return false;
        },
      }}
      {...props}
    />
  );
}

export default function ShowcaseContentCrudAdapter({
  mode,
  hooks,
  ...props
}: ShowcaseContentCrudAdapterProps): JSX.Element {
  if (mode === "add") return <ListEditor {...props} />;
  return <InnerAdapter hooks={hooks} {...props} />;
}
