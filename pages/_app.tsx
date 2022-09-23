import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ResumeProvider, ThemeProvider } from "../contexts";
import StaticMode from "../hoc/StaticMode";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StaticMode>
      <ThemeProvider>
        <ResumeProvider>
          <Component {...pageProps} />
        </ResumeProvider>
      </ThemeProvider>
    </StaticMode>
  );
}

export default MyApp;
