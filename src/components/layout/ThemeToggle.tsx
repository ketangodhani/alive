"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to dark mode if no saved preference is set
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return <div className="h-9 w-9" />; // Placeholder to prevent hydration layout shift
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition duration-300 hover:bg-zinc-100 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900 shadow-xs"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4.5 w-4.5 text-yellow-500 animate-pulse" />
      ) : (
        <Moon className="h-4.5 w-4.5 text-zinc-800" />
      )}
    </button>
  );
}
