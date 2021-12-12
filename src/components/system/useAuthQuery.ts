import { OperationVariables } from "@apollo/client/core";
import { DocumentNode } from "graphql";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  QueryHookOptions,
  QueryResult,
} from "@apollo/client/react/types/types";
import { useQuery } from "@apollo/client";
import { useAppSelector } from "../../store";
import { useEffect } from "react";

export function useAuthQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<TData, TVariables>
): QueryResult<TData, TVariables> {
  const user = useAppSelector((state) => state.auth.user);
  const queryResult = useQuery(query, options);
  useEffect(() => {
    if (user !== null) {
      // noinspection JSIgnoredPromiseFromCall
      queryResult.refetch(options?.variables);
    }
    // eslint-disable-next-line
  }, [user]);

  return queryResult;
}
