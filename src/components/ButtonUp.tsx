import { useEffect, useState } from "react"
import UpArrowIcon from "./Icons/UpArrow"

export default function ButtonUp() {
  const [showButton, setShowButton] = useState(false)

  const goUp = () => {
    const currentScroll = document.documentElement.scrollTop

    if (currentScroll > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const showButtonScroll = () => {
      const currentScroll = document.documentElement.scrollTop

      if(currentScroll > 300) {
	setShowButton(true)
      } else {
	setShowButton(false)
      }
    }

    window.addEventListener("scroll", showButtonScroll)

    return () => window.removeEventListener("scroll", showButtonScroll)
  }, [])

  return (
    <span className={`fixed bottom-2 right-2 p-3 dark:bg-blue-500 bg-gray-700 rounded-full grid items-center dark:text-black text-white ${showButton ? `scale-100` : `scale-0`} transition-transform`}>
      <button onClick={goUp}>
        <UpArrowIcon />
      </button>
    </span>
  )
}
