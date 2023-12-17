import { SetStateAction, createContext, useContext } from "react";
import { useState } from "react";

type authType = {
  userName: string;
  setUserName: React.Dispatch<SetStateAction<string>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<SetStateAction<boolean>>;
};

const initialValues = {
  userName: "",
  setUserName: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
};
const AuthContext = createContext<authType>(initialValues);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <AuthContext.Provider
      value={{ userName, setUserName, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
