import { createContext } from "react";
import { User } from "@firebase/auth";

const AuthContext = createContext<[User | undefined, (user?: User) => void]>([
  undefined,
  () => {},
]);

export default AuthContext;
