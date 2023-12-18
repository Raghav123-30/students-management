import { SetStateAction, createContext, useContext, useEffect } from "react";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
type authType = {
  userName: string;
  setUserName: React.Dispatch<SetStateAction<string>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<SetStateAction<boolean>>;
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

const initialValues = {
  userName: "",
  setUserName: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  loginUser: () => {},
  logOut: () => {},
  loading: false,
  setLoading: () => {},
};
const AuthContext = createContext<authType>(initialValues);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    setLoading((prev) => !prev);
  }, [isAuthenticated]);
  return (
    <AuthContext.Provider
      value={{
        userName,
        setUserName,
        isAuthenticated,
        setIsAuthenticated,
        loginUser,
        logOut,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
