import React, { PropsWithChildren, useState } from "react";

type ThemeContextValueType = {
  theme: boolean;
  toggleTheme: () => void;
};

const defaultContext: ThemeContextValueType = {
  theme: false,
  toggleTheme: () => {},
};

export const ThemeContext =
  React.createContext<ThemeContextValueType>(defaultContext);
ThemeContext.displayName = "Theme";

type ThemeProviderPropsType = PropsWithChildren<{}>;

export const ThemeProvider = ({ children }: ThemeProviderPropsType) => {
  const [theme, setTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    let htmlDataSet = document.body.parentElement?.dataset;
    if (htmlDataSet) {
      let userMode = htmlDataSet.theme;
      htmlDataSet.theme = userMode === "0" ? "1" : "0";
      localStorage.setItem("theme", htmlDataSet.theme);
    }
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
