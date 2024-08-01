"use client";

import { ThemeProvider } from "@emotion/react";
import theme from "@/config/theme";

function ThemeProviders({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
export default ThemeProviders;
