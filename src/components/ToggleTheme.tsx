import { useEffect, useState } from "react"

import MoonIcon from "./Icons/Moon"
import SunIcon from "./Icons/Sun"

const THEMES = ["light", "dark"]

export default function ToggleTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme")
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }

    return "light"
  })

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === "light") {
      root.classList.remove("dark")
    } else {
      root.classList.add("dark")
    }
  }, [theme])

  return (
    <div className="absolute top-3 right-5 bg-orange-300 dark:bg-zinc-600 flex items-center justify-evenly p-[1px] rounded-full">
      {THEMES.map((actualTheme) => (
        <button
          className={`cursor-pointer rounded-3xl p-2 ${
            theme === actualTheme ? "bg-white text-black" : ""
          }`}
          onClick={toggleTheme}
          key={actualTheme}
        >
          {actualTheme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
      ))}
    </div>
  )
}
