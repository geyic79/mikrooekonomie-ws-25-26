import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { Language } from "@/data/types";

const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 20;
const DEFAULT_FONT_SIZE = 16;

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "de";
  return (localStorage.getItem("mikro-lang") as Language) || "de";
}

function getStoredFontSize(): number {
  if (typeof window === "undefined") return DEFAULT_FONT_SIZE;
  const storedFontSize = localStorage.getItem("mikro-fontsize");
  const parsedFontSize = storedFontSize
    ? parseInt(storedFontSize, 10)
    : DEFAULT_FONT_SIZE;
  return !isNaN(parsedFontSize) ? parsedFontSize : DEFAULT_FONT_SIZE;
}

function getStoredDarkMode(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("mikro-darkmode");
  if (stored !== null) return stored === "true";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export const useAppStore = defineStore("app", () => {
  const language = ref<Language>(getStoredLanguage());
  const fontSize = ref<number>(getStoredFontSize());
  const darkMode = ref<boolean>(getStoredDarkMode());

  function setLanguage(lang: Language) {
    language.value = lang;
    if (typeof window !== "undefined") {
      localStorage.setItem("mikro-lang", lang);
    }
  }

  function toggleLanguage() {
    setLanguage(language.value === "de" ? "en" : "de");
  }

  function t(de: string, en: string): string {
    return language.value === "de" ? de : en;
  }

  function setFontSize(size: number) {
    fontSize.value = Math.max(MIN_FONT_SIZE, Math.min(MAX_FONT_SIZE, size));
    if (typeof window !== "undefined") {
      localStorage.setItem("mikro-fontsize", String(fontSize.value));
    }
  }

  function increaseFontSize() {
    if (fontSize.value < MAX_FONT_SIZE) {
      setFontSize(fontSize.value + 1);
    }
  }

  function decreaseFontSize() {
    if (fontSize.value > MIN_FONT_SIZE) {
      setFontSize(fontSize.value - 1);
    }
  }

  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
    if (typeof window !== "undefined") {
      localStorage.setItem("mikro-darkmode", String(darkMode.value));
    }
  }

  // Apply font size to CSS variable
  watch(
    fontSize,
    (size) => {
      if (typeof document !== "undefined") {
        document.documentElement.style.setProperty(
          "--content-font-size",
          `${size}px`,
        );
      }
    },
    { immediate: true },
  );

  // Apply dark mode class to document
  watch(
    darkMode,
    (dark) => {
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", dark);
      }
    },
    { immediate: true },
  );

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
    fontSize,
    setFontSize,
    increaseFontSize,
    decreaseFontSize,
    darkMode,
    toggleDarkMode,
  };
});
