"use client";
import { useAuth } from "@/context/AuthContext";
import Landing from "./Landing";
import { useEffect, useState } from "react";
import ToggleTheme from "../ToggleTheme";
type Props = {
  children: React.ReactNode;
};
const themes = {
  LIGHT: "light",
  DARK: "dark",
};

const AuthenticatedLayout = ({ children }: Props) => {
  const { userName, setUserName, isAuthenticated, setIsAuthenticated } =
    useAuth();
  const [theme, setTheme] = useState(themes.LIGHT);
  const onThemeChanged = () => {
    setTheme((prev) => (prev == themes.LIGHT ? themes.DARK : themes.LIGHT));
  };
  useEffect(() => {
    let item = localStorage.getItem("isAuthenticated");
    if (item) {
      setIsAuthenticated(true);
    }
  }, []);
  if (isAuthenticated) {
    return (
      <div className="main-container" data-theme={theme}>
        <div className="flex h-12 justify-center items-center px-4 w-full">
          <ToggleTheme onThemeChanged={onThemeChanged} />
        </div>
        {children}
      </div>
    );
  } else {
    return (
      <Landing
        setUserName={setUserName}
        setIsAuthenticated={setIsAuthenticated}
      />
    );
  }
};

export default AuthenticatedLayout;
