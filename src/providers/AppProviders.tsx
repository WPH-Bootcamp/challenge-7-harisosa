import React from "react";
import { ThemeProvider } from "./theme";
import { ModalProvider } from "./modal";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ModalProvider>
  );
}