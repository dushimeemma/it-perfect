"use client";

import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeIcon({ classNames }: { classNames?: string }) {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <button onClick={handleSwitchTheme} className={classNames}>
      {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
}
