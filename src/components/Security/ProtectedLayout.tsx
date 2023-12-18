"use client";
import { useAuth } from "@/context/AuthContext";

import { useState } from "react";
import ToggleTheme from "../ToggleTheme";
import Landing from "./Landing";

type Props = {
  children: React.ReactNode;
};
const themes = {
  LIGHT: "light",
  DARK: "dark",
};

const AuthenticatedLayout = ({ children }: Props) => {
  const {
    isAuthenticated,

    loading,
  } = useAuth();
  const [theme, setTheme] = useState(themes.LIGHT);
  const onThemeChanged = () => {
    setTheme((prev) => (prev == themes.LIGHT ? themes.DARK : themes.LIGHT));
  };

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
    return <Landing />;
  }
};

export default AuthenticatedLayout;
