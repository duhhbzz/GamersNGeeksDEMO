"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

type Theme = "light" | "dark";

const storageKey = "gng-theme";
const themeChangeEvent = "gng-theme-change";
const darkModeQuery = "(prefers-color-scheme: dark)";

function getSystemTheme(): Theme {
  return window.matchMedia(darkModeQuery).matches ? "dark" : "light";
}

function getStoredTheme(): Theme | null {
  try {
    const theme = localStorage.getItem(storageKey);
    return theme === "light" || theme === "dark" ? theme : null;
  } catch {
    return null;
  }
}

function getThemeSnapshot(): Theme | null {
  const theme = document.documentElement.dataset.theme;
  return theme === "light" || theme === "dark" ? theme : null;
}

function subscribeToTheme(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(darkModeQuery);

  function handleSystemChange() {
    if (getStoredTheme()) return;

    document.documentElement.dataset.theme = getSystemTheme();
    onStoreChange();
  }

  function handleStorageChange(event: StorageEvent) {
    if (event.key !== storageKey) return;

    const theme = event.newValue === "light" || event.newValue === "dark"
      ? event.newValue
      : getSystemTheme();

    document.documentElement.dataset.theme = theme;
    onStoreChange();
  }

  window.addEventListener(themeChangeEvent, onStoreChange);
  window.addEventListener("storage", handleStorageChange);
  mediaQuery.addEventListener("change", handleSystemChange);

  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange);
    window.removeEventListener("storage", handleStorageChange);
    mediaQuery.removeEventListener("change", handleSystemChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => null);
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const label = theme ? `Switch to ${nextTheme} mode` : "Switch color theme";

  function toggleTheme() {
    document.documentElement.dataset.theme = nextTheme;

    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {
      // The in-memory theme still changes when storage is unavailable.
    }

    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <IconButton
      icon={theme === "dark" ? Sun : Moon}
      label={label}
      onClick={toggleTheme}
    />
  );
}
