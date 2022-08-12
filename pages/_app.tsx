import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ResumeProvider } from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResumeProvider>
      <Component {...pageProps} />
    </ResumeProvider>
  );
}

export default MyApp;
