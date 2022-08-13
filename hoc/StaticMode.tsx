import { Fragment, PropsWithChildren } from "react";
import { NEXT_PUBLIC_THEME, NEXT_PUBLIC_THEME_VALIE } from "../config/dotenv";

type StaticModePropsType = PropsWithChildren<{}>;

const StaticMode = ({ children }: StaticModePropsType) => {
  const onHandleStaticMode = () => {
    if (typeof window !== "undefined") {
      let COLOR_THEME = localStorage?.getItem(NEXT_PUBLIC_THEME);
      if (COLOR_THEME) {
        let htmlDataSet = document.body.parentElement?.dataset;
        if (htmlDataSet) {
          htmlDataSet.theme = COLOR_THEME;
          localStorage.setItem(NEXT_PUBLIC_THEME, htmlDataSet.theme);
        }
      } else {
        localStorage.setItem(NEXT_PUBLIC_THEME, NEXT_PUBLIC_THEME_VALIE);
      }
    }
  };

  onHandleStaticMode();

  return <Fragment>{children}</Fragment>;
};

export default StaticMode;
