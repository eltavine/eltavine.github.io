import { onBeforeUnmount, onMounted, ref } from "vue";

const THEME_STORAGE_KEY = "eltavine-theme";
const THEME_COLORS = {
  dark: "#000000",
  light: "#f6f5f2",
};

function getStoredTheme() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const isDark = theme === "dark";
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
  themeColorMeta?.setAttribute("content", isDark ? THEME_COLORS.dark : THEME_COLORS.light);
}

export function useThemeMode() {
  const isDark = ref(typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : false);
  const preference = ref(getStoredTheme());

  let mediaQuery = null;
  let handleSystemThemeChange = null;

  function syncTheme() {
    const resolvedTheme = preference.value ?? getSystemTheme();
    isDark.value = resolvedTheme === "dark";
    applyTheme(resolvedTheme);
  }

  function toggleTheme() {
    const nextTheme = isDark.value ? "light" : "dark";
    preference.value = nextTheme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Keep the current session switch even if persistence is unavailable.
    }

    syncTheme();
  }

  onMounted(() => {
    syncTheme();

    mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    handleSystemThemeChange = () => {
      if (!preference.value) {
        syncTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
  });

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener("change", handleSystemThemeChange);
  });

  return {
    isDark,
    toggleTheme,
  };
}
