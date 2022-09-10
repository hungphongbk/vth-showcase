import { ComponentType, useEffect, useState } from "react";
import { useAppSelector } from "../../store";
import { AuthRoleType } from "../../types/graphql";
import { jsx } from "@emotion/react";
import IntrinsicAttributes = jsx.JSX.IntrinsicAttributes;

export function withRole<T>(role: AuthRoleType) {
  // eslint-disable-next-line react/display-name
  return (Component: ComponentType<T>) => (props: IntrinsicAttributes & T) => {
    const user = useAppSelector((state) => state.auth.user),
      [match, setMatch] = useState(false);
    useEffect(() => {
      if (user !== null)
        user?.getIdTokenResult(true).then((rs) => {
          console.log(rs);
          if (rs.claims[(role as string).toLowerCase()] as unknown as boolean) {
            setMatch(true);
          }
        });
    }, [user]);

    if (match) return <Component {...props} />;
    return null;
  };
}
