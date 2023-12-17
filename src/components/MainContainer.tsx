"use client";

import { useState } from "react";
import ToggleTheme from "./ToggleTheme";

const themes = {
  LIGHT: "light",
  DARK: "dark",
};

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(themes.LIGHT);
  const onThemeChanged = () => {
    setTheme((prev) => (prev == themes.LIGHT ? themes.DARK : themes.LIGHT));
  };
  return (
    <div className="main-container" data-theme={theme}>
      <div className="flex h-12 justify-center items-center px-4 w-full">
        <ToggleTheme onThemeChanged={onThemeChanged} />
      </div>
      {children}
    </div>
  );
};

export default MainContainer;
