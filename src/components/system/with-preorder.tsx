import { ComponentType, useCallback } from "react";
import {
  PreorderRequestInputDto,
  Showcase,
  SubmitPreorderMutation,
  useSubmitPreorderMutation,
} from "../../types/graphql";
import { MutationBaseOptions } from "@hungphongbk/apollo-client/core/watchQueryOptions";

type WithPreorderOptions = {
  refetchQueries: (
    showcase: Pick<Showcase, "slug">
  ) => MutationBaseOptions["refetchQueries"];
};
type WithPreorderBaseProps = {
  showcase: Pick<
    Showcase,
    "status" | "slug" | "expectedSalePrice" | "isPreordered"
  >;
};
type WithPreorderOuterProps = WithPreorderBaseProps;
type WithPreorderInnerProps = WithPreorderBaseProps & {
  doSubmitPreorder: (
    value: PreorderRequestInputDto | undefined,
    isAnonymous: boolean
  ) => Promise<SubmitPreorderMutation>;
};

export const withPreorder =
  <T extends any>(options: WithPreorderOptions) =>
  (Component: ComponentType<T & WithPreorderInnerProps>) => {
    function WithPreorder(props: T & WithPreorderOuterProps) {
      const [_doSubmitPreorder] = useSubmitPreorderMutation({
        variables: {
          slug: props.showcase.slug,
        },
        refetchQueries: options.refetchQueries(props.showcase),
      });

      const doSubmitPreorder = useCallback(
        async (
          value: PreorderRequestInputDto | undefined,
          isAnonymous: boolean
        ) => {
          if (isAnonymous && !value) {
            throw new Error(
              "Value must not be undefined while in anonymous mode"
            );
          }
          if (value && /^0/.test(value.phoneNumber)) {
            value.phoneNumber = value.phoneNumber.replace(/^0/g, "+84");
          }
          const { data } = await _doSubmitPreorder({
            variables: {
              slug: props.showcase.slug,
              input: value,
            },
          });
          return data!;
        },
        [_doSubmitPreorder, props.showcase.slug]
      );

      return <Component {...props} doSubmitPreorder={doSubmitPreorder} />;
    }
    return WithPreorder;
  };
