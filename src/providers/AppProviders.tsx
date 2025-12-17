import React from "react";
import { ThemeProvider } from "./theme";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}