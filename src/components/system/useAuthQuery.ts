import { QueryResult } from "@apollo/client/react/types/types";
import * as Apollo from "@apollo/client";
import { QueryHookOptions } from "@apollo/client";
import { useAppSelector } from "../../store";
import { useEffect } from "react";
import { NextRouter } from "next/router";

type OptFunc<TD, TV> = (router: NextRouter) => QueryHookOptions<TD, TV>;

export function useAuthQuery<TData, TVariables>(
  fn: (optFunc?: OptFunc<TData, TVariables>) => QueryResult<TData, TVariables>,
  options: Apollo.QueryHookOptions<TData, TVariables>
): QueryResult<TData, TVariables> {
  const user = useAppSelector((state) => state.auth.user);
  const queryResult = fn(() => options);
  useEffect(() => {
    if (typeof user !== "undefined" && user !== null) {
      // noinspection JSIgnoredPromiseFromCall
      queryResult.refetch(options?.variables);
    }
    // eslint-disable-next-line
  }, [user]);

  return queryResult;
}
