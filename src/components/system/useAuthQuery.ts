import { QueryResult } from "@apollo/client/react/types/types";
import { QueryHookOptions } from "@apollo/client";
import { useAppSelector } from "../../store";
import { useEffect } from "react";
import { NextRouter } from "next/router";

type OptFunc<TD, TV> = (router: NextRouter) => QueryHookOptions<TD, TV>;

export function useAuthQuery<TData, TVariables>(
  queryResult: QueryResult<TData, TVariables>
): QueryResult<TData, TVariables> {
  const user = useAppSelector((state) => state.auth.user);
  useEffect(() => {
    if (typeof user !== "undefined" && user !== null) {
      // noinspection JSIgnoredPromiseFromCall
      queryResult.refetch();
    }
    // eslint-disable-next-line
  }, [user]);

  return queryResult;
}
