import React, { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./";
import type { ThemeContextValue, ThemeMode } from "./";

const STORAGE_KEY = "app.theme";

function getInitialMode(): ThemeMode {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark =
    window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;

  return prefersDark ? "dark" : "light";
}

function applyModeToHtml(mode: ThemeMode) {
  document.documentElement.classList.toggle("dark", mode === "dark");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => getInitialMode());

  useEffect(() => {
    applyModeToHtml(mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      setMode,
      toggle: () => setMode((m) => (m === "dark" ? "light" : "dark")),
    }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}