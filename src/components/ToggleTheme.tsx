import useTheme from "@/hooks/useTheme"

import MoonIcon from "./Icons/Moon"
import SunIcon from "./Icons/Sun"

const THEMES = ["light", "dark"]

export default function ToggleTheme() {
  const { toggleTheme, theme } = useTheme()

  return (
    <div className="absolute top-3 right-5 bg-orange-300 dark:bg-zinc-600 flex items-center justify-evenly p-[1px] rounded-full">
      {THEMES.map((actualTheme) => (
        <button
          className={`cursor-pointer rounded-3xl p-2 ${
            theme === actualTheme ? "bg-white text-black" : ""
          }`}
          onClick={toggleTheme}
          key={actualTheme}
          data-theme={actualTheme}
          aria-label={actualTheme}
        >
          {actualTheme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
      ))}
    </div>
  )
}
